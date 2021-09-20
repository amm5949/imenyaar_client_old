import React from "react";
import AppText from "./AppText";

function LoadingAnimation({ visible = true }) {
  if (!visible) return null;
  return <AppText>لطفا منتظر بمانید...</AppText>
}

export default LoadingAnimation;
