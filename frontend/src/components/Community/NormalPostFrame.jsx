import React, {PropsWithChildren } from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'

import PostEditor from './PostEditor'


// interface Post{
//     post : Array<any>;
// }

// interface State{
//     state: string;
// }

// const dummyPost = {
//     post: [
//         {
//             user_id : '이현태',
//             post_id : 1,
//             post_title : "아아아아아아아아아아",
//             post_content : "222222222222222222222222",
//             post_req_date : "2022-07-28 11:14",
//             post_upd_date : "2022-07-28 11:15",
//             post_ano_info : 0,
//             post_com_ban_info : 0,
//         },
//         {
//             user_id : '정진',
//             post_id : 2,
//             post_title : "오오오오오옹오옹오오오옹오",
//             post_content : "3333333333333333333333333333",
//             post_req_date : "2022-07-28 11:14",
//             post_upd_date : "2022-07-28 11:15",
//             post_ano_info : 0,
//             post_com_ban_info : 0,
//         },
//         {
//             user_id : '김연수',
//             post_id : 3,
//             post_title : "이이이잉이이이이이이이이이이이이이이",
//             post_content : "44444444444444444444444444444",
//             post_req_date : "2022-07-28 11:14",
//             post_upd_date : "2022-07-28 11:15",
//             post_ano_info : 0,
//             post_com_ban_info : 0,
//         }
//     ]
// }

// const postTitle = useSelector(state => state.post_title)
// const postContent = useSelector(state => state.post_content)
// const postUpdDate = useSelector(state => state.post_upd_date)

// dummyPost.post.push({
//     post_title : postTitle,
//     post_content: postContent,
//     post_upd_date: postUpdDate,
// })

function PostList(){

    const dummyPost = {
        post: [
            // {
            //     user_id : '이현태',
            //     post_id : 1,
            //     post_title : "아아아아아아아아아아",
            //     post_content : "222222222222222222222222",
            //     post_req_date : "2022-07-28 11:14",
            //     post_upd_date : "2022-07-28 11:15",
            //     post_ano_info : 0,
            //     post_com_ban_info : 0,
            // },
            // {
            //     user_id : '정진',
            //     post_id : 2,
            //     post_title : "오오오오오옹오옹오오오옹오",
            //     post_content : "3333333333333333333333333333",
            //     post_req_date : "2022-07-28 11:14",
            //     post_upd_date : "2022-07-28 11:15",
            //     post_ano_info : 0,
            //     post_com_ban_info : 0,
            // },
            // {
            //     user_id : '김연수',
            //     post_id : 3,
            //     post_title : "이이이잉이이이이이이이이이이이이이이",
            //     post_content : "44444444444444444444444444444",
            //     post_req_date : "2022-07-28 11:14",
            //     post_upd_date : "2022-07-28 11:15",
            //     post_ano_info : 0,
            //     post_com_ban_info : 0,
            // }
        ]
    }
    
    const postTitle = useSelector(state => state.post_title)
    const postContent = useSelector(state => state.post_content)
    const postUpdDate = useSelector(state => state.post_upd_date)

    dummyPost.post.push({
        post_title : postTitle,
        post_content: postContent,
        post_upd_date: postUpdDate,
    })

    const rendering = () => {
        const result = [];
        const postStyle = {
            border: "solid",
            width: "1000px",
            height: "120px",
            margin: "30px 0 0 50px",
        }
    

        for (let i = 0; i < dummyPost.post.length; i++) {
          result.push(<div key={i} style={postStyle}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "space-between"}}>
                <div>
                    {dummyPost.post[i]['post_content']}
                    {/* {postContent} */}
                </div>
                <div>
                    {dummyPost.post[i]['post_upd_date']}
                    {/* {postUpdDate} */}
                </div>
            </div>
                <hr/>
                <hr/>
            <div>
            {dummyPost.post[i]['post_title']}
            {/* {postTitle} */}
            </div>
        
            </div>

        )}
        return result;
      };
    
    return <div>{rendering()}</div>;
}

function NormalPostFrame(){
    return(
        <PostContainer>
           {PostList()}
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