import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, InputAdornment, OutlinedInput } from "@mui/material";
import { palette } from "../../styles/palette";

interface inputInfo {
  name: string;
  placeholder: string;
  phonNumber: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  textBool?: boolean;
  sizeBool?:boolean;
}

export default function InputWithPhone({
  placeholder,
  phonNumber,
  sizeBool,
  ...rest
}: inputInfo) {
  const [phoneNumberMessage, setPhoneNumberMessage] =
    React.useState<boolean>(true);

  return (
    <div>
      <FormControl sx={{width: "100%"}}>
        <OutlinedInput
          type="text"
          size={sizeBool?"medium":"small"}
          placeholder={placeholder}
          value={phonNumber}
          {...rest}
          sx={{bgcolor:`${palette.gray_1}`}}
        />
        {!phoneNumberMessage && (
          <FormHelperText error>번호를 다시 확인해 주세요</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
