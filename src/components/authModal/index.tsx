import ReactModal from "react-modal";

import {styled} from "styled-components";
import {CloseIcon} from "../../icons";
import {CloseButton, modalStyles} from "../gameModal/index.styles";
import useAuth from "../../hooks/useAuth";
import {useState} from "react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAfterAuth: () => void;
}

const Button = styled.button`
  border-radius: 20px;
  background-color: #2596be;
  padding: 10px 30px;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: bolder;
`;

export const AuthModal: React.FC<ModalProps> = ({isOpen, onRequestClose, onAfterAuth}) => {
  const {signIn} = useAuth();
  const [userName, setUserName] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      await signIn(userName);
      onAfterAuth();
    }
  };
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles} contentLabel="Game Result">
      <Label>What's your nickname?</Label>
      <Input type="text" placeholder="Enter Nickname" value={userName} onChange={(e) => setUserName(e.target.value)} />

      <CloseButton onClick={onRequestClose}>
        <CloseIcon />
      </CloseButton>
      <Button onClick={handleAuth}>Continue</Button>
    </ReactModal>
  );
};
