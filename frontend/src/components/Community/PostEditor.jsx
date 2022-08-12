import React, { Component, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

// import UploadAdapter from './UploadAdaptor';
import { Button } from '@mui/material';
import MyEditor from './MyEditor';
import { reRenderingActions } from '../../store/community/ReRendering';
import { BACKEND_URL } from "../../constant";
import { ButtonBlue } from '../ButtonStyled';
import { normalPostActions } from '../../store/community/Category'
import { palette } from "../../styles/palette";
import UseSwitchesBasic from "../SwitchButton"

function PostEditor({handleModal1}, props) {

    const [post, setPost] = useState({
        postId : "",
        postTitle : "",
        postContent : "",
        postRegDate : "",
        postUpdDate : "",
        user_id : "",
        category_id : "",
        postAnoInfo: false,
        postComBanInfo: false
    })

    const getAnoInfo = () => {
        console.log("익명여부 :", post.postAnoInfo)
        post.postAnoInfo = !post.postAnoInfo
        
    }
    const getAnoInfoNum = () => {
        if (post.postAnoInfo){
            return 1
        } 
        else{
            return 0
        }
    }

    const getComBanInfo = () => {
        console.log("댓글금지여부 :", post.postComBanInfo)
        post.postComBanInfo = !post.postComBanInfo
    }
    const getComBanInfoNum = () => {
        if (post.postComBanInfo){
            return 1
        } 
        else{
            return 0
        }
    }
    const getValue = e => {
        const {name,value} = e.target;
       
        setPost((prev) => ({
            ...prev,
            [name] : value,
            // [e.target.name]: e.target.value
        }));
    };
    const [editor, setEditor] = useState(null)
    const writePosts = useCallback(
        async (e) => {
        //   e.preventDefault();
          try {
            await axios
              .post(
                BACKEND_URL + "/post/write",
                {
                  postId : post.postId,
                  postTitle : post.postTitle,
                  postContent : editor,
                  postRegDate : post.postRegDate,
                  postUpdDate : post.postUpdDate,
                  user_id : post.user_id,
                  category_id : post.category_id,
                  postAnoInfo: getAnoInfoNum(),
                  postComBanInfo: getComBanInfoNum()
                },
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                }
              )
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
          post.postId,
          post.postTitle,
          editor,
          post.postRegDate,
          post.postUpdDate,
          post.user_id,
          post.category_id,
          getAnoInfoNum(),
          getComBanInfoNum()
        ]
      );
    
    const dispatch = useDispatch()
    const currentCider = useSelector(state => state.reRendering.cider)
    const updateCider = !currentCider
   
   
    function EditFunction(){
        writePosts();
        handleModal1();
        
    };
    const categoryName = useSelector(state => state.category.categoryName)
    
    class File extends Component{
      state = {
        selectedFile: null,
        fileUploadedSuccessfully: false
      }
      onFileChange = event => {
        this.setState({selectedFile : event.target.files[0]});
      }
    
      onFileUpload = () => {
        const formData = new FormData();
        formData.append(
          "demo file",
          this.state.selectedFile,
          this.state.selectedFile.name
        )
        axios.post(" https://nrjtrn2s29.execute-api.ap-northeast-2.amazonaws.com/atti", formData).then(() => { // API Gateway URL 입력
          this.setState({selectedFile: null});
          this.setState({fileUploadedSuccessfully: true});
        })
      }
    
      fileData = () => {
        if (this.state.selectedFile){
          return(
          <div>
            <h2>파일 세부정보</h2>
            <p>파일명: {this.state.selectedFile.name}</p>
            <p>파일유형: {this.state.selectedFile.type}</p>
            <p>Last Modified: {" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
          )
        } else if (this.state.fileUploadedSuccessfully){
          return(
          <div>
            <br />
            <h4>파일 정상 업로드!</h4> 
          </div>
          )
        } else{
          return(
          <div>
            <br/>
            <h4> 파일을 선택하고 업로드 버튼을 클릭해 주세요.</h4>
          </div>
          )
        }
      }
    
      render(){
        return (
          <div className='container'>
            <h2>파일 업로드 웹 페이지</h2>
            <a href = "https://heytech.tistory.com" target="blank">Hey Tech 티스토리 블로그</a>
            <div>
              <br></br>
              <input type = "file" onChange = {this.onFileChange} />
              <button onClick={this.onFileUpload}>
                파일 업로드
              </button>
            </div>
            {this.fileData()}
          </div>
        )
      }
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
                                <span onClick={getAnoInfo}>
                                    {UseSwitchesBasic()}
                                </span>
                             
                            </SwitchDiv>
                            <SwitchDiv>
                                <span style={{textAlign: "center", fontSize: "12px",  marginBottom: "5px"}}>
                                    댓글 금지하기 
                                </span>
                                <span onClick={getComBanInfo}>
                                    {UseSwitchesBasic()}
                                </span>
                            </SwitchDiv>
                        </Top2>
                    </Top>
                    <PostTitle type="text" placeholder="제목을 입력하세요" name="postTitle" onChange={getValue}/>
                    <MyEditor
                      handleChange={(data) => {
                        setEditor(data);
                      }}
                      data={editor}
                      {...props}
                    />
                </Main>
            </div>
            {categoryName === "자료실" && (
            <File/>
            )}
        <SubmitButton className='submit-button'
          onClick = {() => {EditFunction()}}>
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