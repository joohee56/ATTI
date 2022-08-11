import styled from 'styled-components';

function MyPage(){
  return(
      <Main>
        <p>1:1문의 내역</p>
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
  