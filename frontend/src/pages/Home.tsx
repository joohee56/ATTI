import styled from "styled-components";
import HeaderNav from '../components/HomeComponent/HeaderNav';
import LowPart from "../components/HomeComponent/LowerPart";
import TopPart from "../components/HomeComponent/TopPart";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  -ms-overflow-style:none /* IE and Edge */
  scrollbar-width:none /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

`;

function HomePage() {
  return (
    <>
      <Main>
        <HeaderNav />
        <TopPart />
        <LowPart />
      </Main>
    </>
  );
}

export default HomePage;
