import React, {PropsWithChildren, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import { categoryActions } from '../../store/community/Category';
import CategoryCreate from './CategoryCreate';
import Modal from '../Modal';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

import { palette } from "../../styles/palette";
import { SosOutlined } from '@mui/icons-material';
import { reRenderingActions } from '../../store/community/ReRendering';




const dummyCategory = [
    {
        categoryId: 1,
        categoryAnoInfo: 1,
        categoryComAnoInfo: false,
        categoryComInfo: 1,
        categoryName: '공지사항',
        cType: '공지사항',
        departId: null,
        userId: null
    },
    {
        categoryId: 2,
        categoryAnoInfo: 0,
        categoryComAnoInfo: false,
        categoryComInfo: 1,
        categoryName: '질문',
        cType: '자유게시판',
        departId: null,
        userId: null
    },
    {
        categoryId: 3,
        categoryAnoInfo: 0,
        categoryComAnoInfo: false,
        categoryComInfo: 0,
        categoryName: '자료실',
        cType: '자료실',
        departId: null,
        userId: null
    },
    {
        categoryId: 4,
        categoryAnoInfo: 0,
        categoryComAnoInfo: false,
        categoryComInfo: 0,
        categoryName: '자유게시판',
        cType: '자유게시판',
        departId: null,
        userId: null
    },
    {
        categoryId: 5,
        categoryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '수업실',
        cType: '시간표',
        departId: null,
        userId: null
    },
]

function CategoryList(dummyCategory){
    
    const dispatch = useDispatch()
    const departName = useSelector(state => state.depart.departName)

    const [changeCss, setChangeCss] = useState(1);
   
    const rendering = () => {
        const noClickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            width: "180px",
            height: "60px",
            margin: "15px -20px 0px 0px",
            boxShadow: "3px 3px 3px grey",
            // border: "1px solid",
            // zIndex: "10",
        }
        const clickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderRadius: "10px 15px 15px 10px",
            width: "200px",
            height: "100px",
            margin: "10px -20px 0px 0px",
            boxShadow: "3px 3px 3px grey",
            color: palette.blue_3,
           
        }
        const purpleBar = {
            width: "15px",
            height: "60px",
            position: 'absolute',
            backgroundColor: palette.purlue_2,
        }
        
        function CategoryFunction(i){
            setChangeCss(i+1)
            dispatch(categoryActions.saveCategory(
                {categoryId: dummyCategory[i].categoryId,
                categoryAnoInfo: dummyCategory[i].categoryAnoInfo,
                categoryComAnoInfo: dummyCategory[i].categoryComAnoInfo,
                categoryComInfo: dummyCategory[i].categoryComInfo,
                categoryName: dummyCategory[i].categoryName,
                cType: dummyCategory[i].cType,
                departId: dummyCategory[i].departId,
                userId: dummyCategory[i].userId}
            ))
            dispatch(reRenderingActions.saveSetMyPage(
                {
                    setMyPage: false
                }
            ))
            dispatch(reRenderingActions.saveSetAdminPage(
                {
                    setAdminPage: false
                }
            ))
        }
        const result = [];
        for (let i = 0; i < dummyCategory.length; i++) {
          result.push(
                <>  
                    {dummyCategory[i].categoryName === "공지사항" && (
                        <StyledLink to={`/community/` + departName + `/` + dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
                             <div key={i} style={changeCss === 1 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 1 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <CampaignIcon/>
                                    &nbsp; 
                                    {dummyCategory[i].categoryName}
                                    {console.log(changeCss)}
    
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory[i].categoryName === "질문" && (
                        <StyledLink to={`/community/`+ departName + `/` + dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
                            <div key={i} style={changeCss === 2 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 2 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <ContactSupportOutlinedIcon/>
                                    &nbsp; 
                                    {dummyCategory[i].categoryName}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory[i].categoryName === "자료실" && (
                        <StyledLink to={`/community/`+ departName + `/` + dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i) }}>
                            <div key={i} style={changeCss === 3 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 3 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <FolderOutlinedIcon/>
                                    &nbsp; 
                                    {dummyCategory[i].categoryName}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory[i].categoryName === "자유게시판" && (
                        <StyledLink to={`/community/`+ departName + `/` + dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i) }}>
                            <div key={i} style={changeCss === 4 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 4 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <ArticleOutlinedIcon/>
                                    &nbsp;
                                    {dummyCategory[i].categoryName}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory[i].categoryName === "수업실" && (
                        <StyledLink to={`/community/`+ departName + `/` + dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
                            <div key={i} style={changeCss === 5 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 5 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <VideocamOutlinedIcon/>
                                     &nbsp;
                                    {dummyCategory[i].categoryName}
                                </div>
                            </div>
                        </StyledLink>
                    )}
            </>
            
          );
        }
        return result;
      };
    
    return rendering();
    }

function Category(){
    const departName = useSelector(state => state.depart.departName)
    const [changeCss, setChangeCss] = useState(0);
    const noClickStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        width: "180px",
        height: "70px",
        margin: "15px 0px 0px 0px",
        boxShadow: "2px 2px 2px 2px grey"
        
    }
    const clickStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderRadius: "10px 15px 15px 10px",
        width: "200px",
        height: "110px",
        margin: "15px 0px 0px 0px",
        boxShadow: "3px 3px 3px grey",
        color: palette.blue_3,
       
    }
    const Bar = {
        width: "15px",
        height: "70px",
        position: 'absolute',
        // background: palette.grRed,
        backgroundColor: palette.gray_3,
        display: "flex", 
        justifyContent: "center",
        alignItems: "center"
    }

    const [isOpenModal6, setOpenModal6] = useState(false);
    const onClickToggleModal6 = useCallback(() => {
      setOpenModal6(!isOpenModal6);
      }, [isOpenModal6]);

    const handleModal6 = () => {
      setOpenModal6((prev) => {
        return !prev}
      );
    }

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", width: "210px", height: "700px"}}>
                {CategoryList(dummyCategory)}
                <StyledLink to={`/community/`+ departName + `/관리자페이지`} onClick={() => { setChangeCss(99999)}}>
                        <div style={noClickStyle}>
                            <div style={ Bar }></div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                <DateRangeOutlinedIcon/>
                                &nbsp;
                                예시용
                                &nbsp;  &nbsp;  &nbsp; 
                                <CloseIcon/>
                            </div>
                        </div>
                    </StyledLink>
                <div style={{position: "absolute", bottom: "50px"}}>
                    <StyledLink to={`/community/`+ departName + `/관리자페이지`} onClick={() => { setChangeCss(99999)}}>
                        <div style={noClickStyle}>
                            <div style={ Bar }></div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                <DateRangeOutlinedIcon/>
                                &nbsp;
                                관리자페이지
                            </div>
                        </div>
                    </StyledLink>
                    <div style={{backgroundColor: "white", width: "180px", height: "70px", margin: "15px 0 0 0", opacity: "0.6", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}} onClick={() => {handleModal6()}}>
                        <div style={Bar}><PlayArrowIcon/></div>
                        <AddCategoryDiv>카테고리 추가</AddCategoryDiv>
                    </div>

                </div>
            </div>
            {isOpenModal6 && (
                <Modal
                onClickToggleModal={onClickToggleModal6}
                width="1000px"
                height="800px"
                >
                <CategoryCreate handleModal6={handleModal6} />
                </Modal>
            )}
        </>
    );
}


const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: medium;
    &:focus, &:visited {
        text-decoration: none;
    }
    &:link {
        transition : 0.5s;
        text-decoration: none;
      }
      &:hover {
        color: ${palette.blue_2};
      }
`;

const AddCategoryDiv = styled.div`
    margin: 0 0 0 45px;
    font-weight: bold;
    font-size: 17px;
    &:hover{
    cursor: pointer;
    transition : 0.5s;
    color: ${palette.purlue_4};
    }
`

export default Category