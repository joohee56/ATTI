import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function ButtonBlue({children}: ButtonProps): ReactElement {
  return <ButtonStyled>{children}</ButtonStyled>;
}

export const ButtonStyled = styled.button`
background: var(--button-bg-color, #9DCEFF);
`;

export default ButtonBlue;
