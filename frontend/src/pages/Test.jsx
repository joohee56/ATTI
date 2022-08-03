import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {reducer} from '../store/community/index'

function Test(){

  const [post, setPost] = useState({
    postId: "",
    postAnoInfo: "",
    postComBanInfo: "",
    postContent:"",
    postRegDate: "",
    postUpdDate: "",
    categoryId: "",
    userId: ""  
})

  const postId = useSelector((state) => state.posts.postId);
  const postAnoInfo = useSelector((state) => state.posts.postAnoInfo);
  const postComBanInfo = useSelector((state) => state.posts.postComBanInfo);
  const postContent = useSelector((state) => state.posts.postContent);
  const postRegDate = useSelector((state) => state.posts.postRegDate);
  const postUpdDate = useSelector((state) => state.posts.postUpdDate);
  const categoryId = useSelector((state) => state.posts.categotyId);
  const userId = useSelector((state) => state.posts.userId);
  
  const dispatch = useDispatch();

  const postHandler = (event) => {
    event.preventDefault();
    console.log(post)
    dispatch(reducer.getPosts(
      { postId : post.postId,
        postAnoInfo : post.postAnoInfo,
        postComBanInfo : post.postComBanInfo,
        postContent : post.postContent,
        postRegDate : post.postRegDate,
        postUpdDate : post.postUpdDate,
        categoryId : post.categoryId,
        userId : post.userId})
    )

    const getValue = e => {
      const {name,value} = e.target;
     
      setPost((prev) => ({
          ...prev,
          [name] : value,
          // [e.target.name]: e.target.value
      }));
  };
}


  return(
     <div>
        <input type="text" name='postId'  onChange={getValue} />
        <input type="text" name='postContent'  onChange={getValue} />
        <input type="text" name='categoryId'  onChange={getValue}/>
        <input type="text" name='userId'  onChange={getValue} />
        <button onClick = {postHandler} >한 번 봅시다!</button>
        {postId}
        {postAnoInfo}
        {postComBanInfo}
        {postContent}
        {postRegDate}
        {postUpdDate}
        {categoryId}
        {userId}
     </div>
  );
}



  export default Test;