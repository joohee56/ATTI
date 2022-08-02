import React from "react";
import OpenViduVideoComponent from "./OpenViduVideoComponent";

export default function UserVideoComponent(props) {
  console.log("UserVideoComponent", props);
  function getNickName() {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  }

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div>
          <OpenViduVideoComponent streamManager={props.streamManager} />
          <div>
            <p>{getNickName()}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
