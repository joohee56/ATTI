import React, { useState, useCallback, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DepartList from "../components/Community/Depart";
import NormalPostFrame from "../components/Community/NormalPostFrame";
import Category from "../components/Community/Category";
import Calendar from "../components/Community/Calendar";
import Class from "../components/Community/Class";


import CommunityBg from "../assets/images/communityBG.png";
import { categoryState } from "../store/community/Category";
import { departState } from "../store/community/Depart";
import AdminPageWrapper from "../components/Community/adminpage/AdminPageWrapper";
import { RootState } from "../store";

function Community() {
  // const departName = useSelector(categoryState => categoryState.depart.departName)
  const categoryList = useSelector((state: RootState) => state.userInfo);
  
 
  return (
    <CommunityDiv>
      <Main>
        <div>
          <DepartList />
          <Category />
        </div>
         <NormalPostFrame />
      </Main>
    </CommunityDiv>
  );
}
const CommunityDiv = styled.div`
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0;
  background: url("${CommunityBg}") no-repeat;
  background-size: cover !important;
  background-position: center !important;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Community;
