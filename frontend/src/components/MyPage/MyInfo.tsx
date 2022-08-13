import { Avatar, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { palette } from "../../styles/palette";
import InputPassword from "../account/InputPassword";
import InputWithPhone from "../account/InputWithPhone";
import { ButtonBlue, ButtonPurple } from "../ButtonStyled";
import InputWithLabel from "../InputWithLabel";
import Modal from "../Modal";

function MyPage() {
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
    <>
      <Main>
        {!isEdit ? (
          <>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: palette.gray_2,
                marginBottom: 2,
              }}
            >
              PP
            </Avatar>
            <Grid>
              <SpanStyle>Name</SpanStyle>
              <InputWithLabel disabled name={""} placeholder={""} />

              <SpanStyle>ID</SpanStyle>
              <InputWithLabel disabled name={""} placeholder={""} />

              <SpanStyle>Email</SpanStyle>
              <InputWithLabel disabled name={""} placeholder={""} />

              <SpanStyle>Channel</SpanStyle>
              <InputWithLabel disabled name={""} placeholder={""} />
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
             <MemberWithdrawal onClick={() => setOpenModal(true)}>
              회원탈퇴
            </MemberWithdrawal>
          </>
        ) : (
          <>
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
          </>
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  grid-auto-rows: minmax(1fr, auto);
  row-gap: 20px;
  column-gap: 50px;
  align-items: stretch;
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
