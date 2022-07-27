import { useState, useCallback } from 'react';
import styled from 'styled-components';

import NormalPostFrame from '../components/Community/NormalPostFrame';
import SearchBar from '../components/Community/SearchBar';
import Category from '../components/Community/Category';

function Community(){
  return(
    <Main>
      <Category/>
      <div>
        <SearchBar/>
        {/* <NormalPostFrame/> */}
      </div>
    </Main>
  );
}

const Main = styled.main`
display: flex;
flex-direction: row;
`;

  export default Community;
  