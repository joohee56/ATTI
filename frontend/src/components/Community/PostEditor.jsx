import React, { Component, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';


import { BACKEND_URL } from "../../constant";
import { ButtonBlue } from '../ButtonStyled';
import { normalPostActions } from '../../store/community/index'
import { palette } from "../../styles/palette";
import UseSwitchesBasic from "../SwitchButton"

export function PostEditor() {

    const [post, setPost] = useState({
        postId : "",
        postTitle : "",
        postContent : "",
        postRegDate : "",
        postUpdDate : "",
        user_id : "",
        category_id : ""
    })

    const getValue = e => {
        const {name,value} = e.target;
       
        setPost((prev) => ({
            ...prev,
            [name] : value,
            // [e.target.name]: e.target.value
        }));
    };
    
    const writePosts = useCallback(
        async (e) => {
          e.preventDefault();
          try {
            await axios
              .post(
                BACKEND_URL + "/post/write",
                {
                  postId : post.postId,
                  postTitle : post.postTitle,
                  postContent : post.postContent,
                  postRegDate : post.postRegDate,
                  postUpdDate : post.postUpdDate,
                  user_id : post.user_id,
                  category_id : post.category_id
                },
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                }
              )
              .then((res) => {
                console.log("response:", res);
      
              });
          } catch (err) {
            console.log(err)
          }
        },
        [
          post.postId,
          post.postTitle,
          post.postContent,
          post.postRegDate,
          post.postUpdDate,
          post.user_id,
          post.category_id
        ]
      );
      

    const dispatch = useDispatch();
    const postHandler = (event) => {
        event.preventDefault();
        console.log(post)
        dispatch(normalPostActions.saveNormalPost({post_title: post.postTitle, post_content: post.postContent}))
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div className="form-wrapper">
                <Main>
                    <Top>
                        <TopTitle>category이름+ 글쓰기</TopTitle>
                        <Top2>
                            <SwitchDiv>
                                <span style={{textAlign: "center" ,fontSize: "12px", marginBottom: "5px"}}>
                                    익명으로 글쓰기 
                                </span>
                                {UseSwitchesBasic()}
                            </SwitchDiv>
                            <SwitchDiv>
                                <span style={{textAlign: "center", fontSize: "12px",  marginBottom: "5px"}}>
                                    댓글 금지하기 
                                </span>
                                {UseSwitchesBasic()}
                            </SwitchDiv>
                        </Top2>
                    </Top>
                    <PostTitle type="text" placeholder="제목을 입력하세요" name="postTitle" onChange={getValue}/>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
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
          onClick = {writePosts}>
            글작성</SubmitButton>
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
export default PostEditor;