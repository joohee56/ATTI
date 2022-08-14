import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { palette } from "../../styles/palette"
import styled from "styled-components"
import { ButtonBlue } from "../ButtonStyled"

import InputWithIcon from "../InputWithLabel"
import apiAcc, { api } from "../../utils/api"
function CategoryCreate({handleModal6}){

    const [newCategory, setNewCategory] = useState([])
    
    const getValue = e => {
        const {value} = e.target;
        setNewCategory(value)
    };
    const [changeCss, setChangeCss] = useState(1);
    const [cType, setCType] = useState([]);
    const [categoryAnoInfo, setCategoryAnoInfo] = useState([]);
    const [categoryComInfo, setCategoryComInfo] = useState([]);
    const [categoryComAnoInfo, setCategoryComAnoInfo] = useState([]);
    
    const { auth } = useSelector(state => state.userInfo);
    const departId = useSelector(state => state.depart.departId);


    // 카테고리 생성: 로그인 쪽에서 하는 axios 재랜더링 시켜야
    const categoryCreateFunction = () => {
        api.post(`/depart/category/create`,
        {
            categpryAnoInfo: categoryAnoInfo,
            categoryComAnoInfo: categoryComAnoInfo,
            categoryComInfo: categoryComInfo,
            categoryName: newCategory,
            type: cType,
            departId: 1,
            userId: "gusxo123"
        }).then((res) => {
            console.log("카테고리 생성: ", res.data)
        })
    }

    function categoryFunction() {
        categoryCreateFunction()
        handleModal6()
    }
    // useEffect(() => {
    //     console.log('카테고리명: ', newCategory)
    //     console.log('카테고리타입: ', cType)
    //     console.log('익명여부: ', categoryAnoInfo)
    //     console.log('댓글금지여부: ', categoryComInfo)
    //     console.log('댓글익명여부: ', categoryComAnoInfo)
    // },
    // [cType, categoryAnoInfo, categoryComInfo, categoryComAnoInfo]
    // )

    return(
        <div style={{width: "900px"}}>  
            <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <Title>
                    카테고리 생성
                </Title> 
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", margin: "30px 0 0 40px"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
                    <Question>1. 카테고리 이름은 무엇인가요?</Question> 
                    <span style={{fontSize: "15px", color: "gray"}}>다른 사용자에게 보여질 카테고리의 이름을 지어주세요!</span>
                    <InputDiv>
                        <InputWithIcon borderRadius="20px" onChange={getValue} placeholder="ex) "/>
                    </InputDiv>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
                    <Question>2. 카테고리의 형식을 1개 선택해 주세요.</Question> 
                    <span style={{fontSize: "15px", color: "gray"}}>선택한 카테고리 형식을 배경으로 제작됩니다.</span>
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"flex-start"}}>
                        <CustomDiv>
                            <CustomButton onClick={() => {setCType("FREE")}} name="FREE">자유게시판</CustomButton>
                            <CustomButton onClick={() => {setCType("TIMETABLE")}} name="TIMETABLE">시간표(수업 미팅실)</CustomButton>
                        </CustomDiv>
                        <CustomDiv>
                            <CustomButton onClick={() => {setCType("NOTICE")}} name="NOTICE">공지사항(관리자만 작성이 가능)</CustomButton>
                            <CustomButton onClick={() => {setCType("DATA")}} name="DATA">자료실(첨부파일 첨부 가능)</CustomButton>
                        </CustomDiv>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Question>3. 세부 설정을 체크해주세요!</Question> 
                    <div style={{display: "flex", flexDirection: "column", margin: "0 0 0 10px"}}>
                        <SettingDiv>
                            <CustomSpan>게시글 작성 시 익명을 허용하시겠습니까?</CustomSpan>
                            <div>
                                <button onClick={() => {setCategoryAnoInfo(true)}}>Yes</button>
                                <button onClick={() => {setCategoryAnoInfo(false)}}>No</button>
                            </div>
                        </SettingDiv>
                        <SettingDiv>
                            <CustomSpan>게시글에 대한 댓글 작성을 허용하시겠습니까?</CustomSpan>
                            <div>
                                <button onClick={() => {setCategoryComInfo(false)}}>Yes</button>
                                <button onClick={() => {setCategoryComInfo(true)}}>No</button>
                            </div>
                        </SettingDiv>
                        <SettingDiv>
                            <CustomSpan>게시글애 대한 댓글 작성 시 익명을 허용하시겠습니까?</CustomSpan>
                            <div>
                                <button onClick={() => {setCategoryComAnoInfo(true)}}>Yes</button>
                                <button onClick={() => {setCategoryComAnoInfo(false)}}>No</button>
                            </div>
                        </SettingDiv>
                    </div>
                </div>
                <ButtonBlue onClick={() => {categoryFunction()}}>작성</ButtonBlue>
            </div>
        </div>
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
const Question = styled.span`
    font-size: 30px;
    font-weight: bold;
    margin: 10px 10px;
`

const InputDiv = styled.div`
    width: 35vw;
    height: 10vh;
    margin: 10px 0;
`
const CustomDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    width: 500px;
`

const CustomButton = styled.button`
    width: 240px;
    height: 50px;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    background: white;
    border: 1px solid;
    border-radius: 20px;
    &:hover{  
  cursor: pointer
 }
`
const CustomSpan = styled.span`
    font-size: 20px;
    margin: 10px 0;
`
const SettingDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 750px;
`
export default CategoryCreate