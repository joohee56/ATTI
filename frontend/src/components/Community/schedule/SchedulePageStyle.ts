import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const LeftBar = styled.div`
  width: 100px;
  height: 65px;
  display: flex;
  margin-left: auto;
`;

export const TempDiv = styled.div`
  margin-top: 18%;
`;

export const AddClassButton = styled.button`
  width: 10vw;
  background: none;
  height: 65px;
  border: none;
  :hover {
    background-color: #ffa;
    cursor: crosshair;
  }
`;

export const ExistenceClass = styled.div<{
  extendsHeight: number;
  calcColor: string | undefined;
}>`
  width: 10vw;
  background-color: ${(props) => `${props.calcColor}`};
  height: ${(props) => `${props.extendsHeight * 65}px`};
  border-top-color: #ada4a5;
  border-bottom-color: #ada4a5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScheduleDiv = styled.div``;

export const ScheduleLi = styled.li`
  list-style: none;
  height: 65px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid #ada4a5;
`;

export const ScheduleUl = styled.ul<{ index: number }>`
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
  border-top: 1px solid #ada4a5;
  border-right: 1px dashed #c58bf2;
  border-left: ${(props) => (props.index === 0 ? "1px dashed #c58bf2" : null)};
`;

export const DeleteButton = styled.button`
  position: absolute;
  display: flex;
  top: 0px;
  left: 80%;
  border: none;
  background: none;
`;

export const ConnectButton = styled.button<{
  calcColor: string | undefined;
}>`
  position: absolute;
  width: 100%;
  bottom: 0px;
  border: none;
  background-color: ${(props) => `${props.calcColor}`};
`;

export const TextWrapper = styled.div<{
  calcColor: string | undefined;
}>`
  text-align: center;
  color: ${(props) => `${props.calcColor}`};
`;
