import { createSlice, configureStore } from '@reduxjs/toolkit'

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
    reducer: { normalPost: normalPostSlice.reducer, comment: commentSlice.reducer},
});

export const normalPostActions = normalPostSlice.actions;
export const commentActions = commentSlice.actions;

export default communityStore
