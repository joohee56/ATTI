import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

interface peopleListInterface {
  data: string;
  connectionId: string;
  creationTime: number;
  dispose: boolean;
  remoteOptions: any;
  session: any;
  stream: any;
}
type peopleProps = {
  peopleList: [peopleListInterface];
  setChattingInfo: ({
    data,
    connectionId,
  }: {
    data: string;
    connectionId: string;
  }) => void;
  openChattingList: boolean;
  // children: React.ReactNode;
};
interface styledProps {
  openChattingList: boolean;
}
const AttendeesWrapper = styled.div<styledProps>`
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    padding-right: 15px;
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  width: 95%;
  height: ${(props) => (props.openChattingList ? "45%" : "95%")};
  border-radius: 15px;
`;
const AttendeesListDiv = styled.div`
  width: 350px;
  height: 100%;
  background-color: gray;
  color: black;
`;
const AttendWrapper = styled.div`
  height: 25px;
  display: flex;
  width: 100%;
  align-items: center;
  /* justify-content: space-between; */
`;
const NickNameWrapper = styled.div`
  margin-left: 5px;
`;
const AudioAndVideoButton = styled.button`
  background: none;
  border: none;
`;
const AudioAndVideoWrapper = styled.div`
  margin-left: auto;
  margin-right: 30px;
`;
const AttendeesList = ({
  peopleList,
  setChattingInfo,
  openChattingList,
}: peopleProps) => {
  console.log(peopleList);
  const onClick = (event: any) => {
    console.log(event.target.id);

    setChattingInfo({
      data: event.target.value,
      connectionId: event.target.id,
    });
  };
  return (
    <AttendeesWrapper openChattingList={openChattingList}>
      {peopleList !== undefined && peopleList.length > 0 ? (
        <AttendeesListDiv>
          {peopleList.map((e, i) => (
            <AttendWrapper key={i}>
              <NickNameWrapper>
                <AudioAndVideoButton
                  onClick={onClick}
                  id={e.connectionId}
                  value={JSON.parse(e.data).clientData}
                >
                  {JSON.parse(e.data).clientData}
                </AudioAndVideoButton>
              </NickNameWrapper>
              <AudioAndVideoWrapper>
                <AudioAndVideoButton>
                  {e.stream.videoActive ? (
                    <VideocamIcon></VideocamIcon>
                  ) : (
                    <VideocamOffIcon />
                  )}
                </AudioAndVideoButton>
                <AudioAndVideoButton>
                  {e.stream.audioActive ? <MicIcon /> : <MicOffIcon />}
                </AudioAndVideoButton>
              </AudioAndVideoWrapper>
            </AttendWrapper>
          ))}
        </AttendeesListDiv>
      ) : null}
    </AttendeesWrapper>
  );
};

export default AttendeesList;
