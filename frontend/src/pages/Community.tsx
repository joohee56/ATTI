import React, { useState, useCallback, PropsWithChildren } from 'react';
import styled from 'styled-components';

import NormalPostFrame from '../components/Community/NormalPostFrame';
import Category from '../components/Community/Category';
import PostEditor from '../components/Community/PostEditor';
import PostDetail from '../components/Community/PostDetail';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';

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
    <div>
        <NavBar/>
      <Main>
        <Category/>
        {/* {isOpenModal1 && (
      <Modal onClickToggleModal={onClickToggleModal1} width="800px" height="680px">
        <PostEditor/>
      </Modal>
        )}
        {isOpenModal2 && (
      <Modal onClickToggleModal={onClickToggleModal2} width="1100px" height="600px">
        <PostDetail/>
      </Modal>
        )} */}
        <div>
            <NormalPostFrame/>
          
        </div>
      </Main>

    </div>
  
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
  