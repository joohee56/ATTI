import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

import {postEditor} from '../../components/Community/PostEditor'

export const action = {
    // writePosts : createAsyncThunk("WRITE/POSTS", async(e) => {
    //     e.preventDefault();
    //     return axios.post(
    //       "http://localhost:8081/post/write",
    //         {
    //           postId : postEditor().post.postId,
    //           postTitle : postEditor().post.postTitle,
    //           postContent : postEditor().post.postContent,
    //           postRegDate : postEditor().post.postRegDate,
    //           postUpdDate : postEditor().post.postUpdDate,
    //           user_id : postEditor().post.user_id,
    //           category_id : postEditor().post.category_id
    //         },
    //         {
    //           headers: {
    //             "Content-type": "application/json",
    //           },
    //         }
    //     ).then((res) => {
    //       console.log("response:", res)
    //     });
      
    //   },
    //     [
    //       postEditor().post.postId,
    //       postEditor().post.postTitle,
    //       postEditor().post.postContent,
    //       postEditor().post.postRegDate,
    //       postEditor().post.postUpdDate,
    //       postEditor().post.user_id,
    //       postEditor().post.category_id
    //     ]
    //     )
      };


const normalPostSlice = createSlice({
    name: 'normalPost',
    initialState: {
        user_id : '',
        post_id : '',
        post_title : '',
        post_content : '',
        post_req_date :'',
        post_upd_date : '',
        post_ano_info :'',
        post_com_ban_info :''},

    reducers: {
        saveNormalPost(state, action) {
            console.log(action)
            state.post_title = action.payload.post_title;
            state.post_content = action.payload.post_content;
            state.post_upd_date = action.payload.post_upd_date;
            
        },
    }

});

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comment_content: '',
    },
    reducers: {
        saveComment(state, action) {
            state.comment_content = action.payload.comment_content;
        },
    }
})

const communityStore = configureStore({
    reducer: { 
        normalPost: normalPostSlice.reducer, 
        comment: commentSlice.reducer,
        
    },
});

export const normalPostActions = normalPostSlice.actions;
export const commentActions = commentSlice.actions;

export default communityStore
