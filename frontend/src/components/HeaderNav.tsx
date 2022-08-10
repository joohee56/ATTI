import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBlue } from "./ButtonStyled";
import LogoCirce from "../assets/images/logoCirce.png";
import AttiText4 from "../assets/images/Text/AttiText4.png";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/Login";
import { RootState } from "../store";
import { Avatar, Badge, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { palette } from "../styles/palette";

const Header = styled.header`
  width: 90%;
  height: 30px;
  max-width: 1600px;
  padding: 10px 3rem;
  font-weight: bold;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 40px;
  padding: 1rem 0rem;
`;

const LogoText = styled.img`
  width: 80%;
  height: 35px;
  padding: 1rem 0rem;
  /* src={AttiText1}
  src={AttiText2}
  src={AttiText3}
  src={AttiText4} */
`;

const LoginButton = styled(ButtonBlue)`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 12px 24px;
  border-radius: 8px;
`;

function HeaderNav() {
  const { auth } = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(loginActions.logout());
  };

  return (
    <div style={{ width: `100vw` }}>
      <Header>
        <div style={{ display: `flex` }}>
          <Link to="/community">
            <LogoImg src={LogoCirce} alt="Logo Circle Img" />
          </Link>
          <LogoText src={AttiText4} alt="LogoText Img" />
        </div>
        {!auth ? (
          <Link to="/login">
            <LoginButton>로그인</LoginButton>
          </Link>
        ) : (
          // 쪽지 // 알림 // 프로필이미지
          <div style={{ display: `flex` }}>
            <Badge color="secondary" badgeContent={0}>
              <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={0}>
              <NotificationsNoneIcon />
            </Badge>
            <IconButton>
              <Avatar sx={{ width: 30, height: 30, bgcolor: palette.gray_2 }}>
                PP
              </Avatar>
            </IconButton>
            <LoginButton onClick={Logout}>로그아웃</LoginButton>
          </div>
        )}
      </Header>
    </div>
  );
}

export default HeaderNav;
