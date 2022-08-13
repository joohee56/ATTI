import styled from "styled-components";

export const LeftBar = styled.div`
  width: 100px;
  height: 65px;
  display: flex;
  margin-left: auto;
`;

export const AddClassButton = styled.button`
  width: 10vw;
  background: none;
  height: 65px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-top-color: #ada4a5;
  border-bottom-color: #ada4a5;
  border-left: 2px dashed;
  border-right: 2px dashed;
`;

export const ExistenceClass = styled.div<{ extendsHeight: number }>`
  width: 10vw;
  background: none;
  height: ${(props) => props.extendsHeight};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-top-color: #ada4a5;
  border-bottom-color: #ada4a5;
  border-left: 1px dashed;
  border-right: 1px dashed;
`;
