import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

const departSlice = createSlice({
    name: 'depart',
    initialState: {
        departId: null,
        userId: null,
        departName: "채널",
        departCode: null
    },
    reducers: {
        saveDepart(state, action) {
            state.departId = action.payload.departId;
            state.userId = action.payload.userId;
            state.departName = action.payload.departName;
            state.departCode = action.payload.departCode;
         
        },
    }
});

export const departActions = departSlice.actions;
export const departState = (state) =>state.depart;
export default departSlice.reducer;