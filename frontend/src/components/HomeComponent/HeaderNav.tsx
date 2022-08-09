import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBlue } from "../ButtonStyled";
import LogoCirce from "../../assets/images/logoCirce.png";
import AttiText1 from "../../assets/images/Text/AttiText1.png";
import AttiText2 from "../../assets/images/Text/AttiText2.png";
import AttiText3 from "../../assets/images/Text/AttiText3.png";
import AttiText4 from "../../assets/images/Text/AttiText4.png";
import { IconButton } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const Header = styled.header`
  width: 90%;
  height: 30px;
  max-width: 1600px;
  padding: 10px 5rem;
  font-weight: bold;
  display: flex;
  background-color:transparent;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 40px;
  padding: 1rem 0rem;
`;

const LogoText = styled.img`
  width: 80%;
  height: 35px;
  padding: 1rem 0rem;
  /* src={AttiText1}
  src={AttiText2}
  src={AttiText3}
  src={AttiText4} */
`;

const LoginButton = styled(ButtonBlue)`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 12px 24px;
  border-radius: 8px;
`;

function HomeNav() {
  return (
    <Header>
      <div style={{display:`flex`}}>
        <LogoImg src={LogoCirce} alt="Logo Circle Img" />
        <LogoText src={AttiText4} alt="LogoText Img" />
      </div>
      <Link to="/login">
        <LoginButton>로그인</LoginButton>
      </Link>
    </Header>
  );
}

export default HomeNav;
