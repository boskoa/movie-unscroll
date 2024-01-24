import { useState, useEffect } from "react";

function useIntersectionObserver(ref) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      treshohld: 1,
    };

    const observer = new IntersectionObserver((targets) => {
      const [target] = targets;
      if (target.isIntersecting) {
        setIntersecting(true);
      } else {
        setIntersecting(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return intersecting;
}

export default useIntersectionObserver;
