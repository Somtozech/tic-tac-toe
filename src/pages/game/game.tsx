import {
  Cell,
  GameBoard,
  PlayerInfo,
  PlayerInfoContainer,
  Row,
  Container,
  GameBoardContainer,
  GameCover,
} from "../../components/game";
import {GameResultModal} from "../../components/gameModal";
import {XSVG, OSVG} from "../../icons";
import useGame, {Player} from "../../hooks/useGame";
import {useNavigate, useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {CopyToClipboardButton} from "../../components/copyToClipBoard";

const getCellColor = (value: string) => {
  if (value === "X") return "#fed750";
  if (value === "O") return "#4a16a9";

  return "inherit";
};

const getCellIcon = (value: string) => {
  if (value === "X") return <XSVG />;

  if (value === "O") return <OSVG />;

  return <span></span>;
};

function GamePage() {
  const {gameId} = useParams();
  const navigate = useNavigate();

  const {gameData, saveGame} = useGame(gameId);
  const {getUser} = useAuth();

  const board = gameData?.board || [];
  const {user} = getUser();
  const opponent = gameData?.players.find(({uid}) => uid !== user?.uid) as Player;
  const currentPlayer = gameData?.players.find(({uid}) => uid === gameData.currentPlayer) as Player;

  const handleCellClick = (index: number) => {
    if (!user) return;
    if (gameData?.status === "ended" || gameData?.currentPlayer !== user?.uid) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = gameData?.players.find(({uid}) => uid === user?.uid)?.symbol as string;

    saveGame(gameData, user, newBoard);
  };

  if (!user) {
    return null;
  }

  if (gameData?.players.length !== 2) {
    return (
      <Container>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{color: "#fff", fontSize: 20, marginBottom: 30}}>Share this link with a friend</h1>
          <CopyToClipboardButton textToCopy={`${window.location.origin}/join/${gameId}`} />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <GameCover>
        <div>
          <PlayerInfoContainer>
            <h1 style={{textAlign: "center", fontWeight: "bold"}}>
              {user.uid === gameData?.currentPlayer ? "Your Turn" : ""}
            </h1>
            <PlayerInfo>
              <p style={{fontSize: 12, fontWeight: "lighter", marginBottom: "5px"}}>You</p>
              <h1 style={{marginBottom: 20}}>{user.displayName}</h1>
              <XSVG height="50" width="50" />
            </PlayerInfo>
          </PlayerInfoContainer>
        </div>
        <GameBoardContainer>
          <GameBoard>
            <Row>
              {[0, 1, 2].map((value) => (
                <Cell style={{backgroundColor: getCellColor(board[value])}} onClick={() => handleCellClick(value)}>
                  {getCellIcon(board[value])}
                </Cell>
              ))}
            </Row>
            <Row>
              {[3, 4, 5].map((value) => (
                <Cell style={{backgroundColor: getCellColor(board[value])}} onClick={() => handleCellClick(value)}>
                  {getCellIcon(board[value])}
                </Cell>
              ))}
            </Row>
            <Row>
              {[6, 7, 8].map((value) => (
                <Cell style={{backgroundColor: getCellColor(board[value])}} onClick={() => handleCellClick(value)}>
                  {getCellIcon(board[value])}
                </Cell>
              ))}
            </Row>
          </GameBoard>
        </GameBoardContainer>
        <PlayerInfoContainer>
          <h1 style={{textAlign: "center", fontWeight: "bold"}}>
            {opponent.uid === gameData?.currentPlayer ? `${opponent?.nickname ?? "opponent"}'s Turn` : ""}
          </h1>
          <PlayerInfo>
            <p style={{fontSize: 12, fontWeight: "lighter", marginBottom: "5px"}}>Opponent</p>
            <h1 style={{marginBottom: 20}}>{opponent?.nickname ?? ""}</h1>
            <OSVG height="50" width="50" />
          </PlayerInfo>
        </PlayerInfoContainer>
      </GameCover>

      <GameResultModal
        currentPlayer={currentPlayer.symbol}
        winner={gameData.winner}
        onRequestClose={() => {
          navigate("/");
        }}
        isOpen={gameData.status === "ended"}
      />
    </Container>
  );
}

export default GamePage;
