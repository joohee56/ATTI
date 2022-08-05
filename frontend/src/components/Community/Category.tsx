import React, {PropsWithChildren, useState } from 'react';
import { NavLink, Route } from "react-router-dom";
import styled from 'styled-components';

import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import { palette } from "../../styles/palette";

interface CategoryType {
    category_id : Array<string>;
}

const dummyCategory = {
    category_id : ['공지사항', '질문', '자료실', '자유게시판', '수업실', '수업일정'],
}

function CategoryList(dummyCategory: CategoryType){
    
    const [changeCss, setChangeCss] = useState(0);
    const onChangeCss = (num: number) => (event: React.MouseEvent<Element, MouseEvent>) :void => {
        event.preventDefault();
        setChangeCss(num)
    }
    
    const rendering = () => {
        const noClickStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            
            width: "155px",
            height: "60px",
            margin: "15px 0px 0px 0px",
            boxShadow: "3px 3px 3px grey"
            
        }
        const clickStyle: React.CSSProperties = {
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
        const purpleBar: React.CSSProperties | any = {
            width: "15px",
            height: "60px",
            position: 'absolute',
            backgroundColor: palette.purlue_2,
        }
        const result = [];
      
        for (let i = 0; i < dummyCategory.category_id.length; i++) {
          result.push(
                <>
                    {dummyCategory.category_id[i] === "공지사항" && (
                        <StyledLink to="/community" onClick={onChangeCss(1)}>
                             <div key={i} style={changeCss === 1 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 1 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <CampaignIcon/>
                                    &nbsp; 
                                    {dummyCategory.category_id[i]}
    
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory.category_id[i] === "질문" && (
                        <StyledLink to="/community" onClick={onChangeCss(2)}>
                            <div key={i} style={changeCss === 2 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 2 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <ContactSupportOutlinedIcon/>
                                    &nbsp; 
                                    {dummyCategory.category_id[i]}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory.category_id[i] === "자료실" && (
                        <StyledLink to="/community" onClick={onChangeCss(3)}>
                            <div key={i} style={changeCss === 3 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 3 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <FolderOutlinedIcon/>
                                    &nbsp; 
                                    {dummyCategory.category_id[i]}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory.category_id[i] === "자유게시판" && (
                        <StyledLink to="/community" onClick={onChangeCss(4)}>
                            <div key={i} style={changeCss === 4 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 4 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <ArticleOutlinedIcon/>
                                    &nbsp;
                                    {dummyCategory.category_id[i]}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory.category_id[i] === "수업실" && (
                        <StyledLink to="/community" onClick={onChangeCss(5)}>
                            <div key={i} style={changeCss === 5 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 5 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <VideocamOutlinedIcon/>
                                     &nbsp;
                                    {dummyCategory.category_id[i]}
                                </div>
                            </div>
                        </StyledLink>
                    )}
                    {dummyCategory.category_id[i] === "수업일정" && (
                        <StyledLink to="/community" onClick={onChangeCss(6)}>
                            <div key={i} style={changeCss === 6 ? clickStyle : noClickStyle}>
                                <div style={changeCss === 6 ? null : purpleBar }></div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                                    <DateRangeOutlinedIcon/>
                                    &nbsp;
                                    {dummyCategory.category_id[i]}
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