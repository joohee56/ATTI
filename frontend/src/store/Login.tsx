import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const userDB = [{ id: "test", password: "test" }];

export interface UserLoginState {
  id: string;
  password: string;
  auth: boolean;
}

const initialState: UserLoginState = {
  id: "",
  password: "",
  auth: false,
};

const fetchTodo = createAsyncThunk(
  `${name}/fetchTodo`, // 액션 이름을 정의해 주도록 합니다.
  async (todoId, thunkAPI) => {
      //const response = await todoApi.fetchTodoInfo(todoId);
     // return response.data
  }
)

export const UserLoginSlice = createSlice({
  name: 'lgoin', // 해당 모듈의 이름
  initialState, // 초기값 세팅
  reducers: {
    login: (state, action) =>{
      state.id = action.payload;
    }
  },
});



export default UserLoginSlice.reducer;

function createAsyncThunk(arg0: string, arg1: (todoId: any, thunkAPI: any) => Promise<any>) {
  throw new Error("Function not implemented.");
}
