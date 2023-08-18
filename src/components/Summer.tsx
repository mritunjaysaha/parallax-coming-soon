import "../styles.scss";
import Parallax from "parallax-js";
import { useEffect } from "react";

export const Summer = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    const parallaxInstance = new Parallax(text);

    return () => parallaxInstance.destroy();
  }, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="scene" id="scene">
          <h2 id="text" className="text">
            <span data-depth-y="2">S</span>
            <span data-depth-y="-6">U</span>
            <span data-depth-y="5">M</span>
            <span data-depth-y="-8">M</span>
            <span data-depth-y="-3">E</span>
            <span data-depth-y="6">R</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
