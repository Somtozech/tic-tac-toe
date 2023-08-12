import styled from "styled-components";

export const Container = styled.div`
  background-color: #361484;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameBoardContainer = styled.div`
  height: 400px;
  width: 400px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='white' stroke-width='2' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 30px;
  padding: 20px;
`;

export const GameCover = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const GameBoard = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  display: grid;
  background-color: #431698;
  overflow: hidden;
  grid-template-rows: repeat(3, 1fr); /* Each row takes equal space */
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Each column takes equal space */
  border-bottom: 5px solid #361484;
  &:last-child {
    border-bottom: 0;
  }
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  border-right: 5px solid #361484;
  padding: 10px;
  &:last-child {
    border-right: 0;
  }
`;

export const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const PlayerInfo = styled.div`
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 40px;
  width: 150px;
  height: 150px;
  color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
