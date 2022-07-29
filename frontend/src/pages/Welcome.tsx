import styled from 'styled-components';

function Community(){
  return(
      <Main>
        <p>채널없는 경우 페이지</p>
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

  export default Community;
  