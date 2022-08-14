import styled from "styled-components";
import { palette } from "../../styles/palette";

interface inputInfo {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function ModalTitle({ text, onClick, ...rest }: inputInfo) {
  return (
    <>
      <TextSpan onClick={onClick}>{text}</TextSpan>
    </>
  );
}

const TextSpan = styled.span`
  font-size: 1.2em;
  cursor: pointer;
  background: ${palette.main_grBlue};
  -webkit-background-clip: text;
  color: transparent;
`;

export default ModalTitle;
