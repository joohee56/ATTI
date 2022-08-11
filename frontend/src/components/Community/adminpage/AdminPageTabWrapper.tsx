import React, { useState } from "react";
import AdminPageTab from "./AdminPageTab";

interface adminPageWrapperProps {
  handlerSelect: (e: string) => void;
  select: string;
}

const AdminPageTabWrapper = ({
  handlerSelect,
  select,
}: adminPageWrapperProps) => {
  const tab = ["시간표", "멤버 관리", "출결 확인", "초대코드"];

  return (
    <div>
      {tab.map((e) => (
        <AdminPageTab handlerSelectTab={handlerSelect} name={e} key={e}>
          {e}
        </AdminPageTab>
      ))}
    </div>
  );
};

export default AdminPageTabWrapper;
