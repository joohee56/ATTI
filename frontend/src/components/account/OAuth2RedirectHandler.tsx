import {api} from "../../utils/api";

function OAuth2RedirectHandler() {
  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");
  console.log(Authcode);

  api
    .get("/auth/login/kakao", {
      params: {
        code: Authcode,
      },
    })
    .then(function (response) {
      console.log("정상 실행");
      console.log(response);
    })
    .catch(function (error) {
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
