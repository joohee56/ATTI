import React, { PropsWithChildren, useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import PostDetail from "./PostDetail";
import PostEditor from "./PostEditor";
import Modal from "../Modal";
import SearchBar from "./SearchBar";
import { ButtonBlueStyled } from "../ButtonBlue";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// interface Post{
//     post : Array<any>;
// }

// interface State{
//     state: string;
// }


function PostList() {
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
    ],
  };

  const postTitle = useSelector((state) => state.normalPost.post_title);
  const postContent = useSelector((state) => state.normalPost.post_content);
  const postUpdDate = useSelector((state) => state.normalPost.post_upd_date);

  dummyPost.post.push({
    post_title: postTitle,
    post_content: postContent,
    post_upd_date: postUpdDate,
  });

  const rendering = () => {
    const result = [];
    const postStyle = {
      border: "solid",
      borderRadius: "30px",
      width: "1500px",
      height: "90px",
      margin: "30px 0 0 50px",
      boxShadow: "3px 3px 3px grey"
    };

    for (let i = 0; i < dummyPost.post.length; i++) {
      result.push(
        <IndividualPost>
          <div key={i} style={postStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "10px 20px 0 "
              }}
            >
              <div style={{fontSize: "20px", fontWeight: "bold"}}>
                작성자: 이현태
              </div>
              {dummyPost.post[i]["post_upd_date"]}
            </div>
            <hr />

            <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
              <div style={{fontSize: "20px", fontWeight: "bold"}}>
                {dummyPost.post[i]["post_title"]}   
              </div>
              <div>
              <FavoriteBorderIcon/> 24
              &nbsp; &nbsp; &nbsp;
              <ChatBubbleOutlineIcon/> 20
              </div>
            
            </div>
          </div>
        </IndividualPost>

        
      );
    }
    return result;
  };
  return (
    <>
      <div id="괴물2">
        {rendering()}
      </div>
    </>
  );
}

function NormalPostFrame() {
  const [isOpenModal1, setOpenModal1] = useState(false);
  const onClickToggleModal1 = useCallback(() => {
    setOpenModal1(!isOpenModal1);
  }, [isOpenModal1]);

  const [isOpenModal2, setOpenModal2] = useState(false);
  const onClickToggleModal2 = useCallback(() => {
    setOpenModal2(!isOpenModal2);
  }, [isOpenModal2]);

  return (
    <>
      <PostContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title> 공지사항 or 질문 or 자유게시판 </Title>
          <div style={{ display: "flex", flexDirection: "row", margin: "0 140px 0 0" }}>
            <SearchBar />
            <ButtonBlueStyled onClick={onClickToggleModal1}>
              글쓰기
            </ButtonBlueStyled>
          </div>
        </div>
        <div onClick={onClickToggleModal2}>
          {PostList()}
        </div>
      </PostContainer>
      {isOpenModal2 && (
        <Modal
          onClickToggleModal={onClickToggleModal2}
          width="1100px"
          height="600px"
        >
          <PostDetail />
        </Modal>
      )}
      {isOpenModal1 && (
        <Modal
          onClickToggleModal={onClickToggleModal1}
          width="800px"
          height="680px"
        >
          <PostEditor />
        </Modal>
      )}
    </>
  );
}

const PostContainer = styled.div`
  width: 86vw;
  height: 85vh;
  border: 0.5px solid gray;
  border-radius: 20px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0 0 20px;
`;
const IndividualPost = styled.div`
&:hover{  
  cursor: pointer
 }
`

export default NormalPostFrame;
