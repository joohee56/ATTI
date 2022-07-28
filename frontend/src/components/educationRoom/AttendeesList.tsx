import React, { useEffect, useState } from "react";
import styled from "styled-components";

type peopleProps = {
  peopleList: string[];
  // children: React.ReactNode;
};

const AttendeesListDiv = styled.div`
  width: 350px;
  height: 500px;
  background-color: gray;
  color: black;
`;
const AttendeesList = ({ peopleList }: peopleProps) => {
  console.log(peopleList);
  return (
    <div>
      {peopleList !== undefined && peopleList.length > 0 ? (
        <AttendeesListDiv>
          {peopleList.map((e, i) => (
            <div key={i}>
              <>{console.log(e)}</>
              <div>{e}</div>
            </div>
          ))}
        </AttendeesListDiv>
      ) : null}
    </div>
  );
};

export default AttendeesList;
