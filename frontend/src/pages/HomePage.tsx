import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/images/logoComputer.png";
import ButtonBlue from "../components/ButtonBlue";

function HomePage() {
  return (
    <StyledPage>
      <StyledContent>
        <span>아띠</span>
        <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
        <Link to="/login">
          <ButtonBlue>로그인</ButtonBlue>
        </Link>
        <Link to="/signup">
          <ButtonBlue>회원가입</ButtonBlue>
        </Link>
      </StyledContent>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #bee4fa;
  position: relative;
`;

const StyledContent = styled.div`
  maxwidth: 500px;
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid;
`;

const logoStyle = {
  width: "50%",
  maxWidth: "500px",
  height: "auto",
};

export default HomePage;
