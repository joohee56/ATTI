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

import { reRenderingActions } from '../../store/community/ReRendering';
import CommentList from './CommentList';
import {ButtonBlue} from '../ButtonStyled';
import InputWithLabel from '../InputWithLabel';
import { commentActions } from '../../store/community/Category'
import { palette } from '../../styles/palette';

import ReactHtmlParser from 'react-html-parser'

function PostDetail({postId, onClickToggleModal2, onClickToggleModal3, setSinglePost}){
    const [single, setSingle] = useState([])
    useEffect(() => {
        async function singlePost(){
          axios.get(
            BACKEND_URL + `/post/read/${postId}`,
            {
              headers: {
                "Content-type": "application/json",
              },
            }
          ).then((res) => {
            console.log("개별 글 list : ", res.data)
            setSingle(res.data)
            setSinglePost(res.data)
          })
        }
        singlePost();
       },[]);
    
    function modalEvent(){
        onClickToggleModal2()
        onClickToggleModal3()
    }
    // const categoryId = useSelector(state => state.category.categoryId)
    // const departId = useSelector(state => state.depart.departId)
    const [comment, setComment] = useState({
        commentId: "",
        postId: "",
        categoryId: "",
        departId: "",
        userId: "",
        commentRegDate: "",
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
    const getAnoInfoNum = () => {
        if (comment.commentAnoInfo){
            return 1
        } 
        else{
            return 0
        }
    }
    const writeComment = useCallback(
        async (e) => {
        e.preventDefault();
        try {
            document.getElementById("commentInput").value=''
            await axios
            .post(
                BACKEND_URL + "/post/comment/write",
                {
                    commentId: comment.commentId,
                    postId: comment.postId,
                    categoryId: comment.categoryId,
                    departId: comment.departId,
                    userId: comment.userId,
                    commentRegDate: comment.commentRegDate,
                    commentDeleteInfo: comment.commentDeleteInfo,
                    commentAnoInfo: getAnoInfoNum(),
                    commentContent: comment.commentContent,
                    commentGroup: comment.commentGroup,
                    commentLevel: comment.commentLevel,
                    seq: comment.seq
                },
                {
                headers: {
                    "Content-type": "application/json",
                },
                }
            )
            .then((res) => {
                console.log("response:", res);
                dispatch(reRenderingActions.saveReRendering(
                    {cider: updateCider }
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
        getAnoInfoNum(),
        comment.commentContent,
        comment.commentGroup,
        comment.commentLevel,
        comment.seq
        ]
    );
    
    const dispatch = useDispatch()
    const currentCider = useSelector(state => state.reRendering.cider)
    const updateCider = !currentCider

    const deletePost = () => {
        axios.delete(
                BACKEND_URL + `/post/delete/${single.postId}`,
                {
                headers: {
                    "Content-type": "application/json",
                },
                }
            )
            .then((res) => {
                console.log("response:", res);
                dispatch(reRenderingActions.saveReRendering(
                    {cider: updateCider }
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
                        <Checkbox style={{width: "24px", height: "45px"}}icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                        <span style={{margin: "10px 0 0 0"}}>22</span>
                    </div>
                </div>
                <hr style={hrStyle} />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between", padding: "0 20px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Avatar sx={{ width: 50, height: 50 }}>BS</Avatar>
                    <div style={{display: "flex", flexDirection: "column", margin: "0 0 0 20px"}}>
                        <div style={{margin: "0 0 10px 0"}}>
                            사용자 이름 이 나와야함...아직 데이터가 없어서 못 나옴
                        </div>
                        <div>
                            <span>
                               작성: {single.postRegDate} /  
                            </span>
                            <span>
                                {single.postUpdDate}
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
            <CommentList/>
            
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