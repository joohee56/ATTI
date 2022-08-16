import { createSlice, configureStore, createAsyncThunk, createReducer } from '@reduxjs/toolkit'


// export const action = {
//     writePosts : createAsyncThunk("WRITE/POSTS", async(e) => {
//         e.preventDefault();
//         return axios.post(
//           "http://localhost:8081/post/write",
//             {
//               postId : postEditor().post.postId,
//               postTitle : postEditor().post.postTitle,
//               postContent : postEditor().post.postContent,
//               postRegDate : postEditor().post.postRegDate,
//               postUpdDate : postEditor().post.postUpdDate,
//               user_id : postEditor().post.user_id,
//               category_id : postEditor().post.category_id
//             },
//             {
//               headers: {
//                 "Content-type": "application/json",
//               },
//             }
//         ).then((res) => {
//           console.log("response:", res)
//         });
      
//       },
//         [
//           postEditor().post.postId,
//           postEditor().post.postTitle,
//           postEditor().post.postContent,
//           postEditor().post.postRegDate,
//           postEditor().post.postUpdDate,
//           postEditor().post.user_id,
//           postEditor().post.category_id
//         ]
//         )
//       };

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryId: 0,
        categoryAnoInfo: null,
        categoryComAnoInfo: null,
        categoryComInfo: null,
        categoryName: "공지사항",
        cType: null,
        departId: null,
        userId: null,
        categoryList: []
    },
    reducers: {
        saveCategory(state, action) {
            state.categoryId = action.payload.categoryId;
            state.categoryAnoInfo = action.payload.categoryAnoInfo;
            state.categoryComAnoInfo = action.payload.categoryComAnoInfo;
            state.categoryComInfo = action.payload.categoryComInfo;
            state.categoryName = action.payload.categoryName;
            state.cType = action.payload.cType;
            state.departId = action.payload.departId;
            state.userId = action.payload.userId;
        },
        saveCategoryList(state, action) {
            state.categoryList = action.payload.categoryList;
        }
    }

});

const communityStore = configureStore({
    reducer: { 
        category: categorySlice.reducer,
        
    },
});


export const categoryActions = categorySlice.actions;
export const categoryState = (state) =>state.category;
export default categorySlice.reducer;
