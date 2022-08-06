import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { ButtonPurple } from "../ButtonStyled";
import { FormHelperText, InputAdornment, OutlinedInput } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

interface inputInfo {
  name: string;
  placeholder: string;
  phonNumber: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function InputWithPhone({
  placeholder,
  phonNumber,
  ...rest
}: inputInfo) {
  const [isPhoneNumber, setIsPhoneNumber] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isCode,setIsCode] = React.useState<string>("");

  const accreditPhone = async () => {
    const value = phonNumber.replace(/[^0-9]/g, "");
    const regex = /^[0-9]{11}$/;
    if (regex.test(value)) {
      setIsPhoneNumber(true);
      await axios
        .post(
          BACKEND_URL + "/api/auth/phone",
          {
            phoneNumber: value,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("성공");
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setIsPhoneNumber(false);
    }
  };

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCode(e.target.value);
  };

  const accreditCode = async () => {
    const value = isCode.replace(/[^0-9]/g, "");
    //if (5분 이내 입력 했는지) {
    if (value.length >= 6) {
      setIsSuccess(true);
      await axios
        .get(BACKEND_URL + "/api/auth/phone/authCode", {
          params: {
            code: value,
          },
        })
        .then((res) => {
          console.log("성공");
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // } else {
    //   setIsPhoneNumber(false);
    // }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "54%" }}>
        <OutlinedInput
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <ButtonPurple onClick={accreditPhone}>인증</ButtonPurple>
            </InputAdornment>
          }
          size="small"
          placeholder={placeholder}
          value={phonNumber}
          {...rest}
        />
        {!isPhoneNumber && (
          <FormHelperText error>번호를 다시 확인해 주세요</FormHelperText>
        )}
        {isPhoneNumber && (
          <div>
            <OutlinedInput
              sx={{ mt: 2 }}
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <span style={{ marginRight: "12px" }}> 05:00 </span>
                  <ButtonPurple onClick={accreditCode}>인증</ButtonPurple>
                </InputAdornment>
              }
              size="small"
              placeholder="인증번호"
              value={isCode}
              onChange={onChangeCode}
            />
            {!isSuccess && <FormHelperText>인증되었습니다.</FormHelperText>}
          </div>
        )}
      </FormControl>
    </div>
  );
}
