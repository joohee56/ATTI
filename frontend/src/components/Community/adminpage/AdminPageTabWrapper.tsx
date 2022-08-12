import React, { useState } from "react";
import AdminPageTab from "./AdminPageTab";
import styled from "styled-components";

interface adminPageWrapperProps {
  handlerSelect: (e: string) => void;
  select: string;
}

const AdminTabWrapper = styled.div`
  margin-top: 5%;
  margin-left: 5%;
`;

const AdminPageTabWrapper = ({
  handlerSelect,
  select,
}: adminPageWrapperProps) => {
  const tab = ["시간표", "멤버 관리", "출결 확인", "초대코드"];

  return (
    <AdminTabWrapper>
      {tab.map((e) => (
        <AdminPageTab handlerSelectTab={handlerSelect} name={e} key={e}>
          {e}
        </AdminPageTab>
      ))}
    </AdminTabWrapper>
  );
};

export default AdminPageTabWrapper;
