import React, { PropsWithChildren, useState, useCallback , Component, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import axios from 'axios';


import { BACKEND_URL } from "../../constant";
import PostDetail from "./PostDetail";
import PostEditor from "./PostEditor";
import Modal from "../Modal";
import SearchBar from "./SearchBar";
import { ButtonBlue } from "../ButtonStyled";
import { palette } from "../../styles/palette";
import Pagination from "./pagenation";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';



function PostList({handleModal2, limit, page, getLength, getSinglePost}) {
  const [post,setPost] = useState([])
  useEffect(() => {
    async function getPosts(){
      axios.get(
        BACKEND_URL + "/post",
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        console.log(res.data)
        setPost(res.data)
        getLength(res.data.length)
      })
    }
    getPosts();
  },[]);
  return (
    <>
      <Rendering post={post} handleModal2={handleModal2} limit={limit} page={page} getSinglePost={getSinglePost} />
    </>
  );
  
};

  // const postTitle = useSelector((state) => state.normalPost_title);
  // const postContent = useSelector((state) => state.normalPost_content);
  // const postUpdDate = useSelector((state) => state.normalPost_upd_date);

  // post.push({
  //   post_title: postTitle,
  //   post_content: postContent,
  //   post_upd_date: postUpdDate,
  // });

const Rendering = ({ post, handleModal2, limit, page, getSinglePost }) => {
  
  // const result = post.filter(single => single.postId === 2)
  // console.log(result[0].postContent)
  const Single = useEffect(() => {
       async function singlePost(){
         const postId = 13
         axios.get(
           BACKEND_URL + `/post/read/${postId}`,
           {
             headers: {
               "Content-type": "application/json",
             },
           }
         ).then((res) => {
           console.log(res.data)
           getSinglePost(res.data)
         })
       }
       singlePost();
      },[]);
  
  const offset = (page - 1) * limit;
  const postStyle = {
    borderRadius: "30px",
    backgroundColor: palette.gray_1,
    width: "1150px",
    height: "90px",
    margin: "15px 0 0 50px",
    boxShadow: "2px 2px 2px grey"
  };
  return (
    <>
      {post.slice(offset, offset + limit).map((e, i) => (
        // <div key={i}>{post[e].user_id}</div>
      <IndividualPost key={i}>
        {console.log(e)}
        {console.log('-----')}
        <div style={postStyle} onClick={handleModal2}>
             <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "10px 20px 0 "
              }}
            >
              <UserIdDiv>
                작성자: {e.user}
              </UserIdDiv>
              {e.postRegDate}
            </div>
            <hr style={{width: "95%"}} />

            <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
              <div style={{fontSize: "20px", fontWeight: "bold"}}>
                {e.postTitle}   
              </div>
              <div>
              <FavoriteBorderIcon/> 24
              &nbsp; &nbsp; &nbsp;
              <ChatBubbleOutlineIcon/> 20
              </div>
            
            </div>
            
          </div>
      </IndividualPost>
      ))}
    </>
    )
  };
function NormalPostFrame() {

  const [isOpenModal2, setOpenModal2] = useState(false);
  const onClickToggleModal2 = useCallback(() => {
    setOpenModal2(!isOpenModal2);
    }, [isOpenModal2]);
    
  const handleModal2 = () => {
    setOpenModal2((prev) => {
      return !prev
    }
    );
  }

  const [isOpenModal1, setOpenModal1] = useState(false);
  const onClickToggleModal1 = useCallback(() => {
    setOpenModal1(!isOpenModal1);
  }, [isOpenModal1]);

  const [length,setLength] = useState([])
  const getLength = (length) => {
    setLength(length)
  }
  const [singlePost, setSinglePost] = useState([])
  const getSinglePost = (singlePost) => {
    setSinglePost(singlePost)
  }

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  

  return (
    <>
      <PostContainer>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title> 공지사항 or 질문 or 자유게시판 </Title>
            <div style={{ display: "flex", flexDirection: "row",  alignItems: "center", margin: "20px 140px 0 0" }}>
              <SearchBar />
              <WriteButton onClick={onClickToggleModal1}>
                글쓰기
              </WriteButton>
            </div>
          </div>
          <div>
            <PostList handleModal2={handleModal2} limit={limit} page={page} getLength={getLength} getSinglePost={getSinglePost} />
          </div>
        </div>
        <StickyFooter>
        <Pagination
          total={length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </StickyFooter>
      </PostContainer>
      
      {isOpenModal2 && (
        <Modal
          onClickToggleModal={onClickToggleModal2}
          width="1000px"
          height="680px"
        >
          <PostDetail />
        </Modal>
      )}
      {isOpenModal1 && (
        <Modal
          onClickToggleModal={onClickToggleModal1}
          width="800px"
          height="650px"
        >
          <PostEditor />
        </Modal>
      )}
    </>
  );
}

const UserIdDiv = styled.div`
font-size: 20px;
font-weight: bold;
background: ${palette.main_grBlue};
color: transparent;
-webkit-background-clip: text;
`;
const PostContainer = styled.div`
  width: 1300px;
  height: 671px;
  margin: 15px 0;
  border-radius: 20px;
  background-color: white;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

const StickyFooter = styled.footer`
position: fixed; 
bottom: 0; 
width: 83%; 
`

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0 0 40px;
`;
const IndividualPost = styled.div`
&:hover{  
  cursor: pointer
 }
`
const WriteButton = styled(ButtonBlue)`
width: 110px;
height: 50px;
padding: 0;
border-radius: 10px;
`

export default NormalPostFrame;
