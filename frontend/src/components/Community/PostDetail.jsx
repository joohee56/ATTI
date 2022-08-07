import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UseSwitchesBasic from "../SwitchButton"

import CommentList from './CommentList';
import {ButtonBlue} from '../ButtonStyled';
import InputWithLabel from '../InputWithLabel';
import { commentActions } from '../../store/community/index'
import { palette } from '../../styles/palette';

import ReactHtmlParser from 'react-html-parser'

function PostDetail(){
    const postTitle = useSelector(state => state.normalPost.post_title)
    const postContent = useSelector(state => state.normalPost.post_content)
    const postUpdDate = useSelector(state => state.normalPost.post_upd_date)


    const [comment, setComment] = useState({
        comment_content: "",
    })
    const getValue = e => {
        const {name,value} = e.target;
       
        setComment((prev) => ({
            ...prev,
            [name] : value,
        }));
    };

    const dispatch = useDispatch();
    const commentHandler = (event) => {
        event.preventDefault();
        dispatch(commentActions.saveComment({comment_content: comment.comment_content}))
        setComment({comment_content: ""})
    }

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
        width: "95%"
    }

    return(
        <div style={detailStyle}>
            <div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                    <div style={{margin: "10px 0 0 40px", fontWeight: "bold"}}>
                        제목이 들어갑니다.
                    </div>
                    <div style={{display: "flex", margin: "0 35px 0 0"}}>
                        <ChatBubbleOutlineIcon style={{margin: "10px 5px 0 0"}}/>
                        <span style={{margin: "10px 0 0 0"}}>숫자</span>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                        <span style={{margin: "10px 0 0 0"}}>숫자</span>
                    </div>
                </div>
                <hr style={hrStyle} />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between", padding: "0 20px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Avatar sx={{ width: 50, height: 50 }}>BS</Avatar>
                    <div style={{display: "flex", flexDirection: "column", margin: "0 0 0 20px"}}>
                        <div style={{margin: "0 0 10px 0"}}>
                            사용자 이름
                        </div>
                        <div>
                            postUpdDate가 나올 예정
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row" , margin: "0 10px 0 0"}}>
                    <CustomEditOutlinedIcon/>
                    &nbsp; &nbsp;
                    <CustomDeleteIcon/>
                </div>
            </div>
            <br />
            <div style={{margin: "0 0 0 25px", overflow: "auto"}}>
                {/* {ReactHtmlParser(postContent)} */}
                postContent가 들어갑니다. 이렇게 많은 것들이 들어갈 수 잇습니다.
                <br />
                <br />
                많이많이
                아주 많이
                <br />
                sdfsfgeqwrwt
                <br />
                gdsgwerqet
                <br />
                brfsfdsf
                <br />  
            </div>
            <hr style={hrStyle} />
            <br />
            <CommentList/>
            
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignContent: "flex-end", margin: "210px 0 0 0"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <SwitchDiv>
                        <span style={{textAlign: "center" ,fontSize: "15px", marginBottom: "5px"}}>
                            익명댓글 
                        </span>
                        {UseSwitchesBasic()}
                    </SwitchDiv>
                </div>
                <div style={{display: "flex", fiexDierction: "row", alignItems: "center" }}>
                    <CustomInputWithLabel name='comment_content' placeholder='댓글을 작성해 주세요' onChange={getValue} value={comment.comment_content}/>
                    {/* <CommentInput name='comment_content' onChange={getValue} value={comment.comment_content}/> */}
                    <CustomButtonBlue onClick={commentHandler}>댓글 작성</CustomButtonBlue>
                </div>
            </div>
        </div>
    );
}


// const CommentInput = styled.input`
// width: 900px;
// height: 70px;   
// `;
const CustomInputWithLabel = styled(InputWithLabel)`
width: 800px;
height: 60px;
margin: 0 20px 0 30px;
font-size: 18px;
background-color: ${palette.gray_1}
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
;export default PostDetail