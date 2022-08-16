// import { api } from "../utils/api/index";
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// import Logo from "../assets/images/logoComputer.png";
// import { ButtonBlue } from "../components/ButtonStyled";
// import InputWithLabel from "../components/InputWithLabel";
// import InputPassword from "../components/account/InputPassword";
// import { palette } from "../styles/palette";
// import InputWithPhone from "../components/account/InputWithPhone";
// import SnacbarTell from "../components/SnacbarTell";
// import UserBacground from "../components/UserComponent/SignupComponet";

// function SignupPage() {
//   const navigate = useNavigate();

//   //이름, 아이디, 비밀번호, 비밀번호 확인, 생일, 이메일, 폰번호
//   const [name, setName] = useState<string>("");
//   const [id, setId] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [passwordConfirm, setPasswordConfirm] = useState<string>("");
//   const [birthState, setBirth] = useState({
//     yy: new Date().getFullYear(),
//     mm: "01",
//     dd: "01",
//   });
//   const [email, setEmail] = useState<string>("");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");

//   //오류메시지 상태저장
//   const [nameMessage, setNameMessage] = useState<string>("");
//   const [idMessage, setIdMessage] = useState<string>("");
//   const [passwordMessage, setPasswordMessage] = useState<string>("");
//   const [passwordConfirmMessage, setPasswordConfirmMessage] =
//     useState<string>("");
//   const [emailMessage, setEmailMessage] = useState<string>("");
//   //const [phoneNumberMessage, setPhoneNumberMessage] = useState<string>("");

//   // 유효성 검사
//   const [isName, setIsName] = useState<boolean>(false);
//   const [isId, setIsId] = useState<boolean>(false);
//   const [isPassword, setIsPassword] = useState<boolean>(false);
//   const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
//   const [isEmail, setIsEmail] = useState<boolean>(false);
//   const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);

//   // 회원가입 성공여부
//   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//     const regex = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ][^0-9\s/g]{1,24}$/;
//     if (!regex.test(e.target.value)) {
//       setNameMessage(
//         "영어와 한글을 조합한 2글자 이상 24글자 미만으로 입력해주세요."
//       );
//       setIsName(false);
//     } else setIsName(true);
//   };

//   const onChangeId = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     setId(e.target.value);
//     const regex = /^[a-z0-9][^\s]{5,16}$/;
//     if (!regex.test(e.target.value)) {
//       setIdMessage("ID는 영소문자, 숫자를 조합한 6~16자만 가능합니다.");
//       setIsId(false);
//     } else {
//       api
//         .get("/user/idcheck", {
//           params: {
//             ckid: e.target.value,
//           },
//         })
//         .then(function (response) {
//           let data: boolean = response.data;
//           if (data) setIsId(true);
//           else {
//             setIdMessage("중복된 ID입니다");
//             setIsId(false);
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//   };

//   const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     const regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\~!@#$%^&*])[^\s]{6,12}$/;
//     if (!regex.test(e.target.value)) {
//       setPasswordMessage(
//         "영어 대문자, 영어 소문자, 숫자, 특수문자 각 1개 이상을 포함한 비밀번호 6~12자만 가능합니다."
//       );
//       setIsPassword(false);
//     } else setIsPassword(true);
//   };

//   const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPasswordConfirm(e.target.value);
//     if (password != e.target.value) {
//       setPasswordConfirmMessage("위에 입력한 비밀번호와 일치하지 않습니다.");
//       setIsPasswordConfirm(false);
//     } else setIsPasswordConfirm(true);
//   };

//   const onChangeBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setBirth({
//       ...birthState,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const now = new Date();
//   let years = [];
//   for (let y = now.getFullYear(); y >= 1930; y -= 1) {
//     years.push(y.toString());
//   }

//   let month = [];
//   for (let m = 1; m <= 12; m += 1) {
//     if (m < 10) month.push("0" + m.toString());
//     else month.push(m.toString());
//   }
//   let days = [];
//   let date = new Date(birthState.yy, 1, 0).getDate();
//   for (let d = 1; d <= date; d += 1) {
//     if (d < 10) days.push("0" + d.toString());
//     else days.push(d.toString());
//   }

//   const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const regex =
//       /^[0-9a-zA-Z]([_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
//     setEmail(e.target.value);
//     if (!regex.test(e.target.value)) {
//       setEmailMessage("이메일 형식이 아닙니다");
//       setIsEmail(false);
//     } else setIsEmail(true);
//   };

