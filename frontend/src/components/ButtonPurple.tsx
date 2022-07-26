import React, { ReactElement } from "react";
import styled from "styled-components";

function Button(): ReactElement {
  return <ButtonStyled>Button</ButtonStyled>;
}

const ButtonStyled = styled.button``;

export default Button;