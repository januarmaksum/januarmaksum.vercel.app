/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import useScreenSize from "./hooks/useScreenSize";

export default function Layout({ children }) {
  const screenSize = useScreenSize();
  const heroRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY + scrollDistance}px`);
    };

    const handleScroll = () => {
      const scrollTop = window.offsetY || document.documentElement.scrollTop;
      setScrollDistance(scrollTop);
    };

    if (screenSize.width >= 1024) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDistance, screenSize]);

  return (
    <>
      <div
        ref={heroRef}
        className="hero fixed lg:absolute inset-0 transition pointer-events-none duration-300"
      ></div>
      {children}
    </>
  );
}
