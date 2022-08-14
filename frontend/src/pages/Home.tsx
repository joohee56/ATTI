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

  // useEffect(()=>{
  //   const token=localStorage.getItem("AccessToken");
  //   //console.log(token);
  //   {token && api
  //     .post("토큰 있을 경우 자동로그인", {
  //       userId: token,
  //     })
  //     .then(async function (response) {
  //       if (response.status === 200) {
  //         // console.log("response:", response.data);
        
  //         navigate("/welcome");
  //       }
  //     })
  //     .catch(function (error) {
        
  //     });
  //   }
  // },[]);

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
