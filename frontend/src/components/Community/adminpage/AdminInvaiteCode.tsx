import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
`;

const Input = styled.input`
  width: 60%;
  font-size: x-large;
  text-align: center;
`;

function AdminInvaiteCode() {
  return (
    <MainContent>
      <ContentWrapper>
        <div>초대 코드</div>
        <div>SSAFY 7기 채널에 입장할 수 있는 초대 코드입니다.</div>
        <div>
          (가입된 채널이 없을 시의 홈 화면이나 채널 추가 버튼을 클릭 시 나오는
          입력창에 입력하여 현재 채널에 입장할 수 있습니다.)
        </div>
        <Input disabled={true} value="Q456S46712341fasd"></Input>
      </ContentWrapper>
    </MainContent>
  );
}

export default AdminInvaiteCode;
