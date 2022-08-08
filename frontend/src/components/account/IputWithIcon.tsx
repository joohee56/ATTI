import { SvgIconComponent } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import React from "react";
import styled from "styled-components";
import { palette } from "../../styles/palette";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  & + & {
    margin-top: 0.2rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: #e9e9e9;
  margin-bottom: 0.25rem;
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Input = styled.input`
  background: ${palette.gray_1};
  width: 50%;
  border: 1px solid #bdbebd;
  outline: none;
  line-height: 2rem;
  font-size: 0.8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.4rem;
  ::placeholder {
    color: #bdbebd;
  }
`;

const iconstyle = {
  fontSize: "20px",
  color: "action",
};

const textFieldstyle = {
  background: "white",
  border: "1px solid #e2e2e1",
  overflow: "hidden",
  borderRadius: 4,
  outline: "none",
  lineHeight: "2rem",
  fontSize: "0.8rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
};

interface inputInfo {
  icon?: SvgIconComponent;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithIcon = ({ icon, ...rest }: inputInfo) => (
  <Wrapper>
    {icon && <SvgIcon component={icon} style={iconstyle} inheritViewBox />}
    <Input {...rest} />
    <br></br>
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Wrapper>
);

export default InputWithIcon;
