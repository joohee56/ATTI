import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ButtonBlue } from '../ButtonStyled';
import { normalPostActions } from '../../store/community/index'

function PostEditor() {

    const [post, setPost] = useState({
        post_title: '',
        post_content: '',
        post_upd_date : "2022-07-28 32:23",
    })

    const getValue = e => {
        const {name,value} = e.target;
       
        setPost((prev) => ({
            ...prev,
            [name] : value,
            // [e.target.name]: e.target.value
        }));
    };
    
    const dispatch = useDispatch();
    const postHandler = (event) => {
        event.preventDefault();
        console.log(post)
        dispatch(normalPostActions.saveNormalPost({post_title: post.post_title, post_content: post.post_content, post_upd_date: post.post_upd_date}))
    }

    return (
        <div>
            <div className="form-wrapper">
                <Main>
                    <Top>
                        <h2>글쓰기</h2>
                        <Top2>
                            <button>토글1</button>
                            <button>토글2</button>
                        </Top2>
                    </Top>
                    <PostTitle type="text" placeholder="제목을 입력하세요" name="post_title" onChange={getValue}/>
                    <CKEditor
                        editor={ ClassicEditor }
                        data=""
                        config={{placeholder: "내용을 입력하세요"}}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height", 
                                    "400px", 
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
                                post_content: data
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
        <ButtonBlue className='submit-button'
        // onClick={() => {
        //     setSaveContent(saveContent.concat({...post}));
        //     postHandler();}}
          onClick = {postHandler}  
            >
            글작성</ButtonBlue>
        </div>
        
    );
}

const PostTitle = styled.input`
width: 700px;
height: 50px;
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
justify-content: flex-end;
align-items: flex-end;
`;

export default PostEditor;