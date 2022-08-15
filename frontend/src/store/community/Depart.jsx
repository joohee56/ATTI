import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';


const departSlice = createSlice({
    name: 'depart',
    initialState: {
        departId: "",
        userId: null,
        departName: "싸피",
        departCode: null
    },
    reducers: {
        saveDepart(state, action) {
            state.departId = action.payload.departId;
            state.userId = action.payload.userId;
            state.departName = action.payload.departName;
            state.departCode = action.payload.departCode;
         
        },
        initialSaveDepart(state, action){
            state.departId = action.payload.departId;
            state.departName = action.payload.departName;
        }
    }
});

export const departActions = departSlice.actions;
export const departState = (state) =>state.depart;
export default departSlice.reducer;