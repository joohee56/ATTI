import { Avatar, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { palette } from "../../styles/palette";
import apiAcc from "../../utils/api";
import InputPassword from "../account/InputPassword";
import InputWithPhone from "../account/InputWithPhone";
import { ButtonBlue, ButtonPurple } from "../ButtonStyled";
import InputWithLabel from "../InputWithLabel";
import Modal from "../Modal";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface MyInfoData {
  userName: string;
  email: string;
  birth: string;
  phone: string;
}


function MyPage() {
  const { userName } = useSelector((state: RootState) => state.userInfo);
  const { id } = useSelector((state: RootState) => state.userInfo);
  const { accessToken } = useSelector((state: RootState) => state.userInfo);

  const [mydataInfo, setMydataInfo] = useState<MyInfoData>({
    userName: "",
    email: "",
    birth: "",
    phone: "",
  });

  useEffect(()=>{
    apiAcc
        .get("/user/"+{id}, {
          params: {
            userId:{id},
          },
        })
        .then(function (response) {
           console.log("성공",response);
        })
        .catch(function (error) {
          console.log("에러발생 : " + error);
        });
  },[]);

  // 모달 보이기 여부
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const InfoSubmit = () => {
    setIsEdit(false);
  };

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onChangePhonNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPhoneNumber(
      value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );
  };
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);

  return (
    <Main>
      {!isEdit ? (
        <>
          <Content>
            <Avatar
              {...stringAvatar("Kent Dodds")}
              sx={{
                width: 120,
                height: 120,
                bgcolor: palette.yellow_3,
                marginBottom: 5,
                fontSize: 40,
              }}
            ></Avatar>
            <Grid>
              <SpanStyle>Name</SpanStyle>
              <InputWithLabel
                disabled
                name={""}
                placeholder={""}
                value={userName}
              />

              <SpanStyle>ID</SpanStyle>
              <InputWithLabel
                disabled
                name={""}
                placeholder={""}
                value={id}
              />

              <SpanStyle>Email</SpanStyle>
              <InputWithLabel
                disabled
                name={""}
                placeholder={""}
                value={"내 이메일"}
              />

              <SpanStyle>Channel</SpanStyle>
              <InputWithLabel
                disabled
                name={""}
                placeholder={""}
                value={"내 채널"}
              />
            </Grid>
            <UserEdit onClick={() => setIsEdit(true)}>회원정보수정</UserEdit>
            {isOpenModal && (
              <Modal onClickToggleModal={() => setOpenModal(false)}>
                <p>정말로 탈퇴하시곘습니까?</p>
                <p>
                  탈퇴시 관련 데이터들이 삭제 됩니다.
                  <br />
                  재가입시 데이터를 복구 할 수 없습니다.
                </p>
                <div>
                  <button>아니오</button>
                  <MemberWithdrawal>탈퇴</MemberWithdrawal>
                </div>
              </Modal>
            )}
          </Content>
          <MemberWithdrawal onClick={() => setOpenModal(true)}>
            회원탈퇴
          </MemberWithdrawal>
        </>
      ) : (
        <Content>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: palette.gray_2,
              marginBottom: 2,
            }}
          >
            수정
          </Avatar>
          <StyledPage>
            <StyledContent>
              <Grid>
                <SpanStyle>Name</SpanStyle>
                <InputWithLabel name={""} placeholder={""} value={"이름"} />

                <SpanStyle>ID</SpanStyle>
                <InputWithLabel disabled name={""} placeholder={""} />
                <SpanStyle>Password</SpanStyle>
                <InputPassword
                  name="password"
                  placeholder="비밀번호"
                  value={"비밀번호"}
                  // onChange={onChangePassword}
                />

                <SpanStyle>Email</SpanStyle>
                <InputWithLabel
                  name="password확인"
                  placeholder="비밀번호 확인"
                  type="password"
                  value={""}
                />
              </Grid>
            </StyledContent>
            <StyledContent>
              <Grid>
                <SpanStyle>Email</SpanStyle>
                <InputWithLabel name={""} placeholder={""} value={"Email"} />

                <SpanStyle>Phone</SpanStyle>
                <InputWithPhone
                  name="phoneNumber"
                  placeholder="폰 번호"
                  phonNumber={phoneNumber}
                  onChange={onChangePhonNumber}
                  isCertifiedSuccess={setIsPhoneNumber}
                />

                <SpanStyle>Channel</SpanStyle>
                <InputWithLabel name={""} placeholder={""} />
              </Grid>
            </StyledContent>
          </StyledPage>
          <UserEdit onClick={InfoSubmit}>저장하기</UserEdit>
        </Content>
      )}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-top: 50px;
  transform: translate(-50%);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  grid-auto-rows: minmax(1fr, auto);
  row-gap: 20px;
  column-gap: 50px;
  align-items: stretch;
`;

const ProfileImg = styled(Avatar)`
  width: 150;
  height: 150;
  background-color: ${palette.yellow_3};
  margin-bottom: 6px;
`;

const SpanStyle = styled.span`
  padding: 12px 0px;
  width: 100%;
  border-radius: 8px;
  font-weight: bold;
  background: ${palette.blue_1};
  color: black;
  border: 0px solid;
  font-size: 1rem;
  text-align: center;
`;

const MemberWithdrawal = styled.button`
  background: ${palette.pink_1};
  color: ${palette.red};
  font-size: 0.8rem;
  border-radius: 1rem;
  border: 0px solid;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:active,
  &:hover {
    filter: brightness(90%);
    background: ${palette.pink_1};
  }
`;

const UserEdit = styled(ButtonBlue)`
  font-size: 0.8rem;
  padding: 0.8rem 1.2rem;
  margin-top: 20px;
`;

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledContent = styled.div`
  width: 500px;
  height: 340px;
  text-align: center;
  /* border-radius: 1rem;
  border: 1px solid; */
`;

export default MyPage;
