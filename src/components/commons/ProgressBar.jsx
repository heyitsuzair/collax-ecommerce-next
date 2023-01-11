import React from "react";
import LoadingBar from "react-top-loading-bar";
const ProgressBar = ({ progress }) => {
  return (
    <LoadingBar
      waitingTime={300}
      shadow={true}
      color={"#3b82f6"}
      progress={progress}
      height={3}
    />
  );
};

export default ProgressBar;
