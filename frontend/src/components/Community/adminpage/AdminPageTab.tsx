import React from "react";
import styled from "styled-components";
export interface tabNameProps {
  children: string;
  name: string;
  handlerSelectTab: (element: string) => void;
}

const Tab = styled.span`
  margin-left: 3%;
  margin-right: 3%;
`;

const AdminPageTab = ({ name, handlerSelectTab }: tabNameProps) => {
  function onClick() {
    handlerSelectTab(name);
  }
  return <Tab onClick={onClick}>{name}</Tab>;
};

export default AdminPageTab;