//   const onChangePhonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value;
//     setPhoneNumber(
//       value
//         .replace(/[^0-9]/g, "")
//         .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
//         .replace(/(\-{1,2})$/g, "")
//     );
//   };

//   // 회원가입 성공 알림
//   const [open, setOpen] = useState(false);

//   const signSubmit = async (e: any) => {
//     e.preventDefault();
//     await api
//       .post("/user/signup/normal", {
//         userId: id,
//         password: password,
//         userName: name,
//         email: email,
//         birth: "" + birthState.yy + birthState.mm + birthState.dd,
//         phone: phoneNumber,
//         social: "none",
//         uid: 1111111,
//         userDeleteInfo: false,
//         userRole: "STUDENT",
//       })
//       .then(function (response) {
//         console.log("response:", response);
//         if (response.status === 200) {
//           setOpen(true);
//           navigate("/login");
//         }
//       })
//       .catch(function (error) {
//         if (error?.status === 500) {
//           console.log("ID중복 오류 입니다.");
//         }
//       });
//   };

//   return (
//     <UserBacground>
//       <SnacbarTell
//         open={open}
//         setOpen={setOpen}
//         message="회원가입 되었습니다."
//         type="success"
//       />
//       <HeaderDiv>회원가입</HeaderDiv>
//       <StyledPage>
//       <StyledContent>
//           <div>
//             <p>아띠</p>
//             <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
//             <p>커뮤니티와 화상회의가 가능한 교육 플랫폼</p>
//           </div>
//           {/* <p>개인 정보 처리 방침</p>
//           <div style={InfoPolicyStyle}>assets/infoPolicy.html 확인</div>
//           <div>
//             <input type="checkbox" id="switch" value="off" /> 동의합니다.
//           </div> */}
//         </StyledContent>
//         <StyledContent>
//           <>
//             <div style={{width:"70%"}}>
//               <InputWithLabel
//                 name="name"
//                 placeholder="이름"
//                 value={name}
//                 onChange={onChangeName}
//                 textBool={true}
//                 helperText={(name.length > 0 && !isName)? nameMessage : ""}
//               />
//               <InputWithLabel
//                 name="id"
//                 placeholder="아이디"
//                 value={id}
//                 onChange={onChangeId}
//                 textBool={true}
//                 helperText={(id.length > 0 && !isId)? idMessage : ""}
//               />
//               <InputPassword
//                 name="password"
//                 placeholder="비밀번호"
//                 value={password}
//                 onChange={onChangePassword}
//                 textBool={true}
//                 helperText={(password.length > 0 && !isPassword )? passwordMessage : "."}
//               />
//               <InputWithLabel
//                 name="password2"
//                 placeholder="비밀번호 확인"
//                 type="password"
//                 value={passwordConfirm}
//                 onChange={onChangePasswordConfirm}
//                 textBool={true}
//                 helperText={(passwordConfirm.length > 0 && !isPasswordConfirm)? passwordConfirmMessage : "."}
//               />
//               <div style={{marginBottom:"20px"}}>
//                 <select
//                   name="yy"
//                   value={birthState.yy}
//                   onChange={onChangeBirth}
//                 >
//                   {years.map((item) => (
//                     <option value={item} key={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   name="mm"
//                   value={birthState.mm}
//                   onChange={onChangeBirth}
//                 >
//                   {month.map((item) => (
//                     <option value={item} key={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   name="dd"
//                   value={birthState.dd}
//                   onChange={onChangeBirth}
//                 >
//                   {days.map((item) => (
//                     <option value={item} key={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <InputWithLabel
//                 name="email"
//                 placeholder="이메일"
//                 type="email"
//                 value={email}
//                 onChange={onChangeEmail}
//                 textBool={true}
//                 helperText={(email.length > 0 && !isEmail)? emailMessage : ""}
//               />
//               <InputWithPhone
//                 name="phoneNumber"
//                 placeholder="폰 번호"
//                 phonNumber={phoneNumber}
//                 onChange={onChangePhonNumber}
//                 isCertifiedSuccess={setIsPhoneNumber}
//               />
//             </div>
//             <ButtonBlue
//               onClick={signSubmit}
//               disabled={
//                 !(
//                   (
//                     isName &&
//                     isId &&
//                     isPassword &&
//                     isPasswordConfirm &&
//                     isEmail &&
//                     isPhoneNumber
//                   )
//                 )
//               }
//             >
//               가입하기
//             </ButtonBlue>
//             {!(
//               (
//                 isName &&
//                 isId &&
//                 isPassword &&
//                 isPasswordConfirm &&
//                 isEmail &&
//                 isPhoneNumber
//               )
//             ) && (
//               <p style={{ color: `${palette.red}` }}>
//                 회원가입하려면 모두 입력해주세요.
//               </p>
//             )}
//           </>

