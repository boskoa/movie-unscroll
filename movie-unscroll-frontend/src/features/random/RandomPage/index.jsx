import { useEffect, useState } from "react";
import RandomMovie from "./RandomMovie";
import RotorComponent from "./RotorComponent";

function RandomPage() {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const index = setInterval(() => setCount((p) => (p > 0 ? p - 1 : 0)), 1000);
    setAnimate(true);

    return () => clearInterval(index);
  }, []);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => setShow(false), 1500);
      setAnimate(false);
    }
  }, [count]);

  return (
    <>
      {show ? <RotorComponent animate={animate} count={count} /> : ""}
      <RandomMovie show={show} />
    </>
  );
}

export default RandomPage;
