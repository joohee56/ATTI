import React, { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/images/logoComputer.png";
import { ButtonBlue } from "../components/ButtonStyled";
import { ButtonPurple } from "../components/ButtonStyled";
import InputWithLabel from "../components/InputWithLabel";
import { palette } from "../styles/palette";
import axios from "axios";

interface userSignupInfo {
  name: string;
  id: string;
  password: string;
  date: string;
  email: string;
  phoneNumber: string;
}

function SignupPage() {
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<string>("");
  const [idMessage, setIdMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [phoneNumberMessage, setPhoneNumberMessage] = useState<string>("");

  // 유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isId, setIsId] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);

  const [mismatchError, setMismatchError] = useState(false); // 비밀번호 일치여부
  const [signUpError, setSignUpError] = useState(""); // 회원가입 에러
  const [signUpSuccess, setSignUpSuccess] = useState(false); // 회원가입 성공여부

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const regex = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ][^0-9\s/g]{1,24}$/;
    if (!regex.test(e.target.value)) {
      setNameMessage("영어와 한글을 조합한 2글자 이상 24글자 미만으로 입력해주세요.");
      setIsName(false);
    } else setIsName(true);
    
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    const regex = /^[0-9a-z][^\s/g]{6,16}$/;
    if (!regex.test(e.target.value)) {
      setIdMessage("ID는 영소문자, 숫자를 조합한 6~16자만 가능합니다.");
      setIsId(false);
    } else setIsId(true);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\~!@#$%^&*])[^\s/g]{6,12}$/;
    if (!regex.test(e.target.value)) {
      setPasswordMessage(
        "영문자, 숫자, 특수문자(~!@#$%^&*) 1개 이상을 포함한 비밀번호 6~12자만 가능합니다."
      );
      setIsPassword(false);
    } else setIsPassword(true);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    if (password != e.target.value) {
      setPasswordConfirmMessage("위에 입력한 비밀번호와 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else setIsPasswordConfirm(true);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(e.target.value);
    if (!regex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 아닙니다");
      setIsEmail(false);
    } else setIsEmail(true);
  };

  const onChangePhonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[0-9]{11}$/; // 010-0000-0000 형식 : /010-[0-9]{4}-[0-9]{4}$/
    setPhoneNumber(e.target.value);
    if (!regex.test(e.target.value)) {
      setPhoneNumberMessage("폰번호 형식이 아닙니다");
      setIsPhoneNumber(false);
    } else setIsPhoneNumber(true);
  };

  const signSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //console.log(name, id, password, email, date, phoneNumber);
      try {
        await axios
          .post("http://localhost:8081/api/user/signup/normal", {
            userId: id,
            password : password,
            userName : name,
            email : email,
            birth : date,
            phone : phoneNumber,
            social : "none",
            uid : 1111111,
            userDeleteInfo : false,
            userRole : "STUDENT"
        },{
          headers:{
            'Content-type': 'application/json', 
          }
        })
          .then((res) => {
            console.log("response:", res);
            if (res.status === 201) {
              document.location.href = "/login";
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
    [id, password, name, email, date, phoneNumber]
  );

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
                placeholder="닉네임"
                value={name}
                onChange={onChangeName}
              />
              {name.length > 0 && !isName && (
                <span className={`message ${isName ? "success" : "error"}`}>
                  {nameMessage}
                </span>
              )}
              <InputWithLabel
                label="Id"
                name="id"
                placeholder="아이디"
                value={id}
                onChange={onChangeId}
              />
              {id.length > 0 && !isId && (
                <span className={`message ${isId ? "success" : "error"}`}>
                  {idMessage}
                </span>
              )}
              <InputWithLabel
                label="Password"
                name="password"
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={onChangePassword}
              />
              {password.length > 0 && !isPassword && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}
              <InputWithLabel
                label="Password"
                name="password2"
                placeholder="비밀번호 확인"
                type="password"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
              />
              {passwordConfirm.length > 0 && !isPasswordConfirm && (
                <span
                  className={`message ${
                    isPasswordConfirm ? "success" : "error"
                  }`}
                >
                  {passwordConfirmMessage}
                </span>
              )}
              <InputWithLabel
                label="date"
                name="date"
                type="date"
                value={date}
                onChange={onChangeDate}
              />
              <InputWithLabel
                label="email"
                name="email"
                placeholder="이메일"
                type="email"
                value={email}
                onChange={onChangeEmail}
              />
              {email.length > 0 && !isEmail && (
                <span className={`message ${isEmail ? "success" : "error"}`}>
                  {emailMessage}
                </span>
              )}
              <InputWithLabel
                label="PhoneNumber"
                name="phoneNumber"
                placeholder="폰 번호"
                type="text"
                value={phoneNumber}
                onChange={onChangePhonNumber}
              />
              {phoneNumber.length > 0 && !isPhoneNumber && (
                <span
                  className={`message ${isPhoneNumber ? "success" : "error"}`}
                >
                  {phoneNumberMessage}
                </span>
              )}

              <ButtonPurple>폰 인증</ButtonPurple>

              <ButtonBlue type="submit">가입하기</ButtonBlue>
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

const success = styled.span`
  color: ${palette.green_1};
`;

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
