import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/images/logoComputer.png";
import { ButtonBlueStyled } from "../components/ButtonBlue";
import { ButtonPurpleStyled } from "../components/ButtonPurple";
import InputWithLabel from "../components/InputWithLabel";

interface userSignupInfo {
  name: string;
  id: string;
  password: string;
  date: string;
  email: string;
  phoneNumber: string;
}

function SignupPage() {
  //회원가입
  const [signupInfo, setSignupInfo] = useState<userSignupInfo>({
    name: "",
    id: "",
    password: "",
    date: "",
    email: "",
    phoneNumber: "",
  });

   const signSubmit = () => {
    localStorage.setItem('userInfo',JSON.stringify(signupInfo));
    alert("회원가입 되었습니다.");
    
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSignupInfo({
      ...signupInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <NavLink to="/">
          <HomeIcon /> Home
        </NavLink>
        {" | "}
        <NavLink to="/login">
          <PersonOutlineOutlinedIcon /> Login
        </NavLink>
      </div>
      <HeaderDiv>회원가입</HeaderDiv>
      <StyledPage>
        <StyledContent>
          <div>
            <p>아띠</p>
            <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
            <p>커뮤니티와 화상회의가 가능한 교육 플랫폼</p>
          </div>
          <p>개인 정보 처리 방침</p>
          <div style={InfoPolicyStyle}>assets/infoPolicy.html 확인</div>
          <div>
            <input type="checkbox" id="switch" value="off" /> 동의합니다.
          </div>
        </StyledContent>
        <StyledContent>
          <div>
            <form onSubmit={signSubmit}>
              <InputWithLabel
                label="Name"
                name="name"
                placeholder="Name"
                value={signupInfo.name}
                onChange={onChange}
              />
              <InputWithLabel
                label="Id"
                name="id"
                placeholder="ID"
                value={signupInfo.id}
                onChange={onChange}
              />
              <InputWithLabel
                label="Password"
                name="password"
                placeholder="Password 1"
                type="password"
                value={signupInfo.password}
                onChange={onChange}
              />
              <InputWithLabel
                label="Password"
                name="password"
                placeholder="비밀번호 확인"
                type="password"
              />
              <InputWithLabel
                label="date"
                name="date"
                type="date"
                value={signupInfo.date}
                onChange={onChange}
              />
              <InputWithLabel
                label="email"
                name="email"
                placeholder="email"
                type="email"
                value={signupInfo.email}
                onChange={onChange}
              />
              <InputWithLabel
                label="PhoneNumber"
                name="phoneNumber"
                placeholder="phoneNumber"
                type="text"
                value={signupInfo.phoneNumber}
                onChange={onChange}
              />

              <ButtonPurpleStyled>폰 인증</ButtonPurpleStyled>

              <ButtonBlueStyled type="submit">가입하기</ButtonBlueStyled>
            </form>
          </div>

          <p>------- 다른 서비스를 이용한 회원가입 -------</p>
          <div>
            <img
              src={
                "https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT_400x400.jpg"
              }
              alt="카카오로 회원가입"
              width={"50px"}
            />
            <img
              src={
                "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
              }
              alt="네이버로 회원가입"
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
  height: 400px;
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

const DialogButton = styled.button`
  width: 100px;
  font-size: 0.8rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: white;

  %:hover {
    transform: translateV(-2px);
  }
`;

const InputDiv = styled.div`
  display: flex;
  width: 200px;
  padding: 0.3rem;
  margin: 0.5rem;
  text-align: left;
  border-radius: 0.4rem;
  border: 1px solid;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  ::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }
`;

const InfoPolicyStyle = {
  width: "100%",
  height: "30%",
  borderRadius: "0.5rem",
  border: "1px solid",
};

export default SignupPage;
