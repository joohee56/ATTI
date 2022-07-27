import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../assets/images/logoComputer.png";
import { ButtonStyled } from "../components/ButtonBlue";
import Modal from "../components/Modal";

function LoginPage() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <HomeIcon />
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
            <InputDiv>
              <Input type="text" required placeholder="Name" />
            </InputDiv>
            <InputDiv>
              <Input type="text" required placeholder="ID" />
              <CheckIcon/>
              <CloseIcon/>
            </InputDiv>
            <InputDiv>
              <Input type="text" required placeholder="Password1" />
            </InputDiv>
            <InputDiv>
              <Input type="text" required placeholder="Password2" />
            </InputDiv>
            <InputDiv>
              <Input type="date"/>
            </InputDiv>
            <InputDiv>
              <Input required placeholder="Email"/>
            </InputDiv>
            <InputDiv>
              <Input required placeholder="Phone"/><button>인증</button>
            </InputDiv>
          </div>
          <ButtonStyled>가입하기</ButtonStyled>
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
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            children 부분이 들어감!!
          </Modal>
        )}
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

const Input=styled.input`
  width:75%;
  border:none;  

  &:focus{
    outline: none;
  }
`;

const InfoPolicyStyle = {
  width: "100%",
  height: "30%",
  borderRadius: "0.5rem",
  border: "1px solid",
};

export default LoginPage;
