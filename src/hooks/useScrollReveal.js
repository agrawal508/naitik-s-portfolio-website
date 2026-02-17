import { useEffect, useRef } from "react";

const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("active");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return ref;
};

export default useScrollReveal;
