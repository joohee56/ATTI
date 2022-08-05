import {useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import BestChip from './BestChip';
function CommentList(){
    const commentStyle = {
        
        width: "950px",
        height: "100px",
        margin: "-20px 0 0 25px"
    }
     const hrStyle = {
        height: "0.1px",
        backgroundColor: "gray",
        width: "100%",
        margin: "-10px 0 0 0"
    }
    // const commentContent = useSelector(state => state.comment.comment_content)
    return(
        <div style={commentStyle}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Avatar sx={{ width: 30, height: 30 }} style={{margin: "11px 10px 0 11px"}}>JJ</Avatar>
                        <p>이름</p>
                        <BestChip/>
                    </div>
                    <div style={{margin: "0 0 0 15px"}}>
                        <p>ddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", margin: "10px 0 0 0"}}>
                    <div>
                        2022-07-14 / 16:15
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <span style={{margin: "10px 0 0 0"}}>답글</span>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                        <span style={{margin: "10px 0 0 -10px"}}>좋아yo</span>
                        <CustomDeleteIcon/>
                    </div>
                </div>

            </div>
            <hr style={hrStyle}/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Avatar sx={{ width: 30, height: 30 }} style={{margin: "11px 10px 0 11px"}}>JJ</Avatar>
                        <p>이름</p>
                        <BestChip/>
                    </div>
                    <div style={{margin: "0 0 0 15px"}}>
                        <p>ddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", margin: "10px 0 0 0"}}>
                    <div>
                        2022-07-14 / 16:15
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <span style={{margin: "10px 0 0 0"}}>답글</span>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                        <span style={{margin: "10px 0 0 -10px"}}>좋아yo</span>
                        <CustomDeleteIcon/>
                    </div>
                </div>

            </div>
            <hr style={hrStyle}/>
        </div>
    )
}

const CustomDeleteIcon = styled(DeleteIcon)`
margin: 10px 0 0 5px;
&:hover{
    cursor: pointer;
}
`;

export default CommentList