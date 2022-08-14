import React, { Component, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

import apiAcc, {api} from '../../utils/api';
import { reRenderingActions } from '../../store/community/ReRendering';
import { BACKEND_URL } from "../../constant";
import { ButtonBlue } from '../ButtonStyled';
import { normalPostActions } from '../../store/community/Category'
import { palette } from "../../styles/palette";
import UseSwitchesBasic from "../SwitchButton"

export function PostUpdate({singlePost, handleModal3}) {
  
    const [post, setPost] = useState({
        postId : "",
        postTitle : "",
        postContent : "",
        postRegDate : "",
        postUpdDate : "",
        userId : "",
        category_id : "",
        postAnoInfo: false,
        postComBanInfo: false
    })

    const getAnoInfo = () => {
      console.log("익명여부 :", post.postAnoInfo)
      post.postAnoInfo = !post.postAnoInfo
      
  }

    const getComBanInfo = () => {
      console.log("댓글금지여부 :", post.postComBanInfo)
      post.postComBanInfo = !post.postComBanInfo
  }
    
    const getValue = e => {
        const {name,value} = e.target;
       
        setPost((prev) => ({
            ...prev,
            [name] : value,
            // [e.target.name]: e.target.value
        }));
    };
    
    const dispatch = useDispatch()
    const currentCider = useSelector(state => state.reRendering.cider)
    const updateCider = !currentCider

    const updatePosts = useCallback(
        async (e) => {
          try {
            await api
              .put(`/post/update/${singlePost.postId}`,
                {
                  postId : singlePost.postId,
                  postTitle : post.postTitle,
                  postContent : post.postContent,
                  postRegDate : singlePost.postRegDate,
                  postUpdDate : post.postUpdDate,
                  userId : singlePost.userId,
                  category_id : singlePost.category_id,
                  postAnoInfo: post.postAnoInfo,
                  postComBanInfo: post.postComBanInfo
                },
              )
            // await axios
            //   .put(
            //     BACKEND_URL + "/post/update",
            //     {
            //       postId : singlePost.postId,
            //       postTitle : post.postTitle,
            //       postContent : post.postContent,
            //       postRegDate : singlePost.postRegDate,
            //       postUpdDate : post.postUpdDate,
            //     //   userId : post.userId,
            //       userId : "ssafy",
            //       category_id : singlePost.category_id,
            //       postAnoInfo: getAnoInfoNum(),
            //       postComBanInfo: getComBanInfoNum()
            //     },
            //     {
            //       headers: {
            //         "Content-type": "application/json",
            //       },
            //     }
            //   )
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
          singlePost.postId,
          post.postTitle,
          post.postContent,
          singlePost.postRegDate,
          post.postUpdDate,
          singlePost.userId,
          singlePost.category_id,
          post.postAnoInfo,
          post.postComBanInfo
        ]
      );
    
    function UpdateFunction (){
        updatePosts();
        handleModal3();
    }  
    const categoryName = useSelector(state => state.category.categoryName)
    const categoryAnoInfo = useSelector(state => state.category.categoryAnoInfo)
    const categoryComInfo = useSelector(state => state.category.categoryComInfo)
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div className="form-wrapper">
                <Main>
                    <Top>
                        <TopTitle>{categoryName} 수정하기</TopTitle>
                        <Top2>
                        {categoryAnoInfo === false && (
                            <SwitchDiv>
                                <span style={{textAlign: "center" ,fontSize: "17px", marginBottom: "5px"}}>
                                    익명으로 글쓰기 
                                </span>
                                <span onClick={getAnoInfo}>
                                    {UseSwitchesBasic()}
                                </span>
                            </SwitchDiv>
                          )}
                            {categoryComInfo === false && (
                            <SwitchDiv>
                                <span style={{textAlign: "center", fontSize: "17px",  marginBottom: "5px"}}>
                                    댓글 금지하기 
                                </span>
                                <span onClick={getComBanInfo}>
                                    {UseSwitchesBasic()}
                                </span>
                            </SwitchDiv>
                          )}
                        </Top2>
                    </Top>
                    <PostTitle type="text" placeholder="제목을 입력하세요" name="postTitle" defaultValue={singlePost.postTitle} onChange={getValue}/>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={singlePost.postContent}
                        config={{placeholder: "내용을 입력하세요"}}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height", 
                                    "350px", 
                                    editor.editing.view.document.getRoot()
                                );
                            });
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setPost({
                                ...post,
                                postContent: data
                            })
                            // console.log(post)
                        } }
                        onBlur={ ( event, editor ) => {
                            // console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            // console.log( 'Focus.', editor );
                        } }
                    />
                </Main>
            </div>
        <SubmitButton className='submit-button'
          onClick = {() => UpdateFunction()}>
            글 수정</SubmitButton>
        </div>
        
    );
}

const TopTitle = styled.h2`
background: ${palette.main_grBlue};
color: transparent;
-webkit-background-clip: text;
text-align: center;
margin: 6px 0;
`;
const PostTitle = styled.input`
width: 700px;
height: 30px;
border: none;
border-bottom: 2px solid;
outline: none;
margin: 0 0 10px 0;
font-size: 20px;

`;

const Main = styled.main`
display: flex;
flex-direction: column;
`;

const Top = styled.div`
display: flex;
flex-direction: column;
`;

const Top2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
`;

const SubmitButton = styled(ButtonBlue)`
width: 100px;
height: 50px;
margin: 10px 0 0 0;
`;

const SwitchDiv = styled.div`
display: flex; 
flex-direction: row; 
align-items: center;
justify-content: center;
font-weight: bold;
`;
export default PostUpdate;