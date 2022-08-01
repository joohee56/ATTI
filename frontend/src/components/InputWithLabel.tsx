import React from "react";
import styled from "styled-components";

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
  width: 50%;
  border: 1px solid #bdbebd;
  outline: none;
  border-radius: 0px;
  line-height: 2rem;
  font-size: 0.8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.4rem;
  ::placeholder {
    color: #bdbebd;
  }
`;

interface inputInfo {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>| undefined;
}

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({ label, ...rest }: inputInfo) => (
  <Wrapper>
    {/* <Label>{label}</Label> */}
    <Input {...rest}/>
  </Wrapper>
);

export default InputWithLabel;
