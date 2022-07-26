import React from "react";
import AttendeesList from "./AttendeesList";
import ChattingWrapper from "./ChattingWrapper";
import OpenViduTest from "./OpenViduTest";

export interface DummyUser {
  id: number;
  name: string;
  status: boolean;
}

const Meeting = () => {
  const DummyUsers: DummyUser[] = [
    { id: 1, name: "정진", status: true },
    { id: 2, name: "이현태", status: false },
    { id: 3, name: "이주희", status: true },
    {
      id: 4,
      name: "박범수",
      status: true,
    },
    { id: 5, name: "김연수", status: false },
  ];
  return (
    <div>
      <div>
        <OpenViduTest></OpenViduTest>
        {/* <AttendeesList items={DummyUsers} />
        <ChattingWrapper /> */}
      </div>
    </div>
  );
};

export default Meeting;
