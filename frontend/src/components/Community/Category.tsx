import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

interface CategoryType {
    category_id : Array<string>;
}

const dummyCategory = {
    category_id : ['공지사항', '질문', '자료실', '자유게시판', '수업실', '수업일정'],
}

function CategoryList(dummyCategory: CategoryType){
    const rendering = () => {
        const noClickStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            border: "1px solid",
            borderRadius: "0 15px 15px 0",
            width: "180px",
            height: "60px",
            margin: "15px 0 0 40px",
            boxShadow: "3px 3px 3px grey"
            
        }
        const clickStyle: React.CSSProperties = {
            border: "solid",
            width: "150px",
            height: "60px",
        }
        const result = [];
        for (let i = 0; i < dummyCategory.category_id.length; i++) {
          result.push(
          <div key={i} style={noClickStyle}>
            <div style={{width: "15px", height: "60px", backgroundColor: "black"}}></div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 0 0 30px"}}>
                {dummyCategory.category_id[i] === "공지사항" && (
                    <CampaignIcon/>
                )}
                {dummyCategory.category_id[i] === "질문" && (
                    <ContactSupportOutlinedIcon/>
                )}
                {dummyCategory.category_id[i] === "자료실" && (
                    <FolderOutlinedIcon/>
                )}
                {dummyCategory.category_id[i] === "자유게시판" && (
                    <ArticleOutlinedIcon/>
                )}
                {dummyCategory.category_id[i] === "수업실" && (
                    <VideocamOutlinedIcon/>
                )}
                {dummyCategory.category_id[i] === "수업일정" && (
                    <DateRangeOutlinedIcon/>
                )}
                &nbsp; &nbsp;
                {dummyCategory.category_id[i]}

            </div>
          </div>);
        }
        return result;
      };
    
    return <div>{rendering()}</div>;
}

function Category(){
    return(
        <div>
            {CategoryList(dummyCategory)}
        </div>
    );
}

export default Category