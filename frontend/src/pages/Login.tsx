import { useState, useCallback, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import Logo from "../assets/images/logoComputer.png";
import { ButtonBlue } from "../components/ButtonStyled";
import { ButtonPurple } from "../components/ButtonStyled";
import InputWithLabel from "../components/InputWithLabel";
import InputWithIcon from "../components/account/IputWithIcon";
import Modal from "../components/Modal";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../constant/index";
import { palette } from "../styles/palette";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { KAKAO_AUTH_URL } from "../constant/index";

interface userLoginInfo {
  userId: string;
  password: string;
}

interface findIdInfo{
  name: string,
  email: string,
  date: {
    yy: Date,
    mm: 1,
    dd: 1,
  } 
}

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState<userLoginInfo>({
    userId: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const loginClick = useCallback(
    async (e: any) => {
      //e.preventDefault();
      try {
        await axios
          .post(
            BACKEND_URL + "/api/auth/login/normal",
            {
              userId: loginInfo.userId,
              password: loginInfo.password,
            },
            {
              headers: {
                "Content-type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log("response:", res);
            if (res.status === 200) {
              document.location.href = "/welcome";
            }
          });
      } catch (err) {
        const { response } = err as unknown as AxiosError;
        console.log(response);
      }
    },
    [loginInfo.userId, loginInfo.password]
  );

  const kakaoLogin=()=>{
    window.location.replace(KAKAO_AUTH_URL);

    let AuthorizationCode = new URL(window.location.href).searchParams.get('code');
    console.log(AuthorizationCode);
  }


  const findSubmit = async ( e: any) => {
    // await axios.get(BACKEND_URL+"/api/user/findId", {
    //   params: {
    //     name: ,
    //     emai: ,
    //     birth: 
    //   }
    // })
    // .then(function (response) {
    //  let data:boolean = response.data;
    //  if(data) setIsId(true);
    //  else {
    //   setIdMessage("중복된 ID입니다");
    //   setIsId(false);
    //  }
    // }).catch(function (error) {
    //   console.log(error);
    // })
  }
  
   
  // 아이디 찾기, 비밀번호 찾기
  const [findValue, setFindValue] = useState<string>("");

  // 모달 보이기 여부
  const [findInfoModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!findInfoModal);
  }, [findInfoModal]);

  const setClickModal = (value: string) => {
    setFindValue(value);
    onClickToggleModal();
  };

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
          <hr />
          <div>
            자동로그인
            <input type="checkbox" id="switch" value="off" />
          </div>

          <div>
            <div>
              <InputWithLabel
                name="userId"
                placeholder="ID"
                onChange={onChange}
              />
              <InputWithLabel
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={onChange}
              />
            </div>

            <p>
              <DialogButton
                onClick={(e) => {
                  setClickModal("findID");
                }}
              >
                아이디 찾기
              </DialogButton>
              |
              <DialogButton
                onClick={(e) => {
                  setClickModal("findPW");
                }}
              >
                비밀번호 찾기
              </DialogButton>
              | <Link to="../signup">회원가입</Link>
            </p>
          </div>

          <ButtonBlue onClick={loginClick}>로그인</ButtonBlue>

          <p>다른 서비스를 이용한 로그인</p>
          <div>
            <img
              src={
                "https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT_400x400.jpg"
              }
              alt="카카오로 로그인"
              width={"50px"}
              onClick={kakaoLogin}
            />
            <img
              src={
                "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
              }
              alt="네이버로 로그인"
            />
          </div>
        </StyledContent>
        {findInfoModal && (
          <Modal
            onClickToggleModal={onClickToggleModal}
            width="600px"
            height="auto"
          >
            <ModalDiv>
              <StyledPage>
                <LeftTextDiv>
                  <TextSpan
                    onClick={(e) => {
                      setFindValue("findID");
                    }}
                  >
                    아이디 찾기
                  </TextSpan>
                </LeftTextDiv>
                <TextDiv>
                  <TextSpan
                    onClick={(e) => {
                      setFindValue("findPW");
                    }}
                  >
                    비밀번호 찾기
                  </TextSpan>
                </TextDiv>
              </StyledPage>
              <div>
                {findValue == "findID" && (
                  <form onSubmit={findSubmit}>
                    <InputWithLabel
                      label="Name"
                      name="name"
                      placeholder="Name"
                      onChange={onChange}
                    />
                    <InputWithLabel
                      label="email"
                      name="email"
                      placeholder="email"
                      type="email"
                      onChange={onChange}
                    />
                    <InputWithLabel
                      label="date"
                      name="date"
                      type="date"
                      onChange={onChange}
                    />
                    <p>(dustnzlzl@naver.com) 에 해당하는 아이디는 없습니다.</p>
                    <ButtonPurple type="submit">찾기</ButtonPurple>
                    </form>
                )}
                {findValue == "findPW" && (
                  <>
                    <InputWithLabel
                      label="Id"
                      name="id"
                      placeholder="ID"
                      // value={signupInfo.id}
                      onChange={onChange}
                    />
                    <ButtonPurple>보내기</ButtonPurple>
                    <p>
                      가입하신 이메일(xxx@naver.com)으로
                      <br />
                      임시비밀번호를 보내드렸습니다
                    </p>
                    <ButtonBlue>닫기</ButtonBlue>
                  </>
                )}
              </div>
            </ModalDiv>
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
  margin-bottom: 30px;
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

const ModalDiv = styled.div`
  color: gray; //텍스트 색상
  font-size: middle; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  text-align: center; //텍스트 정렬 방향
  line-height: 50px; //줄간격
  width: 80%;
`;

const LeftTextDiv = styled.div`
  width: 50%;
  height: 40px;
  border-right: solid 2px black;
`;

const TextDiv = styled.div`
  width: 50%;
  height: 40px;
`;

const TextSpan = styled.span`
  font-size: 1.2em;
  cursor: pointer;
  background: linear-gradient(135deg, #9dceff 0%, #92a3fd 100%);
  color: transparent;
  -webkit-background-clip: text;
`;

export default LoginPage;