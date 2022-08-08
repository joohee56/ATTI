import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../constant";

function OAuth2RedirectHandler() {
  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");
  console.log(Authcode);

  axios
    .get(BACKEND_URL + "/auth/login/kakao", {
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

export default OAuth2RedirectHandler;
