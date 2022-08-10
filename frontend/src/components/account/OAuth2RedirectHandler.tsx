import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../constant";

<<<<<<< HEAD
const OAuth2RedirectHandler = () => {

  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");

  
  axios.post({BACKEND_URL}+"/api/auth/login/social", {
    params: {
      code: Authcode
    }
  })
  .then(function (response) {
       // response  
       console.log("정상실행");
       console.log(response);

  }).catch(function (error) {
      // 오류발생시 실행
      console.log("error발생");
       console.log(error);
  })
 
   return (
    <>
      <span>대기중</span>
    </>
  );
};
=======
function OAuth2RedirectHandler() {
  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");
  console.log(Authcode);

  axios
    .get(BACKEND_URL + "/api/auth/login/kakao", {
      params: {
        code: Authcode,
      },
    })
    .then(function (response) {
      // response
      console.log("정상실행");
      console.log(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.log("error발생");
      console.log(error);
    });

  return (
    <>
      <span>대기중</span>
      <p>code: {Authcode}</p>
    </>
  );
}
>>>>>>> ac944d20bcc4317d4b4d62d96820f2a79dcb489d

export default OAuth2RedirectHandler;
