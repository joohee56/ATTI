import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LowPart from "../components/HomeComponent/LowerPart";
import TopPart from "../components/HomeComponent/TopPart";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/LoginStore";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    //console.log(token);
    {
      userId &&
        api
          .post("/auth/auto", {
            userId: userId,
          })
          .then(async function (response) {
            console.log("response:", response.data);
            if (response.status === 200) {
              // console.log("response:", response.data);
              dispatch(
                loginActions.login({
                  id: response.data.userId,
                  userName: response.data.userName,
                  accessToken: response.data.accessToken,
                  admin: response.data.admin,
                  categoryList: response.data.categoryList,
                  departList: response.data.departList,
                  postList: response.data.postList,
                })
              );
            }
            if (response.data.departList == null) navigate("/welcome");
            else
              navigate(
                `/community/${response.data.departList[0].departId}/${response.data.categoryList[0].categoryId}`
              );
          })
          .catch(function (error) {
            console.log("Error", error);
          });
    }
  }, []);

  return (
      <Main>
        <TopPart />
        <BoxStyle>
          <MouseOutlinedIcon color="action" sx={{ fontSize: 45}} style={{transform: `rotate(180deg)`}}/>
        </BoxStyle>
        <LowPart />
      </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  position: relative;
  -ms-overflow-style:none /* IE and Edge */
  scrollbar-width:none /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const floating = keyframes`
    0% {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const BoxStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  transform: scaleY(-1);
  /* background: #00026e; */
  animation: ${floating} 2s ease infinite;
  position: absolute;
  top: 780px;
  z-index: 5;
`;

export default HomePage;
