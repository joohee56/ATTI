import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import CommentList from './CommentList';
import {ButtonBlueStyled} from '../ButtonBlue';

import { commentActions } from '../../store/community/index'

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
        border: "solid",
        width: "1000px",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
    return(
        <div style={detailStyle}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                <div>
                    {postTitle}
                </div>
                <div style={{display: "flex"}}>
                    <button>댓글수</button>
                    <button>좋아요수</button>
                </div>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <button>프로필 사진</button>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            사용자 이름
                        </div>
                        <div>
                            {postUpdDate}
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            <hr />
            <br />
            <div style={{border: "solid"}}>
                {postContent}
            </div>
            <hr />
            <br />
            <CommentList/>
            
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignContent: "flex-end"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>익명댓글</p>
                    <button>토글버튼</button>
                </div>
                <div style={{display: "flex", fiexDierction: "row", justifyContent: "space-between", alignItems: "flex-end", border: "solid", height: "100px"}}>
                    <CommentInput name='comment_content' onChange={getValue} value={comment.comment_content}/>
                    <ButtonBlueStyled onClick={commentHandler}>댓글 작성</ButtonBlueStyled>
                </div>
            </div>
        </div>
    );
}

const CommentInput = styled.input`
width: 900px;
height: 70px;   
`
;
export default PostDetail