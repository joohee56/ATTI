import React, { useEffect, useState } from "react";
import OpenViduVideoComponent from "./OpenViduVideoComponent";
import styled from "styled-components";

const UserVideo = styled.div`
  /* width: 500px;
  height: 420px; */

  margin: 3px;
  width: ${(props) => (props.main ? "960px" : "360px")};
  height: ${(props) => (props.main ? "600px" : "240px")};
  border-radius: ${(props) => (props.main ? null : "25px")};

  /* border-radius: 25px; */
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;
`;
const VideoAndNickNameParentDiv = styled.div`
  position: relative;
`;

const NickNameDiv = styled.div`
  display: inline;
  text-align: center;
  vertical-align: bottom;
  background-color: white;
  position: absolute;
  bottom: 5px;
  left: 15px;
  overflow: hidden;
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
    <VideoAndNickNameParentDiv>
      {props.streamManager !== undefined ? (
        <UserVideo main={main} id="aaaa">
          <OpenViduVideoComponent
            streamManager={props.streamManager}
            main={props.main}
          />
          {main ? null : <NickNameDiv>{getNickName()}</NickNameDiv>}
        </UserVideo>
      ) : null}
    </VideoAndNickNameParentDiv>
  );
}
