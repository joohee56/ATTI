import { flexbox } from '@mui/system';
import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';

// 한 가지 post 로만 test
// interface Post{
//     user_id : string;
//     post_id : number;
//     post_title : string;
//     post_content : any;
//     post_req_date : any;
//     post_upd_date : any;
//     post_ano_info : number;
//     post_com_ban_info : number;
// }

// const dummyPost = {
//     user_id : '이현태',
//     post_id : 1,
//     post_title : "아아아아아아아아아아",
//     post_content : "에에에에에에에에에에에에에엥에에에",
//     post_req_date : "2022-07-27 12:50",
//     post_upd_date : "2022-07-27 01:00",
//     post_ano_info : 0,
//     post_com_ban_info : 0,
    
// }

interface Post{
    post : Array<any>;
}

const dummyPost = {
    post: [
        {
            user_id : '이현태',
            post_id : 1,
            post_title : "아아아아아아아아아아",
            post_content : "222222222222222222222222",
            post_req_date : "2022-07-28 11:14",
            post_upd_date : "2022-07-28 11:15",
            post_ano_info : 0,
            post_com_ban_info : 0,
        },
        {
            user_id : '정진',
            post_id : 2,
            post_title : "오오오오오옹오옹오오오옹오",
            post_content : "3333333333333333333333333333",
            post_req_date : "2022-07-28 11:14",
            post_upd_date : "2022-07-28 11:15",
            post_ano_info : 0,
            post_com_ban_info : 0,
        },
        {
            user_id : '김연수',
            post_id : 3,
            post_title : "이이이잉이이이이이이이이이이이이이이",
            post_content : "44444444444444444444444444444",
            post_req_date : "2022-07-28 11:14",
            post_upd_date : "2022-07-28 11:15",
            post_ano_info : 0,
            post_com_ban_info : 0,
        }
    ]
}

function PostList(dummyPost: Post){
    const rendering = () => {
        const result = [];
        const postStyle = {
            border: "solid",
            width: "1000px",
            height: "150px",
            margin: "30px 0 0 50px",
        }
    

        for (let i = 0; i < dummyPost.post.length; i++) {
          result.push(<div key={i} style={postStyle}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "space-between"}}>
                <div>
                    {dummyPost.post[i]['user_id']}
                </div>
                <div>
                    {dummyPost.post[i]['post_upd_date']}
                </div>
            </div>
                <hr/>
                <hr/>
            <div>
            {dummyPost.post[i]['post_title']}</div>
            </div>

        )}
        return result;
      };
    
    return <div>{rendering()}</div>;
}

function NormalPostFrame(){
    return(
        <PostContainer>
           {PostList(dummyPost)}
        </PostContainer>
    );
}

const PostContainer = styled.div`
width : 85vw;
height: 85vh;
border: solid;
border-radius: 7px;
`;

// const PostTop = styled.div`
// display: flex;
// align-items: space-between;
// justify-content: space-between;
// `;

// const PostMiddle = styled.div`
// font-weight: bold;
// `;
export default NormalPostFrame