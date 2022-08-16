import styled from "styled-components"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import apiAcc, {api} from "../../utils/api"
import { palette } from "../../styles/palette"
import InputWithIcon from "../InputWithLabel"
import { ButtonBlue } from "../ButtonStyled"
import { reRenderingActions } from "../../store/community/ReRendering"
import { departActions} from "../../store/community/Depart"
import { categoryActions } from "../../store/community/Category"
import { resolvePath } from "react-router-dom"

function DepartCreate({handleModal4, newDepartFrame}) {

    const { id } = useSelector(state => state.userInfo)
    const { departList } = useSelector(state => state.userInfo) //로그인 했을 때 사용자의 채널들을 가져옴 -> 추가하기 전
    const [newDepart, setNewDepart] = useState({ // 추가할 채널의 정보
        userId: id,
        departName: "",
    })
    const [isOpenModal, setIsOpenModal] = useState(false);
    const currentCider = useSelector(state => state.reRendering.cider) // 리렌더링을 위해 사용
    const updateCider = !currentCider
    const dispatch = useDispatch()

    const getValue = e => { // 채널 이름 같은 정보를 저장함
        const {value} = e.target;
        newDepart.departName = value
    };

    // 채널 생성
    const departPost = () => {

        api.post(`/depart/create`,
        {
            userId: newDepart.userId,
            departName: newDepart.departName,
        }).then(function (response) {
            console.log("채널 생성 결과:", response)
            // newDepartFrame.push(newDepart)
            console.log("새로운 채널을 생성하는데요?", newDepart.departName)
            dispatch(departActions.saveDepart(           // 새로운 채널의 이름 저장, 생성자도 저장
                {
                    userId: newDepart.userId,
                    departName: newDepart.departName
                }
            ))
            dispatch(categoryActions.saveCategoryList(   // 새로운 채널에 들어있는 기본 카테고리 저장
                {
                    categoryList: response.data
                }
            ))
            dispatch(reRenderingActions.saveReRendering( // 리렌더링을 하도록 트리거 설정
                {cider: updateCider }
            ))
        })
    }
    
    function departCreateFunction(){
        departPost() 
        handleModal4() // 모달띄우기
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