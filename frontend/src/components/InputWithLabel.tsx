import * as React from "react";
import TextField from "@mui/material/TextField";
import { SvgIconComponent } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
import { FormControl, InputAdornment } from "@mui/material";
import styled from "styled-components";
import { palette } from "../styles/palette";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  & + & {
    margin-top: 0.1rem;
  }
`;

interface inputInfo {
  name: string;
  placeholder: string;
  icon?: SvgIconComponent;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputStyle =styled(TextField)(({ theme }) => ({
  backgroundColor: palette.gray_1,
}));

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithIcon = ({ icon,placeholder, ...rest }: inputInfo) => (
  <Wrapper>
     <FormControl sx={{ m: 1, width: "54%" }}>
        <InputStyle
          InputProps={{
            startAdornment: icon && (
              <InputAdornment position="start">
                <SvgIcon component={icon} inheritViewBox />
              </InputAdornment>
            )
          }}
          size="small"
          placeholder={placeholder}
          {...rest}
        />
        
      </FormControl>
  </Wrapper>
);

export default InputWithIcon;
