import React, { useEffect, useRef } from "react";

export default function OpenViduVideoComponent(props) {
  const videoRef = useRef();

  useEffect(() => {
    if (props && !!videoRef) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props]);

  return <video autoPlay={true} ref={videoRef} />;
}
