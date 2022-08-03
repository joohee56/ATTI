import React, { useEffect, useState } from "react";
import OpenViduVideoComponent from "./OpenViduVideoComponent";
import styled from "styled-components";

const UserVideo = styled.div`
  /* width: 500px;
  height: 420px; */
  width: ${(props) => (props.main ? "1280px" : "500px")};
  height: ${(props) => (props.main ? "800px" : "420px")};
`;

export default function UserVideoComponent(props) {
  console.log("UserVideoComponent", props);
  function getNickName() {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  }
  const [main, setMain] = useState(false);
  useEffect(() => {
    if (props.main === "main") {
      setMain(true);
    }
  }, [props.main]);
  return (
    <div>
      {props.streamManager !== undefined ? (
        <UserVideo main={main}>
          <OpenViduVideoComponent
            streamManager={props.streamManager}
            main={props.main}
          />
          <div>
            <p>{getNickName()}</p>
          </div>
        </UserVideo>
      ) : null}
    </div>
  );
}
