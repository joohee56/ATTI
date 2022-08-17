import styled, { keyframes } from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { palette } from "../../styles/palette";
import { ButtonBlue } from "../ButtonStyled";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SouthIcon from '@mui/icons-material/South';

function LowPort() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Main>
      {/* 1번 */}
      <WhiteContent>
        <TextDiv>
          <BigText>우리들만의 전용공간을 만들어보세요</BigText>
          <SideText>
            ATTI는 주제기반으로 여러 채널로 나뉩니다.
            <br />
            단체방에서도 혼잡함 없이 협동하고, 공유하고, 편하게 이야기를 나눌 수
            있어요.
          </SideText>
        </TextDiv>
        <ImageDiv data-aos="zoom-in">
          커뮤니티{"(캡처)"}와 채널 나눠진 이미지{"(피그마나 PPT)"}
        </ImageDiv>
      </WhiteContent>
      {/* 2번 */}
      <BlueContent>
        <ImageDiv data-aos="zoom-in">게시판{"(캡처)"}과 게시판 글보기{"(캡처)"}</ImageDiv>
        <TextDiv>
          <BigText>친구들과 주제에 맞게 대화해요</BigText>
          <SideText>
            카테고리들이 있어요
            <br />
            친구들끼리 주제에 맞게 게시글을 올리고 소통할 수 있어요
          </SideText>
        </TextDiv>
      </BlueContent>
      {/* 3번 */}
      <WhiteContent>
      <TextDiv>
          <BigText>시간표를 통해 화상 회의에 접속해보세요</BigText>
          <SideText>
            관리자는 시간표에서 화상 회의를 열 수 있습니다.
            <br />
            학생은 시간표를 통해 화상 회의 시간을 한 눈에 확인하고 접속할 수
            있어요.
          </SideText>
        </TextDiv>
        <ImageDiv data-aos="zoom-in">
          시간표{"(캡처)"}와 채널 나눠진 이미지{"(피그마나 PPT)"}
        </ImageDiv>
      </WhiteContent>
      {/* 4번 */}
      <BlueContent>
        <ImageDiv data-aos="zoom-in">
          익명모드{"(캡처 or 피그마)"}
        </ImageDiv>
        <TextDiv>
          <BigText>익명모드로 대화해요</BigText>
          <SideText>
           화상회의에서 익명모드를 요청할 수 있습니다.
            <br />
         화상회의에서 내가 누군지 모르게 발표해요
          </SideText>
        </TextDiv>
      </BlueContent>
            {/* Final */}
      <FinalContent>
        <FinalDiv>
          <TextDiv>
            <BigText>친밀감을 위한 신뢰도 높은 기술</BigText>
            <SideText>
              저지연 음성과 영상 채팅을 이용하면 꼭 한 공간에 있는 것 같답니다.
              <br />
              영상으로 인사하거나, 친구들의 게임 스트리밍을 보거나, 화면 공유로
              함께 그림을 그릴 수도 있죠.
              <br/> 소규모부터 대규모 학교까지 학생을 관리하고 함께 회의하고 공부해요
            </SideText>
          </TextDiv>
          <ImageDiv data-aos="zoom-in">
            화상채팅 화면 커뮤니티 화면{"(피그마(우리 애기사진) PPT)"}
          </ImageDiv>
        </FinalDiv>
      </FinalContent>
      {/* 시작해볼까 */}
        <SideText>✨ 이제 시작해 볼까요? ✨</SideText>
        <BoxStyle>
          <span>click!</span>
          <SouthIcon color="action" sx={{ fontSize: 40}}/>
        </BoxStyle>
          <SignupButton>회원가입하러 가기</SignupButton>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-bottom: 70px;
  /* background: linear-gradient(#a0b0fd 0%, #ffffff 100%); */
`;

const WhiteContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  width: 100%;
  height: 500px;
  background: white;
  /* border: 1px solid ${palette.blue_1}; */
`;
const BlueContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  width: 100%;
  height: 600px;
  background: #f2f3fb;
  /* border: 1px solid ${palette.blue_1}; */
`;

const TextDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;
const ImageDiv = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;

const BigText = styled.div`
  font-size: 3rem;
`;
const SideText = styled.div`
  font-size: 1.5rem;
`;

const FinalContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  column-gap: 50px;
  width: 100%;
  height: 600px;
  background: linear-gradient(#f2f3fb -20%, white 100%);
  margin-bottom: 100px;
  /* border: 1px solid ${palette.blue_1}; */
`;

const FinalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 600px;
  border: 1px solid;
  text-align: center;
`;

const floating = keyframes`
    0% {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const BoxStyle = styled.div`
  width: 50px;
  height: 50px;
  transform: scaleY(-1);
  animation: ${floating} 2s ease infinite;
  margin: 40px 0px 15px 0px;
`;

const SignupButton = styled(ButtonBlue)`
  padding: 10px 40px;
  font-size: 1.2rem;
  border-radius: 1rem;
`;

export default LowPort;
