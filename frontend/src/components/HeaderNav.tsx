import * as React from "react";
import styled from "styled-components";
import { ButtonBlue } from "./ButtonStyled";
import LogoCirce from "../assets/images/logoCirce.png";
import AttiText4 from "../assets/images/Text/AttiText4.png";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/LoginStore";
import { RootState } from "../store";
import { reRenderingActions } from "../store/community/ReRendering";
import {
  Avatar,
  Badge,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { palette } from "../styles/palette";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

function HeaderNav() {
  const { auth } = useSelector((state: RootState) => state.userInfo);
  const myPage = useSelector((state: RootState) => state.reRendering.setMyPage)
  console.log(myPage)
  const getMyPage = (i: any) => {
    return !i
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(loginActions.logout());
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("userId");
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoClick = () => {
    navigate(!auth? "/":"/community/ref/ref");
  };

  return (
    <Main>
      <Header>
        <div style={{ display: `flex` }}>
        
            <LogoImg src={LogoCirce} onClick={logoClick} alt="Logo Circle Img" />
   
          <LogoText src={AttiText4} alt="LogoText Img" />
        </div>
        {!auth ? (
          <div>
          <Link to="/login">
            <LoginButton>로그인</LoginButton>
          </Link>
          <Link to="/signup" >
          <LoginButton>회원가입</LoginButton>
        </Link>
        </div>
        ) : (
          // 쪽지 // 알림 // 프로필이미지
          <div style={{ display: `flex` }}>
            {/* <Badge color="secondary" badgeContent={0}>
              <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={0}>
              <NotificationsNoneIcon />
            </Badge> */}
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 40, height: 40, bgcolor: palette.yellow_3 }}>
                M
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 25,
                    height: 25,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => {dispatch(reRenderingActions.saveSetMyPage({setMyPage: getMyPage(myPage) }))}}>
                <Avatar /> My Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon onClick={Logout}>
                  <LogoutIcon fontSize="small" />
                로그아웃
                </ListItemIcon>
              </MenuItem>
            </Menu>
            {/* <LoginButton onClick={Logout}>로그아웃</LoginButton> */}
          </div>
        )}
      </Header>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  border-bottom: 1px solid ${palette.gray_2};
`;

const Header = styled.header`
  width: 100%;
  height: 30px;
  max-width: 1700px;
  padding: 12px 0px;
  margin: auto;
  font-weight: bold;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray_2};
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

const LoginButton = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 10px 24px;
  border-radius: 8px;
`;

export default HeaderNav;
