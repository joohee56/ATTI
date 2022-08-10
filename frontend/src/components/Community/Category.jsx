import React, {PropsWithChildren, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import { categoryActions } from '../../store/community';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import { palette } from "../../styles/palette";



const dummyCategory = [
    {
        categoryId: 1,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '공지사항',
        cType: '공지사항',
        departId: null,
        userId: null
    },
    {
        categoryId: 2,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '질문',
        cType: '자유게시판',
        departId: null,
        userId: null
    },
    {
        categoryId: 3,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '자료실',
        cType: '자료실',
        departId: null,
        userId: null
    },
    {
        categoryId: 4,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '자유게시판',
        cType: '자유게시판',
        departId: null,
        userId: null
    },
    {
        categoryId: 5,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '수업실',
        cType: '시간표',
        departId: null,
        userId: null
    },
    {
        categoryId: 2,
        categpryAnoInfo: false,
        categoryComAnoInfo: false,
        categoryComInfo: false,
        categoryName: '수업일정',
        cType: '일정',
        departId: null,
        userId: null
    }
]

function CategoryList(dummyCategory){
    
    const dispatch = useDispatch()

    const [changeCss, setChangeCss] = useState(0);
   
    // function categoryEvent () {
    //     onChangeCss(num)
    //     dispatch(saveCategory(
    //         {categoryId: }
    //     ))
    // }
    const rendering = () => {
        const noClickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            
            width: "155px",
            height: "60px",
            margin: "15px 0px 0px 0px",
            boxShadow: "3px 3px 3px grey"
            
        }
        const clickStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderRadius: "10px 15px 15px 10px",
            width: "180px",
            height: "100px",
            margin: "15px 0px 0px 0px",
            boxShadow: "3px 3px 3px grey",
            color: palette.blue_3
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
        }
        const result = [];
      
        for (let i = 0; i < dummyCategory.length; i++) {
          result.push(
                <>  
                    {dummyCategory[i].categoryName === "공지사항" && (
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
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
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
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
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i) }}>
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
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i) }}>
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
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
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
                    {dummyCategory[i].categoryName === "수업일정" && (
                        <StyledLink to={`/community/`+dummyCategory[i].categoryName} onClick={() => { CategoryFunction(i)}}>
                            <div key={i} style={changeCss === 6 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 6 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <DateRangeOutlinedIcon/>
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
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            {CategoryList(dummyCategory)}
        </div>
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

export default Category