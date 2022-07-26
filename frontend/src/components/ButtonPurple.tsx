import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function ButtonPurple({children}: ButtonProps): ReactElement {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
background: var(--button-bg-color, #EEA4CE);
`;

export default ButtonPurple;
