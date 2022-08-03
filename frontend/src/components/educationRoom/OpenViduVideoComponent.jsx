import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Video = styled.video`
  width: ${(props) => (props.main ? "1280px" : "360px")};
  height: ${(props) => (props.main ? "720px" : "240px")};
`;

export default function OpenViduVideoComponent(props) {
  const videoRef = useRef();
  const [main, setMain] = useState(false);
  useEffect(() => {
    if (props && !!videoRef) {
      props.streamManager.addVideoElement(videoRef.current);
    }
    if (props.main === "main") {
      setMain(true);
    }
  }, [props]);

  return <Video autoPlay={true} ref={videoRef} main={main} />;
}
