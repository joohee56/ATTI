import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'

const departSlice = createSlice({
    name: 'depart',
    initialState: {
        departId: "",
        userId: "",
        departName: "",
        departCode: ""
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
export default departSlice.reducer;