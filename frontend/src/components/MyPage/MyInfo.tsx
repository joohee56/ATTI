  import styled from 'styled-components';

function MyPage(){
  return(
      <Main>
        <p>Mypage입니다</p>
      </Main>
  );
}

const Main = styled.main`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
min-height: 100vh;
`;

  export default MyPage;
  