import { Avatar, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { palette } from "../../styles/palette";
import { ButtonPurple } from "../ButtonStyled";
import Modal from "../Modal";

function MyPage() {
  // 모달 보이기 여부
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const InfoSubmit = () => {
    setIsEdit(false);
  };

  return (
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
          <InfoDiv>
            <SpanStyle>Name</SpanStyle>
            <TextField disabled value={"전역에서 이름 가져오기"} />
          </InfoDiv>
          <InfoDiv>
            <SpanStyle>ID</SpanStyle>
            <TextField disabled value={"전역에서 ID 가져오기"} />
          </InfoDiv>
          <InfoDiv>
            <SpanStyle>Email</SpanStyle>
            <TextField disabled value={"전역에서 Email 가져오기"} />
          </InfoDiv>
          <InfoDiv>
            <SpanStyle>Channel</SpanStyle>
            <TextField disabled value={"전역에서 Channel 가져오기"} />
          </InfoDiv>

          <div>
            <MemberWithdrawal onClick={() => setOpenModal(true)}>
              회원탈퇴
            </MemberWithdrawal>
            <MemberEdit onClick={() => setIsEdit(true)}>
              회원정보수정
            </MemberEdit>
          </div>
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
              <InfoDiv>
                <SpanStyle>Name</SpanStyle>
                <TextField value={"이름"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle>ID</SpanStyle>
                <TextField value={"ID"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle>password</SpanStyle>
                <TextField value={"password"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle>password 확인</SpanStyle>
                <TextField  value={"password 확인"} />
              </InfoDiv>
            </StyledContent>
            <StyledContent>
              <InfoDiv>
                <SpanStyle>Email</SpanStyle>
                <TextField  value={"Email"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle>Phone</SpanStyle>
                <TextField  value={"Phone"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle></SpanStyle>
                <TextField  value={"전역에서 Email 가져오기"} />
              </InfoDiv>
              <InfoDiv>
                <SpanStyle>Channel</SpanStyle>
                <TextField  value={"Channel"} />
              </InfoDiv>
            </StyledContent>
          </StyledPage>
          <MemberEdit onClick={InfoSubmit}>저장하기</MemberEdit>
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SpanStyle = styled.span`
  padding: 12px 12px;
  width: 60px;
  border-radius: 8px;
  font-weight: bold;
  background: ${palette.main_grBlue};
  color: white;
  border: 0px solid;
  font-size: 1rem;
  text-align: center;
`;

const InfoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 15px 0px;
`;

const MemberWithdrawal = styled.button`
  background: ${palette.pink_1};
  color: ${palette.red};
  font-size: 0.8rem;
  border-radius: 1rem;
  border: 0px solid;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 40px;
  margin-right: 20px;
  &:active,
  &:hover {
    filter: brightness(90%);
    background: ${palette.pink_1};
  }
`;

const MemberEdit = styled(ButtonPurple)`
  font-size: 0.8rem;
  padding: 0.8rem 1.2rem;
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
