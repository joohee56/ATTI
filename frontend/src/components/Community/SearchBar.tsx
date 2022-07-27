import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

function SearchBar(){
    return(
        <InputContainer placeholder='입력창'>
        </InputContainer>
    );
}

const InputContainer = styled.input`
width: 150px;
height: 50px;
`
export default SearchBar