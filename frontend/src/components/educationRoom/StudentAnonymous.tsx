import React from "react";

interface ReqeustProps {
  anonymousOK: () => void;
  setOnClickToggleModal: () => void;
  detail: string;
  detail2: string;
}

const StudentAnonymouse = ({
  anonymousOK,
  setOnClickToggleModal,
  detail,
  detail2,
}: ReqeustProps) => {
  return (
    <div>
      <h1>{detail}</h1>
      <div>
              {detail2 }
      </div>
      <div>
        <button onClick={anonymousOK}>예</button>
        <button onClick={setOnClickToggleModal}>아니오</button>
      </div>
    </div>
  );
};

export default StudentAnonymouse;
