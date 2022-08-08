import React, { useState, useCallback, PropsWithChildren } from 'react';
import styled from 'styled-components';

import NormalPostFrame from '../components/Community/NormalPostFrame';
import Category from '../components/Community/Category';
import Calendar from '../components/Community/Calendar';
import PostEditor from '../components/Community/PostEditor';
import PostDetail from '../components/Community/PostDetail';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import CommunityBg from '../assets/images/communityBG.png'


function Community(){
  return(
    <CommunityDiv>
        <NavBar/>
      <Main>
        <Category/>
        <NormalPostFrame/>
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
  