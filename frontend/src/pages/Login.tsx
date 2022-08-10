import { api } from "../utils/api";
import { useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Logo from "../assets/images/logoComputer.png";
import { ButtonBlue } from "../components/ButtonStyled";
import { ButtonPurple } from "../components/ButtonStyled";
import InputWithLabel from "../components/InputWithLabel";
import Modal from "../components/Modal";
import { KAKAO_AUTH_URL } from "../constant/index";
import InputWithPhone from "../components/account/InputWithPhone";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/Login";
import { useNavigate } from "react-router-dom";

interface userLoginInfo {
  userId: string;
  password: string;
}

interface findIdInfo {
  findId_name: string;
  findId_email: string;
}

interface findPwInfo {
  findPw_Id: string;
  findPw_name: string;
  findPw_phone: string;
  findPw_number: string;
}

function LoginPage() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState<userLoginInfo>({
    userId: "",
    password: "",
  });

  const [findIdInfo, setfindIdInfo] = useState<findIdInfo>({
    findId_name: "",
    findId_email: "",
  });

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // const [findPwInfo, setFindPwInfo] = useState<findPwInfo>({
  //   findPw_Id: "",
  //   findPw_name: "",
  //   findPw_phone: "",
  //   findPw_number: "",
  // });

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeFindID = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setfindIdInfo({
      ...findIdInfo,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  // 일반 로그인
  const loginClick = async (event: any) => {
    event.preventDefault();
    await api
      .post("/auth/login/normal", {
        userId: loginInfo.userId,
        password: loginInfo.password,
      })
      .then(async function (response) {
        if (response.status === 200) {
          // console.log("response:", response.data);
          dispatch(
            loginActions.login({
              id: loginInfo.userId,
              accessToken: response.data.accessToken,
            })
          );
          navigate("/welcome");
        }
      })
      .catch(function (error) {
        console.log("Error", error.data);
      });
  };

  // 카카오 로그인
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;

    let AuthorizationCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    console.log(AuthorizationCode);
  };

  // 아이디 찾기
  const clickFindId = async (e: any) => {
    e.preventDefault();
    await api
      .post("/user/findId", {
        name: findIdInfo.findId_name,
        email: findIdInfo.findId_email,
      })
      .then(function (response) {
        setFindID('는 "' + response.data.userId + '" 입니다.');
      })
      .catch(function (error) {
        setFindID("가 존재하지 않습니다");
      });
  };

  // 아이디 찾기, 비밀번호 찾기
  const [findValue, setFindValue] = useState<string>("");
  const [clickFindID, setFindID] = useState<string>("");
  //const [clickFindID] = useState<boolean>(false);

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
                onChange={onChangeLogin}
              />
              <InputWithLabel
                name="password"
                placeholder="Password"
                type="password"
                onChange={onChangeLogin}
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

        {/* 모달 생성 */}
        {findInfoModal && (
          <Modal
            onClickToggleModal={onClickToggleModal}
            width="600px"
            height="400px"
          >
            <ModalDiv>
              <StyledPage>
                <LeftTextDiv>
                  <TextSpan
                    onClick={(e) => {
                      setFindValue("findID");
                      setFindID("");
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
                {/*아이디 찾기 모달*/}
                {findValue == "findID" && (
                  <>
                    <InputWithLabel
                      name="findId_name"
                      placeholder="Name"
                      onChange={onChangeFindID}
                    />
                    <InputWithLabel
                      name="findId_email"
                      placeholder="email"
                      type="email"
                      onChange={onChangeFindID}
                    />
                    {clickFindID && <p>아이디{clickFindID}</p>}
                    <ButtonPurple onClick={clickFindId}>찾기</ButtonPurple>
                  </>
                )}
                {/*비밀번호 찾기 모달*/}
                {findValue == "findPW" && (
                  <>
                    <InputWithLabel name="id" placeholder="ID" />
                    <InputWithLabel name="name" placeholder="Name" />
                    <InputWithPhone
                      name="phoneNumber"
                      placeholder="폰 번호"
                      phonNumber={phoneNumber}
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
  /* -webkit-background-clip: text; */
`;

export default LoginPage;
