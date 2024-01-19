import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "/public/animation.json";

export default function animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
