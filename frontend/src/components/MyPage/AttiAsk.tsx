import styled from "styled-components";
// import { palette } from "../../styles/palette";
// import { ButtonBlue } from "../ButtonStyled";
// import InputWithLabel from "../InputWithLabel";
function AttiAsk() {
  return (
    <>
      <Main>
        문의는 ATTI에게!
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 500px;
  grid-template-rows: 1fr 1fr 5fr 1fr;
  row-gap: 20px;
  column-gap: 50px;
  align-items: stretch;
  margin-bottom: 30px; ;
`;

export default AttiAsk;
