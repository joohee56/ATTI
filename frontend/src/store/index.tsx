import { combineReducers, configureStore } from "@reduxjs/toolkit";

// 1. 관리할 Slice 데이터 가져오기
import loginReducer from "./LoginStore";
import categoryReducer from "./community/Category";
import departReducer from "./community/Depart";
import reRenderingReducer from "./community/ReRendering";

// 유저 정보(ID, 이름, 관리자유무(userRole-객체)), access token, 채널 리스트, 카테고리 리스트 
const rootReducer = combineReducers({
  userInfo : loginReducer,
  category : categoryReducer,
  depart : departReducer,
  reRendering: reRenderingReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
});

export default store;