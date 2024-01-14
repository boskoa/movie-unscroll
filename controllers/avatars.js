const router = require("express").Router();
const multer = require("multer");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { User } = require("../models");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 512000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Only .png, .jpg, .jpeg and .webp formats are allowed."),
      );
    }

    return 0;
  },
});

router.post(
  "/:id",
  tokenExtractor,
  upload.single("file"),
  async (req, res, next) => {
    try {
      const user = await User.findByPk(req.decodedToken.id);
      if (!user) {
        return res.status(401).json({ error: "Missing token" });
      }

      if (!req.file) {
        return res.status(401).json({ error: "No file" });
      }

      if (
        req.file.mimetype !== "image/jpeg" &&
        req.file.mimetype !== "image/png" &&
        req.file.mimetype !== "image/jpg" &&
        req.file.mimetype !== "image/webp"
      ) {
        return res.status(401).json({
          error: "Not a proper image type. Use jpg, jpeg, webp or png.",
        });
      }

      res.status(200).end();
    } catch (error) {
      next(error);
    }

    const { filename: image } = req.file;
    await sharp(req.file.path)
      .resize({ width: 120, height: 120 })
      .webp({ quality: 80 })
      .toFile(path.resolve(req.file.destination, `${image}.webp`))
      .then((info) => console.log("Info: ", info))
      .catch((error) => console.log("Error: ", error));
    fs.unlinkSync(req.file.path);
    return 0;
  },
);

module.exports = router;
