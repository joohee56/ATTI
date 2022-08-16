import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/LoginStore";
import { api } from "../../utils/api";

function OAuth2RedirectHandler() {
  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");
  console.log(Authcode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  api
    .get("/auth/login/kakao", {
      params: {
        code: Authcode,
      },
    })
    .then(async function (response) {
      if (response.status === 200) {
        // console.log("response", response.data);
        dispatch(
          loginActions.login({
            id: response.data.userId,
            userName: response.data.userName,
            accessToken: response.data.accessToken,
            admin: response.data.admin,
            categoryList: response.data.categoryList,
            departList: response.data.departList,
            postList: response.data.postList,
          })
        );
        if (response.data.departList == null) navigate("/welcome");
        else
          navigate(
            `/cummunity/${response.data.departList[0].departId}/${response.data.categoryList[0].categoryId}`
          );
      }
    })
    .catch(function (error) {
      console.log("Error", error);
      console.log("Error", "로그인 실패!");
    });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default OAuth2RedirectHandler;
