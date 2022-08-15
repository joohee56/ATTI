import { api } from "../utils/api";
import { useState, useCallback, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { loginActions, UserLoginState } from "../store/LoginStore";
import { useNavigate } from "react-router-dom";
import { palette } from "../styles/palette";
import InputPassword from "../components/account/InputPassword";
import { FormHelperText, Snackbar } from "@mui/material";
import SnacbarTell from "../components/SnacbarTell";
import { RootState } from "../store";

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
  phoneNumber: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    if (auth) {
      navigate("/community/sdf/sdf");
    }
  }, [auth]);

  // 로그인
  const [loginInfo, setLoginInfo] = useState<userLoginInfo>({
    userId: "",
    password: "",
  });
  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };
  const [isSuccessLogin, setIsSuccessLogin] = useState<string>("");

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
          console.log("response:", response.data);
          dispatch(
            loginActions.login({
              id: loginInfo.userId,
              userName: response.data.userName,
              accessToken: response.data.accessToken,
              admin: response.data.admin,
              categoryList: response.data.categoryList,
              departList: response.data.departList,
            })
          );
        }
      })
      .catch(function (error) {
        console.log("Error", error);
        console.log("Error", "로그인 실패!");
        setIsSuccessLogin("로그인에 실패하였습니다.");
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

  //아이디 찾기
  const [findIdInfo, setfindIdInfo] = useState<findIdInfo>({
    findId_name: "",
    findId_email: "",
  });

  const onChangeFindID = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setfindIdInfo({
      ...findIdInfo,
      [event.target.name]: event.target.value,
    });
  };

  const clickFindId = async (e: any) => {
    e.preventDefault();
    await api
      .post("/user/findId", {
        name: findIdInfo.findId_name,
        email: findIdInfo.findId_email,
      })
      .then(function (response) {
        //snacbar확인
        setOpen(true);
        setFindID('는 "' + response.data.userId + '" 입니다.');
      })
      .catch(function (error) {
        setFindID("가 존재하지 않습니다");
      });
  };

  // 비밀번호 찾기
  const [findPwInfo, setFindPwInfo] = useState<findPwInfo>({
    findPw_name: "",
    findPw_Id: "",
    phoneNumber: "",
  });
  //const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);
  const onChangePhonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setFindPwInfo({
      ...findPwInfo,
      phoneNumber: value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, ""),
    });
  };

  const onChangeFindPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFindPwInfo({
      ...findPwInfo,
      [event.target.name]: event.target.value,
    });
  };

  const clickFindPw = async (e: any) => {
    e.preventDefault();
    await api
      .post("/user/findPassword", {
        userId: findPwInfo.findPw_Id,
        usesrName: findPwInfo.findPw_name,
        phoneNumber: findPwInfo.phoneNumber,
      })
      .then(function (response) {
        setFindPwInfo({
          ...findPwInfo,
          findPw_name: "",
          findPw_Id: "",
          phoneNumber: "",
        });
        setOpen(true);
        setIsPhoneNumber(false);
      })
      .catch(function (error) {
        setFindPW("회원정보가 없습니다");
      });
  };

  // 새 비밀번호
  /* 값 받아오기 */
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  /* 오류메세지 */
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  /* 성공여부 */
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\~!@#$%^&*])[^\s]{6,12}$/;
    if (!regex.test(e.target.value)) {
      setPasswordMessage(
        "영어 대문자, 영어 소문자, 숫자, 특수문자(~!@#$%^&*)를 모두 1개 이상을 포함한 비밀번호 6~12자만 가능합니다."
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

  const [open, setOpen] = useState(false);

  const updatePw = async (e: any) => {
    e.preventDefault();
    await api
      .put("/user/updatePassword", {
        userId: findPwInfo.findPw_Id,
        password: password,
      })
      .then(function (response) {
        console.log("비밀번호가 변경되었습니다.");
        setPassword("");
        setPasswordConfirm("");
      })
      .catch(function (error) {
        setFindPW("error가 발생");
        console.log("Error", error);
        // ↓ 오류 해결 후 지워도 됨 ↓
        setPassword("");
        setPasswordConfirm("");
      });
  };

  const dispatch = useDispatch();

  // 아이디 찾기, 비밀번호 찾기
  const [findValue, setFindValue] = useState<string>("");
  const [clickFindID, setFindID] = useState<string>("");
  const [clickFindPW, setFindPW] = useState<string>("");
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
      <SnacbarTell
        open={open}
        setOpen={setOpen}
        message="비밀번호가 변경되었습니다."
        type="success"
      />
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
          {/* <div>최근에 로그인한 서비스</div>
          <img
            src={
              "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
            }
            alt="네이버로 로그인"
          />
          <hr /> */}
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
                helperText="Please enter your name"
                onChange={onChangeLogin}
              />
            </div>

            <p>
              <DialogButton
                onClick={(e) => {
                  setClickModal("findID");
                  setFindID("");
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
            </p>
          </div>

          <ButtonBlue onClick={loginClick}>로그인</ButtonBlue>
          {isSuccessLogin&& <p style={{color:"red"}}>{isSuccessLogin}</p>}

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
            {/* <img
              src={
                "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
              }
              alt="네이버로 로그인"
            /> */}
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
                      setFindPW("");
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
                    {clickFindID.length > 0 && <p> 아이디{clickFindID}</p>}
                    <ButtonPurple onClick={clickFindId}>찾기</ButtonPurple>
                  </>
                )}
                {/*비밀번호 찾기 모달*/}
                {findValue == "findPW" && (
                  <>
                    <InputWithLabel
                      name="findPw_name"
                      placeholder="이름"
                      onChange={onChangeFindPW}
                    />
                    <InputWithLabel
                      name="findPw_Id"
                      placeholder="아이디"
                      onChange={onChangeFindPW}
                    />
                    <InputWithPhone
                      name="phoneNumber"
                      placeholder="폰 번호"
                      phonNumber={findPwInfo.phoneNumber}
                      onChange={onChangePhonNumber}
                      isCertifiedSuccess={setIsPhoneNumber}
                    />

                    {isPhoneNumber &&
                      findPwInfo.findPw_name.length > 0 &&
                      findPwInfo.findPw_Id.length > 0 && (
                        <NewPW>
                          <div>
                            <div style={{ padding: `1rem` }}>
                              <TextSpan>비밀번호변경</TextSpan>
                            </div>
                            <div style={{ width: `70%`, padding: `30px 15%` }}>
                              <InputPassword
                                name="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={onChangePassword}
                              />
                              {password.length > 0 && !isPassword && (
                                <FormHelperText error>
                                  {" "}
                                  {passwordMessage}
                                </FormHelperText>
                              )}
                              <InputWithLabel
                                name="password2"
                                placeholder="비밀번호 확인"
                                type="password"
                                value={passwordConfirm}
                                onChange={onChangePasswordConfirm}
                              />
                              {passwordConfirm.length > 0 &&
                                !isPasswordConfirm && (
                                  <FormHelperText error>
                                    {" "}
                                    {passwordConfirmMessage}
                                  </FormHelperText>
                                )}
                            </div>
                            <ButtonBlue onClick={updatePw}>수정</ButtonBlue>
                          </div>
                        </NewPW>
                      )}
                    {clickFindPW && <p>{clickFindPW}</p>}
                    <ButtonBlue onClick={clickFindPw}>찾기</ButtonBlue>
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
  height: 450px;
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
  height: 130px; //높이
  line-height: 130px; //줄간격
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
  background: ${palette.main_grBlue};
  -webkit-background-clip: text;
  color: transparent;
`;

const Grid = styled.div`
  display: grid;
  //grid-template-columns: 1fr 1.3fr 1fr 5fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;
  align-items: stretch;
  width: 80%;
  /* border-bottom: 1px solid; */
`;

const NewPW = styled.div`
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export default LoginPage;
function useSnackbar(): { enqueueSnackbar: any } {
  throw new Error("Function not implemented.");
}
