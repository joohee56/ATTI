import React, { Component } from 'react';
import styled from 'styled-components';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {ButtonStyled} from '../ButtonBlue';


class PostEditor extends Component {
    render() {
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
                        <PostTitle/>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="처음 입력되어있는 data"
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
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </Main>
                </div>
            <ButtonStyled className='submit-button'>글작성</ButtonStyled>
            </div>
        );
    }
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