import React, { useState, useCallback, PropsWithChildren } from "react";
import styled from "styled-components";
import DepartList from "../components/Community/Depart";
import NormalPostFrame from "../components/Community/NormalPostFrame";
import Category from "../components/Community/Category";
import Calendar from "../components/Community/Calendar";
import CommunityBg from "../assets/images/communityBG.png";
import AdminPageWrapper from "../components/Community/adminpage/AdminPageWrapper";

function Community() {
  return (
    <CommunityDiv>
      <Main>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DepartList />
          <Category />
        </div>
        {/* <NormalPostFrame/> */}
        {/* <Calendar/> */}
        <AdminPageWrapper />
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
