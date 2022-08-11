import React from "react";

export interface tabNameProps {
  children: string;
  name: string;
  handlerSelectTab: (element: string) => void;
}

const AdminPageTab = ({ name, handlerSelectTab }: tabNameProps) => {
  function onClick() {
    handlerSelectTab(name);
  }
  return <span onClick={onClick}>{name}</span>;
};

export default AdminPageTab;
