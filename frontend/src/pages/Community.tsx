import React, { useState, useCallback, PropsWithChildren } from 'react';
import styled from 'styled-components';

import NormalPostFrame from '../components/Community/NormalPostFrame';
import Category from '../components/Community/Category';
import PostEditor from '../components/Community/PostEditor';
import PostDetail from '../components/Community/PostDetail';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import CommunityBg from '../assets/images/communityBG.png'
function Community(){

  const [isOpenModal1, setOpenModal1] = useState<boolean>(false);
  const onClickToggleModal1 = useCallback(() => {
    setOpenModal1(!isOpenModal1);
  }, [isOpenModal1]);

  const [isOpenModal2, setOpenModal2] = useState<boolean>(false);
  const onClickToggleModal2 = useCallback(() => {
    setOpenModal2(!isOpenModal2);
  }, [isOpenModal2]);


  return(
    <CommunityDiv>
        <NavBar/>
      <Main>
        <Category/>
        <NormalPostFrame/>
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
padding: 10px 10px 50px 10px;
background-image: url('${CommunityBg}');
background-position: center;
background-size: cover;
`;

const FlexDiv = styled.div`
display: flex;
justify-content: flex-end;
`;

  export default Community;
  