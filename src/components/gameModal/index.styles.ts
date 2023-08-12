import {Styles} from "react-modal";
import styled from "styled-components";

export const modalStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginBottom: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    width: 300,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
