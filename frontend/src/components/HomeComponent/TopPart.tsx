import * as React from "react";

import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/images/logoComputer.png";
import { ButtonBlue } from "../ButtonStyled";
import mainBG from "../../assets/images/mainBG.png";
import AttiText1 from "../../assets/images/Text/AttiText1.png";
import AttiText2 from "../../assets/images/Text/AttiText2.png";
import AttiText3 from "../../assets/images/Text/AttiText3.png";
import AttiText4 from "../../assets/images/Text/AttiText4.png";
import SnowAnimation from "./SnowAnimation";
import { useEffect, useState } from "react";

function TopPort() {
  const [isTextTyping, setIsTextTyping] = useState<boolean>(false);

  const content = "커뮤니티와 화상채팅을 한번에\n교육플랫폼 ATTI.";
  const text = document.querySelector(".text") as HTMLParagraphElement;
  let i = 0;

  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt === "\n" ? "<br/>" : txt;
      i++;
    }
    else setIsTextTyping(false);
  }
  {isTextTyping&&setInterval(typing, 200)};

  const navigate = useNavigate();

  useEffect(() => {
  //   navigate("/");
  //   //const text = document.querySelector(".text") as HTMLParagraphElement;
     setIsTextTyping(true);
  }, []);


  return (
    <>
      <Main>
        <SnowAnimation />
        <Grid>
        <Textbox>
          <span className="text"></span>
          <BlinkSpan className="blink">|</BlinkSpan>
        </Textbox>
        <StyledContent>
          {/* <p>아띠</p> */}
          {/* <LogoText src={AttiText1} alt="LogoText Img" /> */}
          <LogoImg src={Logo} alt="Logo Cumputer Img" />
          <LogoText>
            <p>자체 커뮤니티와 함께 화상 회의가 가능한 교육 플랫폼</p>{" "}
          </LogoText>
          <GoButton onClick={() => navigate("/login")}>로그인</GoButton>
        </StyledContent>
        </Grid>
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  height: 800px;
  margin-bottom: 50px;
  text-align: center;
  ::after {
    width: 100%;
    height: 850px;
    content: "";
    background: url(${mainBG});
    /* background-size: cover; */
    background-size: 100% 850px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    filter: blur(1px);
  }
  &__content {
    position: relative;
    align-self: center;
    padding: 3rem 0;
  }
`;

const blink = keyframes`
   to {
    opacity: 0;
  }
`;

const Grid = styled.div`
display: grid;
grid-template-columns: 5fr 1fr;
`

const BlinkSpan = styled.span`
  animation: ${blink} 1.5s infinite;
  animation-fill-mode: forwards;
  font-size: 2.5rem;
`;

const Textbox = styled.div`
  font-size: 4rem;
  text-align: left;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: auto;
  padding: 1rem 0rem;
  border: 1px solid;
`;

const LogoImg = styled.img`
  width: 100%;
  /* max-width: 400px; */
  height: auto;
  padding-bottom: 50px;
  filter: drop-shadow(5px 5px 5px #67676761);
`;

const LogoText = styled.div`
  width: 100%;
  border-radius: 1rem;
  font-size: 1rem; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
`;

const GoButton = styled(ButtonBlue)`
  padding: 10px 20px;
  font-size: 1.1rem; //텍스트 크기
  font-weight: bold; //텍스트 굵기
`;

// const LogoText = styled.img`
//   width: 100px;
//   height: auto;
//   padding-bottom: 5rem;
//   display: block;
//   margin-left: 43%;
//   /* src={AttiText1}
//   src={AttiText2}
//   src={AttiText3}
//   src={AttiText4} */
// `;

export default TopPort;
