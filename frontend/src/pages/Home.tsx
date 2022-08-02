import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/images/logoComputer.png";
import {ButtonBlue} from "../components/ButtonStyled";

function HomePage() {
  return (
    <StyledPage>
      <StyledContent>
        <p>아띠</p>
        <img src={Logo} style={logoStyle} alt="Logo Cumputer Img" />
        <div>
          <Link to="/login">
            <ButtonBlue>로그인</ButtonBlue>
          </Link>
          <br/>
          <Link to="/signup">
            <ButtonBlue>회원가입</ButtonBlue>
          </Link>
        </div>
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
max-width: 500px;
min-width: 500px;
height: 300px;
padding: 3rem;
text-align: center;
border-radius: 1rem;
border: 1px solid;
`;

const logoStyle = {
  width: "50%",
  maxWidth: "500px",
  height: "auto",
};

export default HomePage;
