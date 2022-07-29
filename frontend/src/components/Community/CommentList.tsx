function CommentList(){
    const commentStyle = {
        border: "solid",
        width: "950px",
        height: "100px",
    }
    return(
        <div style={commentStyle}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <button>프로필사진</button>
                        <p>이름</p>
                        <button>best!</button>
                    </div>
                    <div>
                        <p>댓글 내용입니다~~~</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div>
                        댓글 작성날짜
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div>
                            <button>답글</button>
                        </div>
                        <div>
                            <button>하트</button>
                        </div>
                        <div>
                            <button>쓰레기통</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommentList