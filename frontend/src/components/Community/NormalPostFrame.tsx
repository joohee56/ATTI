import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Post{
    user_id : string;
    post_id : number;
    post_title : string;
    post_content : any;
    post_req_date : any;
    post_upd_date : any;
    post_ano_info : number;
    post_com_ban_info : number;
}

const dummyPost = {
    user_id : '이현태',
    post_id : 1,
    post_title : "아아아아아아아아아아",
    post_content : "에에에에에에에에에에에에에엥에에에",
    post_req_date : "2022-07-27 12:50",
    post_upd_date : "2022-07-27 01:00",
    post_ano_info : 0,
    post_com_ban_info : 0,
    
}
function NormalPostFrame(dummyPost: Post){
    return(
        <PostContainer>
            <PostTop>
                {dummyPost.user_id}
                {dummyPost.post_req_date}
            </PostTop>
            <PostMiddle>
                {dummyPost.post_title}
            </PostMiddle>
        </PostContainer>
    );
}

const PostContainer = styled.div`
width : 300px;
height: 120px;
border: 15px;
border-radius: 7px;
`;

const PostTop = styled.div`
display: flex;
align-items: space-between;
justify-content: space-between;
`;

const PostMiddle = styled.div`
font-weight: bold;
`;
export default NormalPostFrame