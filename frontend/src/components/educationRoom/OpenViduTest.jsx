import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import UserVideoComponent from "./UserVideoComponent";
import AttendeesList from "./AttendeesList";
import ChattingWrapper from "./ChattingWrapper";
import { PeopleBox, OpenviduBox, VideoBox } from "./OpenViduTestStyled";

// const OPENVIDU_SERVER_URL = "https://" + window.location.hostname + ":4443";
// const OPENVIDU_SERVER_SECRET = "MY_SECRET";
const OPENVIDU_SERVER_URL = "https://i7b107.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "atti";
// 도메인: https://i7b107.p.ssafy.io

const OpenViduTest = () => {
  const [state, setState] = useState({
    mySessionId: "SessionA",
    myUserName: "Participant" + Math.floor(Math.random() * 100),
    session: undefined,
    mainStreamManager: undefined,
    publisher: undefined,
    subscribers: [],
  });
  const [peopleList, setPeopleList] = useState([]);
  const [chatList, setChatList] = useState([]);
  const messageRef = useRef();
  function handleChangeSessionId(e) {
    setState((prev) => ({
      ...prev,
      mySessionId: e.target.value,
    }));
  }

  function handleChangeUserName(e) {
    this.setState((prev) => ({
      ...prev,
      myUserName: e.target.value,
    }));
  }

  function handleMainVideoStream(stream) {
    if (state.mainStreamManager !== stream) {
      setState((prevState) => ({
        ...prevState,
        mainStreamManager: stream,
      }));
    }
  }

  function deleteSubScriber(streamManager) {
    let subscribers = state.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      const peoples = [state.myUserName];
      setPeopleList(
        subscribers.forEach((e) => {
          console.log(e);
          peoples.push(JSON.parse(e.stream.connection.data).clientData);
        })
      );
      setState((prevState) => ({
        ...prevState,
        subscribers: subscribers,
      }));
    }
  }
  let OV = new OpenVidu();
  useEffect(() => {
    if (state.session !== undefined) {
      state.session.on("signal", (event) => {
        console.log(JSON.parse(event.from.data).clientData);
        setChatList({
          message: event.data,
          from: JSON.parse(event.from.data).clientData,
        });
      });
    }
  }, [state.session, state.subscribers]);
  async function getToken() {
    const sessionId_1 = await createSession(state.mySessionId);
    return createToken(sessionId_1);
  }
  async function joinSession(e) {
    e.preventDefault();
    OV = new OpenVidu();

    const mySession = OV.initSession();
    setState((prevState) => ({
      ...prevState,
      session: mySession,
    }));
    mySession.on("streamCreated", (event) => {
      let subscriber = mySession.subscribe(event.stream, "subscriber");
      let subscribers = state.subscribers;
      subscribers.push(subscriber);
      let peoples = [state.myUserName];
      subscribers.forEach((e) => {
        peoples.push(JSON.parse(e.stream.connection.data).clientData);
      });
      setPeopleList(peoples);
      setState((prevState) => ({
        ...prevState,
        subscribers: subscribers,
      }));
    });

    mySession.on("streamDestroyed", (event) => {
      deleteSubScriber(event.stream.streamManager);
    });
    getToken().then((token) => {
      mySession
        .connect(token, { clientData: state.myUserName })
        .then(async () => {
          let devices = await OV.getDevices();
          let videoDevices = devices.filter(
            (device) => device.kind === "videoinput"
          );
          let publisher = OV.initPublisher(undefined, {
            audioSource: undefined, // The source of audio. If undefined default microphone
            videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
            publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
            publishVideo: true, // Whether you want to start publishing with your video enabled or not
            resolution: "640x480", // The resolution of your video
            frameRate: 30, // The frame rate of your video
            insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
            mirror: true, // Whether to mirror your local video or not
          });

          // --- 6) Publish your stream ---

          mySession.publish(publisher);

          // Set the main video in the page to display our webcam and store our Publisher

          setState((prevState) => ({
            ...prevState,
            currentVideoDevice: videoDevices[0],
            mainStreamManager: publisher,
            publisher: publisher,
          }));
        })
        .catch((error) => {
          console.log("세션에 연결할 수 없습니다.:", error.code, error.message);
        });
    });

    mySession.on("exception", (exception) => {
      console.warn(exception);
    });
  }
  function screenShare() {
    const sessionScreen = state.session;
    getToken()
      .then((token) => {
        let publisher = OV.initPublisher(undefined, {
          videoSource: "screen",
        });

        publisher.once("accessAllowed", (event) => {
          publisher.stream
            .getMediaStream()
            .getVideoTracks()[0]
            .addEventListener("ended", async () => {
              console.log("User press the Stop sharing button");
              sessionScreen.unpublish(publisher);
              let devices = await OV.getDevices();
              let videoDevices = devices.filter(
                (device) => device.kind === "videoinput"
              );
              console.log("devices", videoDevices);
              let cameraPublisher = OV.initPublisher(undefined, {
                videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
                publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                publishVideo: true, // Whether you want to start publishing with your video enabled or not
                mirror: true, // Whether to mirror your local video or not
              });

              sessionScreen.publish(cameraPublisher);
              setState((prevState) => ({
                ...prevState,
                currentVideoDevice: videoDevices,
                mainStreamManager: cameraPublisher,
                publisher: cameraPublisher,
              }));
            });
          sessionScreen.unpublish(state.publisher);

          sessionScreen.publish(publisher);
          setState((prevState) => ({
            ...prevState,
            publisher: publisher,
            mainStreamManager: publisher,
          }));
        });

        publisher.once("accessDenied", (event) => {
          console.warn("ScreenShare: Access Denied");
        });
      })
      .catch((error) => {
        console.warn(
          "there was an error connecting to the session",
          error.code.error.message``
        );
      });
  }
  function leaveSession() {
    const mySession = state.session;

    if (mySession) {
      mySession.disconnect();
      mySession
        .signal({
          data: "hello world!",
          to: [],
          type: "disconnectUser",
        })
        .then(() => {
          console.log("Message send success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    OV = null;

    setState({
      session: undefined,
      subscrubers: [],
      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    });
  }
  async function switchCamera() {
    try {
      const devices = await OV.getDevices();
      let videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices && videoDevices.length > 1) {
        let newVideoDevice = videoDevices.filter(
          (device) => device.deviceId !== state.currentVideoDevice.deviceId
        );

        if (newVideoDevice.length > 0) {
          // Creating a new publisher with specific videoSource
          // In mobile devices the default and first camera is the front one
          let newPublisher = OV.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          });

          //newPublisher.once("accessAllowed", () => {
          await state.session.unpublish(state.mainStreamManager);

          await state.session.publish(newPublisher);
          setState((prevState) => ({
            ...prevState,
            currentVideoDevice: newVideoDevice,
            mainStreamManager: newPublisher,
            publisher: newPublisher,
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  function sendMessage() {
    const mySession = state.session;
    mySession
      .signal({
        data: messageRef.current.value,
        to: [],
        type: "my-chat",
      })
      .then(() => {
        console.log("Message send success");
      })
      .catch((error) => {
        console.log(error);
      });
    messageRef.current.value = "";
  }

  return (
    <div>
      {state.session === undefined ? (
        <div>
          테스트입니다
          <input
            id="userName"
            type="text"
            value={state.myUserName}
            onChange={handleChangeUserName}
          />
          <input
            type="text"
            id="sessionId"
            value={state.mySessionId}
            onChange={handleChangeSessionId}
          />
          <button onClick={joinSession}>입장하기</button>
        </div>
      ) : null}
      {state.session !== undefined ? (
        <div>
          <div>{state.mySessionId}</div>
          <div>
            <button onClick={leaveSession}>세션 나가기</button>
            <input type="text" id="message" ref={messageRef} />
            <button onClick={sendMessage}>메시지 보내기</button>
            <button onClick={screenShare}>화면 공유 하기</button>
          </div>
          <OpenviduBox>
            <VideoBox>
              {state.mainStreamManager !== undefined ? (
                <div className="col-md-6">
                  <UserVideoComponent streamManager={state.mainStreamManager} />
                  <button onClick={switchCamera}> 카메라 변경 </button>
                </div>
              ) : null}
              <div>
                {state.publisher !== undefined ? (
                  <div onClick={() => handleMainVideoStream(state.publisher)}>
                    <UserVideoComponent streamManager={state.publisher} />
                  </div>
                ) : null}
                {state.subscribers &&
                  state.subscribers.map((sub, i) => (
                    <div
                      className="col-md-6"
                      key={i}
                      onClick={() => handleMainVideoStream(sub)}
                    >
                      test
                      <UserVideoComponent streamManager={sub} />
                    </div>
                  ))}
              </div>
            </VideoBox>
            <PeopleBox>
              <div>
                <AttendeesList peopleList={peopleList} />
              </div>
              <div>
                <ChattingWrapper chatList={chatList} />
              </div>
            </PeopleBox>
          </OpenviduBox>
        </div>
      ) : null}
    </div>
  );

  /*


  서버사이드!!!!!


  */
  // 서버에서 해야 할꺼임!

  function createSession(sessionId) {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify({ customSessionId: sessionId });
      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization:
              "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("CREATE SESION", response);
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              "No connection to OpenVidu Server. This may be a certificate error at " +
                OPENVIDU_SERVER_URL
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"'
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + "/accept-certificate"
              );
            }
          }
        });
    });
  }

  function createToken(sessionId) {
    return new Promise((resolve, reject) => {
      var data = {};
      axios
        .post(
          OPENVIDU_SERVER_URL +
            "/openvidu/api/sessions/" +
            sessionId +
            "/connection",
          data,
          {
            headers: {
              Authorization:
                "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("TOKEN", response);
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }
};

export default OpenViduTest;
