import React, { PropsWithChildren, useState, useCallback , Component, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import axios from 'axios';

import { api } from "../../utils/api";
import { BACKEND_URL } from "../../constant";
import PostUpdate  from "./PostUpdate";
import PostDetail from "./PostDetail";
import PostEditor from "./PostEditor";
import DepartCreate from "./DepartCreate";
import DepartJoin from "./DepartJoin";
import Modal from "../Modal";
import SearchBar from "./SearchBar";
import { ButtonBlue } from "../ButtonStyled";
import { palette } from "../../styles/palette";
import Pagination from "./pagenation";
import MyPageComponent from "../MyPage/MyPageComponent";
import AdminPageWrapper from "./adminpage/AdminPageWrapper";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';



function PostList({handleModal2, limit, page, getLength,  length, getPostId}) {
  
  const categoryId = useSelector(state => state.category.categoryId)
  console.log('카테고리, 너의 아이디는? ' , categoryId)
  const departId = useSelector(state => state.depart.departId)
  console.log('채널, 너의 아이디는? ' , departId)
  const { id } = useSelector(state => state.userInfo)
  
  async function getPosts(){
    api.get(`/depart/${departId}/category/${categoryId}/user/${id}`
    ).then((res) => {
      console.log("결과: ", res)
      setPost(res.data)
      getLength(res.data.length)
    })
  }
  
  const currentCider = useSelector(state => state.reRendering.cider)
  const [post,setPost] = useState([])
  
  useEffect(() => {
    console.log('확인중입니다')
    getPosts();
  },[currentCider, categoryId]);
  return (
    <>
      <Rendering post={post} handleModal2={handleModal2} length={length} limit={limit} page={page} getPostId={getPostId} />
    </>
  );
  
};


const Rendering = ({ post, handleModal2, limit, length, page, getPostId}) => {

  const offset = (page - 1) * limit;
  const postStyle = {
    borderRadius: "30px",
    backgroundColor: palette.gray_1,
    width: "90%",
    height: "110px",
    margin: "30px 0 0 50px",
    boxShadow: "2px 2px 2px grey"
  };
 function TwoFunctions(id){
  handleModal2()
  getPostId(id)
 }

 function timeForToday(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
      return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}


  if(length === 0){
    return (
      <div></div>
    )
  }
  else{
    return (
      <>
        {post.slice(offset, offset + limit).map((e, i) => (
        <IndividualPost key={i}>
          {console.log(e)}
          {console.log('-----')}
          {console.log(e.postId)}
          {/* {console.log('postId :',  postId)} */}
          <div style={postStyle} onClick={() => {TwoFunctions(e.postId)}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  padding: "10px 20px 0 "
                }}
              >
                <UserIdDiv>
                  작성자: {e.userId}
                </UserIdDiv>
                {timeForToday(e.postRegDate)}
              </div>
              <hr style={{width: "95%"}} />
  
              <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", padding: "7px 20px" }}>
                <div style={{width: "1200px", fontSize: "20px", fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
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

   }
  };
function NormalPostFrame() {

  const [isOpenModal1, setOpenModal1] = useState(false);
  const onClickToggleModal1 = useCallback(() => {
    setOpenModal1(!isOpenModal1);
  }, [isOpenModal1]);
  const handleModal1 = () => {
    setOpenModal1((prev) => {
      return !prev
    }
    );
  }
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
  const [isOpenModal3, setOpenModal3] = useState(false);
  const onClickToggleModal3 = useCallback(() => {
    setOpenModal3(!isOpenModal3);
  }, [isOpenModal3]);
  const handleModal3 = () => {
    setOpenModal3((prev) => {
      return !prev
    }
    );
  }

  const [length,setLength] = useState([])
  const getLength = (length) => {
    setLength(length)
  }
  const [postId, setPostId] = useState(null)
  const getPostId = (postId) => {
    setPostId(postId)
  }

   // 글 좋아요 부분
   const [postLikeCount, setPostLikeCount] = useState([])
   const postLike = () => {
       console.log(postId)
       api.get(`/post/likeBtn/${postId}/gusxosmsdy`
       )
       .then((res) => {
           console.log("response:", res);
           setPostLikeCount(res.data)
       });
   }
   
   const currentCider = useSelector(state => state.reRendering.cider)
   useEffect(() => {
       postLike()
   }, [currentCider]);


  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  
  const [singlePost, setSinglePost] = useState([])

  const categoryName = useSelector(state => state.category.categoryName)
  const myPage = useSelector(state => state.reRendering.setMyPage)
  const adminPage = useSelector(state => state.reRendering.setAdminPage)
  if(myPage === true){
    return(
      <>
        <PostContainer>
          <MyPageComponent/>
        </PostContainer>
      </>
    )
  }
  else if(adminPage === true) {
    return(
      <>
        <PostContainer>
          <AdminPageWrapper/>
        </PostContainer>
      </>
    )
  }
  else{
    return (
      <>
        <PostContainer>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title> {categoryName} </Title>
              <div style={{ display: "flex", flexDirection: "row",  alignItems: "center", margin: "20px 140px 0 0" }}>
                <SearchBar />
                <WriteButton onClick={onClickToggleModal1}>
                  글쓰기
                </WriteButton>
              </div>
            </div>
            <div>
              <PostList handleModal2={handleModal2} limit={limit} page={page} length={length} getLength={getLength} getPostId={getPostId} />
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
        {isOpenModal1 && (
          <Modal
            onClickToggleModal={onClickToggleModal1}
            width="65vw"
            height="800px"
          >
            <PostEditor handleModal1={handleModal1} />
          </Modal>
        )}
        </PostContainer>
  
        {isOpenModal2 && (
          <Modal
            onClickToggleModal={onClickToggleModal2}
            width="1000px"
            height="680px"
          >
            <PostDetail postId={postId} postLike={postLike} postLikeCount={postLikeCount} onClickToggleModal2={onClickToggleModal2} onClickToggleModal3={onClickToggleModal3} setSinglePost={setSinglePost} />
          </Modal>
        )}
        {isOpenModal3 && (
          <Modal
            onClickToggleModal={onClickToggleModal3}
            width="1000px"
            height="680px"
          >
            <PostUpdate singlePost={singlePost} handleModal3={handleModal3} />
          </Modal>
        )}
        {console.log('postId : ' , postId)}
      </>
    );

  }
}

const UserIdDiv = styled.div`
font-size: 20px;
font-weight: bold;
background: ${palette.main_grBlue};
color: transparent;
-webkit-background-clip: text;
`;
const PostContainer = styled.div`
  width: 88vw;
  height: 863px;
  margin: 25px 20px 25px 0;
  border-radius: 20px;
  background-color: white;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

// pagenation 버튼 위치 조작하는 곳
const StickyFooter = styled.footer`
/* position: fixed; 
bottom: 0; 
width: 83%;  */
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
