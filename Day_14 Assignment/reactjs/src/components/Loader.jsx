import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../lottie/loader.json";

const Loader = () => (
  <div style={{ width: 150, margin: "auto" }}>
    <Lottie animationData={loaderAnimation} loop={true} />
  </div>
);

export default Loader;
