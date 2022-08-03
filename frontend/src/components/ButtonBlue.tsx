import React, { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";
import { PaletteKeyTypes } from "../styles/palette";

interface ButtonStyle {
  buttonColor?: PaletteKeyTypes;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function ButtonBlue({children}: ButtonProps): ReactElement {
  return <ButtonBlueStyled>{children}</ButtonBlueStyled>;
}

export const ButtonBlueStyled = styled.button<ButtonStyle>`
background: linear-gradient(135deg, #9dceff 0% ,#92a3fd 100%);
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



export default ButtonBlue;
