import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

interface CategoryType {
    category_id : Array<string>;
}

const dummyCategory = {
    category_id : ['공지사항', '자유게시판', 'QnA'],
}

function CategoryList(dummyCategory: CategoryType){
    const rendering = () => {
        const noClickStyle = {
            border: "solid",
            width: "100px",
            height: "30px",
        }
        const clickStyle = {
            border: "solid",
            width: "150px",
            height: "60px",
        }
        const result = [];
        for (let i = 0; i < dummyCategory.category_id.length; i++) {
          result.push(<div key={i} style={noClickStyle}>{dummyCategory.category_id[i]}</div>);
        }
        return result;
      };
    
    return <div>{rendering()}</div>;
}

function Category(){
    return(
        <CategoryContainer>
            {CategoryList(dummyCategory)}
        </CategoryContainer>
    );
}

const CategoryContainer = styled.div`
width: 150px;
height: 400px;
border: solid;
border-radius: 5px;
`;
export default Category