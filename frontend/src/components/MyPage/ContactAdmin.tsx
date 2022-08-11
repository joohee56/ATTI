import styled from 'styled-components';

function MyPage(){
  return(
      <Main>
        <p>관리자에게 1:1문의하기</p>
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
  