import {useState} from "react";
import styled from "styled-components";
import {CopyIcon} from "../../icons";

const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  height: 50px;
  border-radius: 10px;
  background-color: #ffe8c7;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  margin-right: 20px;
`;

export const CopyToClipboardButton: React.FC<{textToCopy: string}> = ({textToCopy}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <InputWrapper>
      <Link>{textToCopy}</Link>
      <button onClick={handleCopyClick}>{copied ? "Copied!" : <CopyIcon />}</button>
    </InputWrapper>
  );
};
