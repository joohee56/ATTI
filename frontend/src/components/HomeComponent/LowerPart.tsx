import * as React from "react";

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/images/logoComputer.png";
import { ButtonBlue } from "../ButtonStyled";
import { palette } from "../../styles/palette";
import HomeImage2 from "../../assets/images/HomeImage2.jpg";
import mainBG from "../../assets/images/mainBG.png";
import AttiText1 from "../../assets/images/Text/AttiText1.png";
import AttiText2 from "../../assets/images/Text/AttiText2.png";
import AttiText3 from "../../assets/images/Text/AttiText3.png";
import AttiText4 from "../../assets/images/Text/AttiText4.png";

function LowPort() {
  return (
    <Main>
      <StyledContent>
        <ADD>아래부분</ADD>
        <BDD>아래부분</BDD>
        <ADD>아래부분</ADD>
        <BDD>아래부분</BDD>
        <ADD>아래부분</ADD>
        <BDD>아래부분</BDD>
        <ADD>아래부분</ADD>
      </StyledContent>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  text-align: center;
  color: white;
  font-weight: bold;
  background: linear-gradient(#a0b0fd 0%, #ffffff 100%);
  opacity: 0.5;
`;

const StyledContent = styled.div`
  width: 500px;
  height: auto;
`;

const ADD = styled.div`
  border-bottom: 1px solid;
  border-top: 1px solid;
  width: 100vw;
  height: 400px;
`;
const BDD = styled.div`
  border-bottom: 1px solid;
  border-top: 1px solid;
  width: 100vw;
  height: 400px;
`;

export default LowPort;
