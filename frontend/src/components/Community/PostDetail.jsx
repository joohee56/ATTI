import { useState, useEffect, useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { BACKEND_URL } from "../../constant";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UseSwitchesBasic from "../SwitchButton"

import apiAcc, {api} from '../../utils/api';
import { reRenderingActions } from '../../store/community/ReRendering';
import CommentList from './CommentList';
import {ButtonBlue} from '../ButtonStyled';
import InputWithLabel from '../InputWithLabel';
import { commentActions } from '../../store/community/Category'
import { palette } from '../../styles/palette';

import ReactHtmlParser from 'react-html-parser'

function PostDetail({postId, postLikeCount, postLike, onClickToggleModal2, onClickToggleModal3, setSinglePost}){
    const [single, setSingle] = useState([])
    const [comments, setComments] = useState([])
    const currentSetPost = useSelector(state => state.reRendering.setPost)
    const updateSetPost = !currentSetPost
    const { id } = useSelector(state => state.userInfo)

    useEffect(() => {
        // 개별 글 불러오는 것
        api.get(`/post/read/${postId}/${id}`
            ).then((res) => {
            console.log("개별 글 list : ", res.data)
            setSingle(res.data)
            setSinglePost(res.data)
            })
        // 댓글 list 불러오는 것
        api.get(`post/comment/read/${postId}/${id}`)
        .then((res) => {
            console.log("댓글들: ", res)
            setComments(res.data)
        })
       },[currentSetPost]);
    
    function modalEvent(){
        onClickToggleModal2()
        onClickToggleModal3()
    }

    const [comment, setComment] = useState({
        postId: postId,
        userId: "gusxo123",
        commentDeleteInfo: "",
        commentAnoInfo: false,
        commentContent: "",
        commentGroup: "",
        commentLevel: "",
        seq: ""
    })
    const getValue = e => {
            const {name,value} = e.target;
        
            setComment((prev) => ({
                ...prev,
                [name] : value,
            }));
        };
    const getAnoInfo = () => {
        console.log("익명여부 :", comment.commentAnoInfo)
        comment.commentAnoInfo = !comment.commentAnoInfo
        
    }

    const writeComment = useCallback(
        async (e) => {
        e.preventDefault();
        try {
            document.getElementById("commentInput").value=''

            await api
            .post("/post/comment/write",
                {
                    postId: comment.postId,
                    userId: comment.userId,
                    commentDeleteInfo: comment.commentDeleteInfo,
                    commentAnoInfo: comment.commentAnoInfo,
                    commentContent: comment.commentContent,
                    commentGroup: comment.commentGroup,
                    commentLevel: comment.commentLevel,
                    seq: comment.seq
                },
            )

            .then((res) => {
                console.log("response:", res);
                dispatch(reRenderingActions.saveSetPost(
                    {setPost: updateSetPost }
                ))
    
            });
        } catch (err) {
            console.log(err)
        }
        },
        [
        comment.commentId,
        comment.postId,
        comment.categoryId,
        comment.departId,
        comment.userId,
        comment.commentRegDate,
        comment.commentDeleteInfo,
        comment.commentAnoInfo,
        comment.commentContent,
        comment.commentGroup,
        comment.commentLevel,
        comment.seq
        ]
    );
    
    const dispatch = useDispatch()

    const deletePost = () => {

        api.delete(`/post/delete/${postId}`,
        )
        .then((res) => {
            console.log("response:", res);
            dispatch(reRenderingActions.saveSetPost(
                {setPost: updateSetPost }
            ))
        });
    }
    
    function DeleteFunction(){
        onClickToggleModal2();
        deletePost();
        }


///////////////////////////////////////////////////////////////////
    const detailStyle = {
        width: "1000px",
        height: "700px",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
    }
    const hrStyle = {
        height: "0.1px",
        backgroundColor: "gray",
        width: "95%",
        
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
    return(
        <div style={detailStyle}>
            <div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                    <div style={{width: "750px", margin: "10px 0 0 40px", fontWeight: "bold"}}>
                        {single.postTitle}
                    </div>
                    <div style={{display: "flex", margin: "0 35px 0 0"}}>
                        <ChatBubbleOutlineIcon style={{margin: "10px 5px 0 0"}}/>
                        <span style={{margin: "10px 0 0 0"}}>24</span>
                        &nbsp; &nbsp; 
                        <Checkbox  onClick={() => {postLike()}} style={{width: "24px", height: "45px"}}icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                        <span style={{margin: "10px 0 0 0"}}>{postLikeCount}</span>
                    </div>
                </div>
                <hr style={hrStyle} />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between", padding: "0 20px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Avatar sx={{ width: 50, height: 50 }}>BS</Avatar>
                    <div style={{display: "flex", flexDirection: "column", margin: "0 0 0 20px"}}>
                        <div style={{margin: "0 0 10px 0"}}>
                            {single.userId}
                        </div>
                        <div>
                            <span>
                               작성: {timeForToday(single.postRegDate)} /  
                            </span>
                            <span>
                                수정: {timeForToday(single.postUpdDate)}
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row" , margin: "0 10px 0 0"}}>
                    <CustomEditOutlinedIcon onClick={modalEvent}/>
                    &nbsp; &nbsp;
                    <CustomDeleteIcon onClick={()=> DeleteFunction()}/>
                </div>
            </div>
            <br />
            <ContentDiv>
                {ReactHtmlParser(single.postContent)}
                
            </ContentDiv>
            <hr style={{ height: "0.1px", backgroundColor: "gray", width: "95%", marginBottom: "0"}} />
            <br />
            <CommentList postId={postId} comments={comments}/>
            
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignContent: "flex-end", margin: "10px 0 0 0"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <SwitchDiv>
                        <span style={{textAlign: "center" ,fontSize: "15px", marginBottom: "5px"}}>
                            익명댓글 
                        </span>
                        <span onClick={getAnoInfo}>
                            {UseSwitchesBasic()}
                        </span>
                    </SwitchDiv>
                </div>
                <div style={{display: "flex", fiexDierction: "row", alignItems: "center" }}>
                    {/* <CustomInputWithLabel name='commentContent' placeholder='댓글을 작성해 주세요' onChange={getValue} value={comment.commentContent}/> */}
                    <CommentInput id="commentInput" name='commentContent' onChange={getValue} value={comment.comment_content}/>
                    <CustomButtonBlue onClick={writeComment}>댓글 작성</CustomButtonBlue>
                </div>
            </div>
        </div>
    );
}


const CommentInput = styled.input`
width: 800px;
height: 60px; 
margin: 0 20px 0 30px;
font-size: 18px;
background-color: ${palette.gray_1};
border: none;  
`;
const CustomInputWithLabel = styled(InputWithLabel)`
width: 800px;
height: 60px;
margin: 0 20px 0 30px;
font-size: 18px;
background-color: ${palette.gray_1};
border: none;
`
const CustomEditOutlinedIcon = styled(EditOutlinedIcon)`
&:hover{
    cursor: pointer;
}
`;

const CustomDeleteIcon = styled(DeleteIcon)`
&:hover{
    cursor: pointer;
}
`;

const CustomButtonBlue = styled(ButtonBlue)`
width: 100px;
height: 50px;
`;

const SwitchDiv = styled.div`
display: flex; 
flex-direction: row; 
align-items: center;
justify-content: center;
font-weight: bold;
margin: 0 0 0 30px;
`;

const ContentDiv = styled.div`
height: 170px;
margin: 0 0 0 25px;
overflow: auto;
&::-webkit-scrollbar {
    width: 6px;
    background: ${palette.white};
  }
&::-webkit-scrollbar-thumb {
border-radius: 10px;
background: ${palette.main_grBlue};
}
`;
;export default PostDetail