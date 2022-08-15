import { useEffect } from "react";
import styled from "styled-components";
import HeaderNav from '../components/HeaderNav';
import LowPart from "../components/HomeComponent/LowerPart";
import TopPart from "../components/HomeComponent/TopPart";
import {api} from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/LoginStore";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const userId=localStorage.getItem("userId");
    //console.log(token);
    {userId && api
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
              })
            );
          }
          //if(response.data.departList==null) navigate("/welcome");     
          //else navigate("/");
      })
      .catch(function (error) {
        console.log("Error",error)
      });
    }
  },[]);

  return (
    <>
      <Main>
        <TopPart />
        <LowPart />
      </Main>
    </>
  );
}

export default HomePage;
