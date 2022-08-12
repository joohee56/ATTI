import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

const reRenderingSlice = createSlice({
    name: 'reRendering',
    initialState: {
        cider: true
    },
    reducers: {
        saveReRendering(state, action) {
            state.cider = action.payload.cider;
         
        },
    }
});

export const reRenderingActions = reRenderingSlice.actions;
export const reRenderingState = (state) =>state.reRendering;
export default reRenderingSlice.reducer;