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
        categoryName: null,
        cType: null,
        departId: null,
        userId: null
    },
    reducers: {
        saveCategory(state, action) {
            state.categoryId = action.payload.categoryId;
            state.categpryAnoInfo = action.payload.categpryAnoInfo;
            state.categoryComAnoInfo = action.payload.categoryComAnoInfo;
            state.categoryComInfo = action.payload.categoryComInfo;
            state.categoryName = action.payload.categoryName;
            state.cType = action.payload.cType;
            state.departId = action.payload.departId;
            state.userId = action.payload.userId;
        },
    }

});
// const normalPostSlice = createSlice({
//     name: 'normalPost',
//     initialState: {
//         user_id : '',
//         post_id : '',
//         post_title : '',
//         post_content : '',
//         post_req_date :'',
//         post_upd_date : '',
//         post_ano_info :'',
//         post_com_ban_info :''},

//     reducers: {
//         saveNormalPost(state, action) {
//             console.log(action)
//             state.post_title = action.payload.post_title;
//             state.post_content = action.payload.post_content;
//             state.post_upd_date = action.payload.post_upd_date;
            
//         },
//     }

// });

// const commentSlice = createSlice({
//     name: 'comment',
//     initialState: {
//         comment_content: '',
//     },
//     reducers: {
//         saveComment(state, action) {
//             state.comment_content = action.payload.comment_content;
//         },
//     }
// })

const communityStore = configureStore({
    reducer: { 
        category: categorySlice.reducer,
        
    },
});

// export const normalPostActions = normalPostSlice.actions;
// export const commentActions = commentSlice.actions;
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;


 // const postTitle = useSelector(state => state.normalPost.post_title)
    // const postContent = useSelector(state => state.normalPost.post_content)
    // const postUpdDate = useSelector(state => state.normalPost.post_upd_date)