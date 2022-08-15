import { useEffect } from "react";
import styled from "styled-components";
import HeaderNav from '../components/HeaderNav';
import LowPart from "../components/HomeComponent/LowerPart";
import TopPart from "../components/HomeComponent/TopPart";
import {api} from "../utils/api";
import { useNavigate } from "react-router-dom";

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

  useEffect(()=>{
    const userId=localStorage.getItem("userId");
    //console.log(token);
    {userId && api
      .post("/auth/auto", {
        userId: userId,
      })
      .then(async function (response) {
          console.log("response:", response.data);
          //navigate("/welcome");     
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
