import * as React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/logoComputer.png";
import { ButtonBlue } from "../ButtonStyled";
import { palette } from "../../styles/palette";
import HomeImage2 from "../../assets/images/HomeImage2.jpg";
import mainBG from "../../assets/images/mainBG.png";
import AttiText1 from "../../assets/images/Text/AttiText1.png";
import AttiText2 from "../../assets/images/Text/AttiText2.png";
import AttiText3 from "../../assets/images/Text/AttiText3.png";
import AttiText4 from "../../assets/images/Text/AttiText4.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  height: 560px;
  position: relative;
  text-align: center;

  ::after {
    width: 100%;
    height: 560px;
    content: "";
    background: url(${mainBG});
    /* background-size: cover; */
    background-size: 100% 560px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    filter: blur(1px);
  }
`;

const StyledContent = styled.div`
  width: 500px;
  height: auto;
  padding: 1rem 0rem;
`;

const logoStyle = {
  width: "50%",
  maxWidth: "500px",
  height: "auto",
  paddingTop: "30px",
  filter: "drop-shadow(5px 5px #67676761)",
};

const LogoText = styled.img`
  width: 100px;
  height: auto;
  padding-bottom: 5rem;
  display: block;
  margin-left: 43%;
  /* src={AttiText1}
  src={AttiText2}
  src={AttiText3}
  src={AttiText4} */
`;

function TopPort() {
  return (
    <Main>
      <StyledContent>
        {/* <p>아띠</p> */}
        {/* <LogoText src={AttiText1} alt="LogoText Img" /> */}
        <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
        <div style={{ background: `${palette.gray_1}`, opacity: 0.9, borderRadius: `1rem`, width: `auto` }}>
          <p>자체 커뮤니티와 함께 화상 회의가 가능한 교육 플랫폼</p>{" "}
        </div>
        <div>
          <br />
          <br />
          <Link to="/signup">
            <ButtonBlue>회원가입</ButtonBlue>
          </Link>
        </div>
      </StyledContent>
    </Main>
  );
}

export default TopPort;
