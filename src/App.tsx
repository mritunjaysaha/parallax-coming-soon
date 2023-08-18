// import "./styles.scss";
import Parallax from "parallax-js";
import "@fontsource/poppins";
import { Summer } from "./components/Summer";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   const scene = document.getElementById("scene");
  //   const parallaxInstance = new Parallax(scene, {
  //     relativeInput: true,
  //     invertX: false,
  //     invertY: false,
  //     frictionX: 0.1
  //   });

  //   return () => parallaxInstance.destroy();
  // }, []);
  return (
    <>
      {/* <div id="scene" className="scene">
        <div data-depth="0.2">My first Layer! </div>
        <div data-depth="0.3">My second Layer!</div>
      </div> */}
      <Summer />
    </>
  );
}
