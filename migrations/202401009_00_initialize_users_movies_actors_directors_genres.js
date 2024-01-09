module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [2, 20],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [2, 30],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("movies", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tmdb_id: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      movie_show: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("actors", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tmdb_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("directors", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tmdb_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("genres", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tmdb_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("movies");
    await queryInterface.dropTable("actors");
    await queryInterface.dropTable("directors");
    await queryInterface.dropTable("genres");
  },
};
