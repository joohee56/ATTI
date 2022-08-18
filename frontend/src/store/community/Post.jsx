import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

const postSlice = createSlice({
    name: 'post',
    initialState: {
        
        postComBanInfo: ""
    },
    reducers: {
        saveNotice(state, action) {
            state.postComBanInfo = action.payload.commentCount;
            
        },
      
}});

export const postActions = postSlice.actions;
export const postState = (state) => state.post;
export default postSlice.reducer;