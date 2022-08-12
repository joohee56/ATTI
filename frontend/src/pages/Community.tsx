import React, { useState, useCallback, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DepartList from '../components/Community/Depart';
import NormalPostFrame from '../components/Community/NormalPostFrame';
import Category from '../components/Community/Category';
import Calendar from '../components/Community/Calendar';
import Class from '../components/Community/Class';

import CommunityBg from '../assets/images/communityBG.png'
import {categoryState} from "../store/community/Category";
import {departState} from "../store/community/Depart"

function Community(){
  // const departName = useSelector(categoryState => categoryState.depart.departName)
  const categoryName = useSelector(categoryState);
  const departName = useSelector(departState);
  console.log(categoryName);
  return(
    <CommunityDiv>
      <Main>
        <div style={{display: "flex", flexDirection: "column"}}>
          <DepartList/>
          <Category/>
        </div>
        {(categoryName.categoryName === "공지사항" || categoryName.categoryName === "질문" || 
        categoryName.categoryName === "자유게시판" || categoryName.categoryName === "자료실") && 
        (
          <NormalPostFrame/>
        )}
        {/* {categoryName.categoryName === "수업실" && (
          <Class/>
        )} */}
        {/* <Calendar/> */}
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
background: url('${CommunityBg}') no-repeat;
background-size: cover !important; 
background-position: center !important;
`;

const FlexDiv = styled.div`
display: flex;
justify-content: flex-end;
`;

  export default Community;
  