//           {/* <p>------- 회원가입 없이 소셜로 로그인하기 -------</p>
//           <div>
//             <img
//               src={
//                 "https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT_400x400.jpg"
//               }
//               alt="카카오로 회원가입"
//               width={"50px"}
//             />
//             <img
//               src={
//                 "https://image.rocketpunch.com/company/5466/naver_logo.png?s=50x50&t=inside"
//               }
//               alt="네이버로 회원가입"
//             />
//           </div> */}
//         </StyledContent>
//       </StyledPage>
//     </UserBacground>
//   );
// }

// const MainBg = styled.div`
  
// `

// const StyledPage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// const StyledContent = styled.div`
//   max-width: 500px;
//   min-width: 500px;
//   height: 450px;
//   padding: 2rem 3rem;
//   text-align: center;
//   border-radius: 1rem;
//   border: 1px solid;
// `;

// const logoStyle = {
//   width: "35%",
//   maxWidth: "500px",
//   height: "auto",
// };

// const HeaderDiv = styled.div`
//   color: #555555; //텍스트 색상
//   font-size: large; //텍스트 크기
//   font-weight: bold; //텍스트 굵기
//   text-align: center; //텍스트 정렬 방향
//   height: 130px; //높이
//   line-height: 130px; //줄간격
// `;


// const InfoPolicyStyle = {
//   width: "100%",
//   height: "30%",
//   borderRadius: "0.5rem",
//   border: "1px solid",
// };

// export default SignupPage;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBlue } from "../components/ButtonStyled";
import SignupComponent from "../components/UserComponent/SignupComponet";
import mainBG from "../assets/images/mainBG.png"
import Logo from "../assets/images/logoComputer.png"
import { palette } from "../styles/palette";

function SignupPage() {
  return (
    <Main>
       <HeaderDiv>회원가입</HeaderDiv>
       <Content>
      <WhiteGrid>
        <LeftDiv>
        <LogoImg src={Logo} alt="Logo Cumputer Img" />
        <LogoText>
          <p>자체 커뮤니티와 함께 화상 회의가 가능한 교육 플랫폼</p>{" "}
        </LogoText>
        </LeftDiv>
        <Vline/>
        <div>
        <SignupComponent/>
        </div>
      </WhiteGrid>
    </Content>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 900px;
  position: relative;
  -ms-overflow-style:none /* IE and Edge */
  scrollbar-width:none /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const HeaderDiv = styled.div`
  color: #ffffff; //텍스트 색상
  font-size: 2rem; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  text-align: center; //텍스트 정렬 방향
  line-height: 150px; //줄간격
  text-shadow: 2px 2px 4px gray;
  /* margin-bottom: 20px; */
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  text-align: center;
  ::after {
    width: 100%;
    height: 900px;
    content: "";
    background: url(${mainBG});
    /* background-size: cover; */
    background-size: 100% 900px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    filter: blur(1px);
  }
`;

const WhiteGrid = styled.div`
  display: grid;
  grid-template-columns : 1fr 3px 1fr;
  width: 2000px;
  padding: 1rem 0rem;
  height: 650px;
  background: rgba(255, 255, 255, 0.5);
  /* border: 1px solid; */
  border-radius: 30px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  position: relative;
  top: 110px;
`;

const LogoImg = styled.img`
  width: 60%;
  max-width: 400px;
  height: auto;
  padding-bottom: 50px;
  filter: drop-shadow(5px 5px #67676761);
`;

const LogoText = styled.div`
 background: ${palette.white};
 width: 80%;
 border-radius: 1rem;
 font-size: 1rem; //텍스트 크기
 font-weight: bold; //텍스트 굵기
`;

const Vline = styled.div`
  border-left: 1px dashed ${palette.gray_3};
  height: 650px;
`;

export default SignupPage;

