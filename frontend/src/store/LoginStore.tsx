import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserLoginState {
  id: string;
  userName: string;
  admin: boolean;
  accessToken: string;
  categoryList: {
    categoryId: number;
    categoryName: string;
    ctype: string;
  }[];
  departList:{
    postContent:string;
    postRegDate:string;
    postTitle:string;
    userId:string;
  }[];
  auth: boolean;
}

const initialState: UserLoginState = {
  id: "",
  userName: "",
  admin: false,
  accessToken: "",
  categoryList: [],
  departList:[],
  auth: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        id: string;
        userName: string;
        admin: boolean;
        accessToken: string;
        categoryList: {
          categoryId: number;
          categoryName: string;
          ctype: string;
        }[];
        departList:{
          postContent:string;
          postRegDate:string;
          postTitle:string;
          userId:string;
        }[];
      }>
    ) => {
      state.id = action.payload.id;
      state.userName= action.payload.userName;
      state.admin=action.payload.admin;
      state.accessToken = action.payload.accessToken;
      state.categoryList = action.payload.categoryList;
      state.departList= action.payload.departList;
      state.auth = true;
      
      localStorage.setItem("AccessToken", state.accessToken);
      localStorage.setItem("userId", state.id);
      console.log(action.payload);
    },
    logout: (state) => {
      state.id = "";
      state.accessToken = "";
      state.auth = false;
    },
  },
});

export const loginActions = userSlice.actions; // Slice에서 reducer 함수들 모음

export default userSlice.reducer; // 합체용 reducer부분 export
