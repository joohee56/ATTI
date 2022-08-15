import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

const reRenderingSlice = createSlice({
    name: 'reRendering',
    initialState: {
        cider: false,
        setAdminPage: false,
        setMyPage: false,
    },
    reducers: {
        saveReRendering(state, action) {
            state.cider = action.payload.cider;
         
        },
        saveSetAdminPage(state, action){
            state.setAdminPage = action.payload.setAdminPage;
        },
        saveSetMyPage(state, action) {
            state.setMyPage = action.payload.setMyPage
        }
    }
});

export const reRenderingActions = reRenderingSlice.actions;
export const reRenderingState = (state) =>state.reRendering;
export default reRenderingSlice.reducer;