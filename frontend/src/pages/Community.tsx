import React, { useState, useCallback, PropsWithChildren,useEffect } from "react";
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
import SchedulePageWrapper from "../components/Community/schedule/SchedulePageWrapper";

function Community() {
  // const departName = useSelector(categoryState => categoryState.depart.departName)
  const categoryList = useSelector((state: RootState) => state.category.categoryList);
  const categoryName = useSelector((state: RootState) => state.category.categoryName);
  const categoryType = useSelector((state: RootState) => state.category.cType)
  const [changeState, setChangeState] = useState(false);
  useEffect(() => {
    console.log("커뮤니티의 찬기를 바꿉니다.")
    setChangeState((prev) => {
      return !prev;
    })
  },[categoryList])

  const ScheduleContainer = styled.div`
  width: 88vw;
  height: 863px;
  margin: 25px 20px 25px 0;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  return (
    <CommunityDiv>
      <Main>
        <div>
          <DepartList />
          <Category changeState={changeState } />
        </div>
        {(categoryName === "수업실") ? (
          <ScheduleContainer>
            <SchedulePageWrapper/>
          </ScheduleContainer>
        ): (
          <NormalPostFrame changeState={changeState} />
        )
        
      }
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
