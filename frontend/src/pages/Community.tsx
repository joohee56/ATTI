import React, { useState, useCallback, PropsWithChildren } from 'react';
import styled from 'styled-components';

import NormalPostFrame from '../components/community/NormalPostFrame';
import SearchBar from '../components/community/SearchBar';
import {ButtonStyled} from '../components/ButtonBlue';
import Category from '../components/community/Category';
import PostEditor from '../components/community/PostEditor';
import Modal from '../components/Modal';

function Community(){

  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return(
      <Main>
        <Category/>
        {isOpenModal && (
      <Modal onClickToggleModal={onClickToggleModal}>
        <PostEditor/>
      </Modal>
    )}
        <div>
          <FlexDiv>
            <SearchBar/>
            <button>검색</button>
            <ButtonStyled onClick={onClickToggleModal}>글쓰기</ButtonStyled>
          </FlexDiv> 
          <NormalPostFrame/>
        </div>
      </Main>
  
  );
}

const Main = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;
`;

const FlexDiv = styled.div`
display: flex;
justify-content: flex-end;
`;

  export default Community;
  