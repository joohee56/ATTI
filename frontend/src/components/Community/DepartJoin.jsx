
import styled from "styled-components"
import { useState } from "react"

import { palette } from "../../styles/palette"
import InputWithIcon from "../InputWithLabel"
import { ButtonBlue } from "../ButtonStyled"
import { ButtonPurple } from "../ButtonStyled"

function DepartJoin({handleModal5}) {

    const [departJoin, setDepartJoin] = useState([])
    const getValue = e => {
        const {value} = e.target;
        setDepartJoin(value)
        console.log(departJoin)
    };

    function departJoinFunction() {
        handleModal5()
    }
    return(
        <>
        <Title>채널 가입</Title>
        <DepartDiv>
            <span style={{fontSize: "30px", fontWeight: "bold", margin: "0 0 30px 0"}}>채널 검색</span>
            <DepartSearchDiv>
                채널 검색 부분 만들 것인가 못 만들 것인가?
            </DepartSearchDiv>
            <span style={{fontSize: "30px", fontWeight: "bold", margin: "0 0 30px 0"}}>초대코드 입력</span>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <InputDiv>
                    <InputWithIcon onChange={getValue}/>
                </InputDiv>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <CustomButtonPurple onClick={() => {departJoinFunction()}}>가입하기</CustomButtonPurple>
            </div>
        </DepartDiv>
            <CustomButtonBlue onClick={handleModal5}>닫기</CustomButtonBlue>
        </>
    )
}


const Title = styled.div`
    background: ${palette.main_grBlue};
    color: transparent;
    -webkit-background-clip: text;
    font-size: 40px; 
    font-weight: bold;
    text-align: center;
    margin: 0 0 40px 0;
`

const DepartDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const DepartSearchDiv = styled.div`
    width: 34vw;
    height: 25vh;
    border: 2px solid;
    margin: 0 0 20px 0;

`

const InputDiv = styled.div`
    width: 27vw;
    height: 10vh;
`
const CustomButtonPurple = styled(ButtonPurple)`
    width: 5vw;
    height: 4vh;
`
const CustomButtonBlue = styled(ButtonBlue)`
    width: 8vw;
    height: 5vh;
`

export default DepartJoin