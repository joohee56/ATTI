import {useSelector} from 'react-redux';
import styled from 'styled-components';

import CommentList from './CommentList';
import {ButtonStyled} from '../ButtonBlue';

function PostDetail(){
    const postTitle = useSelector(state => state.post_title)
    const postContent = useSelector(state => state.post_content)
    const postUpdDate = useSelector(state => state.post_upd_date)

    const detailStyle = {
        border: "solid",
        width: "1000px",
        height: "700px",
    }
    return(
        <div style={detailStyle}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                <div>
                    {postTitle}
                </div>
                <div style={{display: "flex"}}>
                    <div>
                        <button>댓글수</button>
                    </div>
                    <div>
                        <button>좋아요수</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "sapce-between"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <button>프로필 사진</button>
                    </div>
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
                    <div>
                        <button>수정</button>
                    </div>
                    <div>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            {postContent}
            <hr />
            <hr />
            <CommentList/>
            
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>익명댓글</p>
                    <button>토글버튼</button>
                </div>
                <div style={{display: "flex", fiexDierction: "row", justifyContent: "space-between", alignItems: "space-between"}}>
                    <div>
                        <CommentInput/>
                    </div>
                    <div>
                        <ButtonStyled>댓글 작성</ButtonStyled>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CommentInput = styled.input`
width: "800px";
height: "120px" 
`;
export default PostDetail