import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

function SearchBar(){
    return(
        <InputContainer placeholder='입력창'>
        </InputContainer>
    );
}

const InputContainer = styled.input`
width: 120px;
height: 30px;
`
export default SearchBar