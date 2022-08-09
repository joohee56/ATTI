import axios from "axios";
import { BACKEND_URL } from "../../constant";

export const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// 로그인 이후부터
// export const apiAcc = axios.create({
//   baseURL: BACKEND_URL,
//   headers: {
//     "Content-type": "application/json",
//     "Authorization": ,
//   },
// });

// export default apiAcc;