import styled from "styled-components"
import { useState } from "react"
import { useSelector } from "react-redux"

import apiAcc, {api} from "../../utils/api"
import { palette } from "../../styles/palette"
import InputWithIcon from "../InputWithLabel"
import { ButtonBlue } from "../ButtonStyled"


function DepartCreate({handleModal4}) {

    const { auth } = useSelector(state => state.userInfo)
    const [newDepart, setNewDepart] = useState({
        departId: "",
        userId: auth.id,
        departName: "",
        departCode: ""

    })

    const getValue = e => {
        const {value} = e.target;
        setNewDepart(() => {
            newDepart.departName = value
        })
    };

    // // 채널 생성
    // const departPost = () => {
    //     api.post(`/depart/create`,
    //     {
    //         departId: newDepart.departId,
    //         userId: newDepart.userId,
    //         departName: newDepart.departName,
    //         departCode: newDepart.departCode
    //     }).then((res) => {
    //         console.log("채널 만들기: ", res.data)
    //     })
    // }
    
    function departCreateFunction(){
        handleModal4()
    }

    return(
        <>
        <Title>채널 생성</Title>
        <DepartDiv>
            <p style={{fontSize: "35px", fontWeight: "bold"}}>채널명은 무엇인가요?</p>
            <span style={{fontSize: "15px", color: "gray", margin: "-20px 0 15px 0"}}>다른 사용자에게 보여질 채널의 이름을 지어주세요!</span>
            <InputDiv>
                <InputWithIcon onChange={getValue} placeholder="ex) SSAFY 7기"/>
            </InputDiv>
        </DepartDiv>
            <CustomButtonBlue onClick={() => {departCreateFunction()}}>생성</CustomButtonBlue>
        </>
    )
}

const Title = styled.span`
    background: ${palette.main_grBlue};
    color: transparent;
    -webkit-background-clip: text;
    font-size: 40px; 
    font-weight: bold;
    text-align: center;
`

const DepartDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const InputDiv = styled.div`
    width: 35vw;
    height: 10vh;
`

const CustomButtonBlue = styled(ButtonBlue)`
    width: 15vh;
    height: 3vw;
`
export default DepartCreate