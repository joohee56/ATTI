import { createSlice, configureStore,createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const action = {
    getPosts : createAsyncThunk("GET/POSTS", async() => {
        return axios({
            method: "get",
            url: "http://localhost:8081/post"
        }).then(response => response.data);
    }),
};

const postInitailState = {
    postId: "",
    postAnoInfo: "",
    postComBanInfo: "",
    postContent:"",
    postRegDate: "",
    postUpdDate: "",
    categoryId: "",
    userId: ""  
}

export const reducer = {
    getPosts: (state, action) => {
        state.postId = action.payload.postId;
        state.postAnoInfo = action.payload.postAnoInfo;
        state.postComBanInfo = action.payload.postComBanInfo;
        state.postContent = action.payload.postContent;
        state.postRegDate = action.payload.postRegDate;
        state.postUpdDate = action.payload.postUpdDate;
        state.categoryId = action.payload.categoryId;
        state.userId = action.payload.userId;
    }
}

export const postReducer = createReducer(postInitailState, builder => {
    builder.addCase(action.getPosts.fuifilled, reducer.getPosts)
});


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
        posts: postReducer,
        
    },
});

export const normalPostActions = normalPostSlice.actions;
export const commentActions = commentSlice.actions;

export default communityStore
