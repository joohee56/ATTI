import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import Logo from "../assets/images/logoComputer.png";
import ButtonBlue from "../components/ButtonBlue";

function LoginPage() {
  const sayHi = function () {
    alert('hello');
  }
  return (
    <>
      <HomeIcon />
      <HeaderDiv>로그인</HeaderDiv>
      <StyledPage>
        <StyledContent>
          <div>
            <p>아띠</p>
            <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
            <p>커뮤니티와 화상회의가 가능한 교육 플랫폼</p>
          </div>
        </StyledContent>
        <StyledContent>
          <div>최근에 로그인한 서비스</div>
          <img
            src={
              "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
            }
            alt="네이버로 로그인"
          />
          <hr></hr>
          <div>
            자동로그인
            <input type="checkbox" id="switch" value="off" />
          </div>

          <div>
            <div>
              <input type="text" required placeholder="ID" />
            </div>
            <div>
              <input type="text" required placeholder="PW" />
            </div>
            <p>
              <span>아이디 찾기</span> | <span>비밀번호 찾기</span> |{" "}
              <span>회원가입</span>
            </p>
          </div>
          <ButtonBlue onClick={sayHi}name="홍길동" >로그인</ButtonBlue>
          <p>다른 서비스를 이용한 로그인</p>
          <div>
          <img
              src={
                "https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT_400x400.jpg"
              }
              alt="카카오로 로그인"
              width={"50px"}
            />
            <img
              src={
                "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
              }
              alt="네이버로 로그인"
            />
          </div>
        </StyledContent>
      </StyledPage>
    </>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledContent = styled.div`
  max-width: 500px;
  min-width: 500px;
  height: auto;
  padding: 3rem;
  text-align: center;
  border-radius: 1rem;
  border: 1px solid;
`;

const logoStyle = {
  width: "35%",
  maxWidth: "500px",
  height: "auto",
};

const HeaderDiv = styled.div`
  color: #555555; //텍스트 색상
  font-size: large; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  text-align: center; //텍스트 정렬 방향
  height: 150px; //높이
  line-height: 150px; //줄간격
`;

export default LoginPage;
