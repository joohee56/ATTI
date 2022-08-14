import { api } from "../../utils/api";


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
    });

  return (
    <>
      <span>대기중</span>
      <p>code: {Authcode}</p>
    </>
  );
};

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
