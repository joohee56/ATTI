import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function ButtonPurple({children}: ButtonProps): ReactElement {
  return <ButtonPurpleStyled>{children}</ButtonPurpleStyled>;
}

export const ButtonPurpleStyled = styled.button`
background: linear-gradient(135deg, #eea4ce 0%,#c58bf2 100%);
color: white;
border-radius: 1rem;
border: 0px solid;
margin: 0;
padding: 0.3rem 1rem;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
font-family: 'Noto Sans KR', sans-serif;
font-size: 0.8rem;
font-weight: bold;
cursor:pointer
`;

export default ButtonPurple;
