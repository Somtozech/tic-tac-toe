import ReactModal from "react-modal";

import {CloseIcon, StarIcon} from "../../icons";
import {CloseButton, modalStyles} from "./index.styles";
import useAuth from "../../hooks/useAuth";

interface GameResultModalProps {
  isOpen: boolean;
  winner: string;
  onRequestClose: () => void;
  currentPlayer: "X" | "O";
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onRequestClose, children}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles} contentLabel="Game Result">
      {children}
      <CloseButton onClick={onRequestClose}>
        <CloseIcon />
      </CloseButton>
    </ReactModal>
  );
};

export const GameResultModal: React.FC<GameResultModalProps> = ({isOpen, onRequestClose, winner}) => {
  const {getUser} = useAuth();
  const {user} = getUser();
  let modalContent;
  if (winner === "tie") {
    modalContent = (
      <>
        <div style={{display: "flex", alignItems: "baseline", marginBottom: 20}}>
          <StarIcon height="25" width="25" />
          <StarIcon />
          <StarIcon height="25" width="25" />
        </div>
        <h2 style={{fontWeight: "bold", marginBottom: 20}}>It's a tie!</h2>
        <p style={{color: "#686c64", marginBottom: 10}}>This match is a</p>
        <h1 style={{color: "#727272", fontSize: 20, fontWeight: "bolder"}}>Draw</h1>
      </>
    );
  } else if (winner === user?.uid) {
    modalContent = (
      <>
        <div style={{display: "flex", alignItems: "baseline", marginBottom: 20}}>
          <StarIcon height="25" width="25" color="#ED8A19" />
          <StarIcon color="#ED8A19" />
          <StarIcon height="25" width="25" color="#ED8A19" />
        </div>
        <h2 style={{fontWeight: "bold", marginBottom: 20}}>Congratulations!</h2>
        <p style={{color: "#686c64", marginBottom: 10}}>You</p>
        <h1 style={{color: "#75d200", fontSize: 20, fontWeight: "bolder"}}>Won</h1>
      </>
    );
  } else {
    modalContent = (
      <>
        <div style={{display: "flex", alignItems: "baseline", marginBottom: 20}}>
          <StarIcon height="25" width="25" />
          <StarIcon />
          <StarIcon height="25" width="25" />
        </div>
        <h2 style={{fontWeight: "bold", marginBottom: 20}}>Oops!</h2>
        <p style={{color: "#686c64", marginBottom: 10}}>You</p>
        <h1 style={{color: "#c20808", fontSize: 20, fontWeight: "bolder"}}>Lose</h1>
      </>
    );
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {modalContent}
    </Modal>
  );
};
