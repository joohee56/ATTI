import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

interface CategoryType {
    category_id : Array<string>;
}

const dummyCategory = {
    category_id : ['싸피', '대전1반', '대전3반'],
}

function CategoryList(dummyCategory: CategoryType){
    const rendering = () => {
        const result = [];
        for (let i = 0; i < dummyCategory.category_id.length; i++) {
          result.push(<div key={i}>{dummyCategory.category_id[i] + " / "}</div>);
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
border: 10px;
border-radius: 5px;
`;
export default Category