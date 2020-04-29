import React from "react";
import "./scroll-to-top.css";

function scrollTop() {
  return window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const ScrollToTop = () => (
  <div className="scroll-to-top">
    <a onClick={() => scrollTop()}>^</a>
  </div>
);

export default ScrollToTop;
