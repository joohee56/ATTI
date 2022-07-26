import React from "react";
import styled from "styled-components";
import { DummyUser } from "./Meeting";

const AttendeesListDiv = styled.div`
  color: black;
`;
const AttendeesList = ({ items }: { items: DummyUser[] }) => {
  console.log(items);
  return (
    <AttendeesListDiv>
      {items.map((e) => (
        <div key={e.id}>
          <div>{e.name}</div>
          <div>{e.id}</div>
        </div>
      ))}
    </AttendeesListDiv>
  );
};

export default AttendeesList;
