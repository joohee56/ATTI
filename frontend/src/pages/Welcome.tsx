import styled from "styled-components";

// function Welcome(){
//   return(
//       <Main>
//         <p>채널없는 경우 페이지</p>
//       </Main>
//   );
// }

// const Main = styled.main`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// min-height: 100vh;
// `;

//   export default Welcome;

import CommunityBg from "../assets/images/communityBG.png";
import MyPage from "../components/MyPage/MyInfo";
import ContactAdmin from "../components/MyPage/ContactAdmin";
import AdminContactHistory from "../components/MyPage/AdminContactHistory";
import * as React from "react";
import MyPageComponent from "../components/MyPage/MyPageComponent";

function Welcome() {
  const [value, setValue] = React.useState(0);

  const tabContArr = [<MyPage />, <ContactAdmin />, <AdminContactHistory />];

  return (
    <CommunityDiv>
      <Main>
        <PostContainer>
         <MyPageComponent/>
        </PostContainer>
      </Main>
    </CommunityDiv>
  );
}
const CommunityDiv = styled.div`
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0;
  background: url("${CommunityBg}") no-repeat;
  background-size: cover !important;
  background-position: center !important;
`;

const PostContainer = styled.div`
  width: 1300px;
  height: 671px;
  margin: 15px 0;
  border-radius: 20px;
  background-color: white;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Welcome;
