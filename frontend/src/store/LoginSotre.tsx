import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserLoginState {
  id: string;
  accessToken: string;
  auth: boolean;
}

const initialState: UserLoginState = {
  id: "",
  accessToken: "",
  auth: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:  (state, action: PayloadAction<{ id: string; accessToken: string }>) => {
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
      state.auth = true;
      localStorage.setItem("AccessToken",state.accessToken);
      console.log(action.payload);
    },
    logout: (state) => {
      state.id = "";
      state.accessToken= "";
      state.auth = false;
    },
  },
});

export const loginActions = userSlice.actions; // Slice에서 reducer 함수들 모음

export default userSlice.reducer; // 합체용 reducer부분 export
