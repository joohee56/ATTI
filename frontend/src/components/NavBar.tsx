import styled from 'styled-components';


function NavBar(){
    return(
        <NavDiv>
            이곳은 NavBar 지역입니다.
        </NavDiv>
    
    )
}

const NavDiv = styled.div`
width: 100%;
height: 60px;
border: 1px solid;
margin: 0 0 10px 0;
`;
export default NavBar