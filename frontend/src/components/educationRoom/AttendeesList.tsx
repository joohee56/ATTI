import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface peopleListInterface {
  data: string;
  connectionId: string;
  creationTime: number;
  dispose: boolean;
  remoteOptions: any;
  session: any;
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
  // children: React.ReactNode;
};

const AttendeesListDiv = styled.div`
  width: 350px;
  height: 500px;
  background-color: gray;
  color: black;
`;
const AttendeesList = ({ peopleList, setChattingInfo }: peopleProps) => {
  console.log(peopleList);
  const onClick = (event: any) => {
    console.log(event.target.id);

    setChattingInfo({
      data: event.target.value,
      connectionId: event.target.id,
    });
  };
  return (
    <div>
      {peopleList !== undefined && peopleList.length > 0 ? (
        <AttendeesListDiv>
          {peopleList.map((e, i) => (
            <div key={i}>
              <>{console.log(e)}</>
              <button
                onClick={onClick}
                id={e.connectionId}
                value={JSON.parse(e.data).clientData}
              >
                {JSON.parse(e.data).clientData}
              </button>
            </div>
          ))}
        </AttendeesListDiv>
      ) : null}
    </div>
  );
};

export default AttendeesList;
