import {styled} from "styled-components";
import {AuthModal} from "../../components/authModal";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useGame, {Player} from "../../hooks/useGame";

export const Container = styled.div`
  background-color: #361484;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonCover = styled.div`
  padding: 5px;
  margin-top: 30px;
  border: 1px dashed #fff;
  border-radius: 30px;
  cursor: pointer;
`;

export const Button = styled.div`
  color: #fff;
  border-radius: 35px;
  padding: 15px 40px;
  text-align: center;
  font-weight: medium;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(228, 30, 118, 1) 0%, rgba(138, 81, 239, 1) 84%);
`;

function JoinGamePage() {
  const {gameId} = useParams();
  const {gameData} = useGame(gameId);
  const {getUser} = useAuth();
  const navigate = useNavigate();
  const {joinGame} = useGame();
  const [isOpen, setAuthModalOpen] = useState(false);
  const {user} = getUser();
  const opponent = gameData?.players.find(({uid}) => uid !== user?.uid) as Player;

  const handleJoinGame = () => {
    if (!gameData) {
      return alert("Game Not Found");
    }

    const {user} = getUser();
    if (!user) {
      return setAuthModalOpen(true);
    }

    joinGame(gameData, user);
    setAuthModalOpen(false);
    navigate(`/games/${gameId}`);
  };

  return (
    <Container>
      <h1 style={{color: "#fff", fontSize: 20}}>{opponent?.nickname} wants to play with you!</h1>
      <ButtonCover>
        <Button onClick={handleJoinGame}>Join Game</Button>
      </ButtonCover>

      <AuthModal isOpen={isOpen} onAfterAuth={handleJoinGame} onRequestClose={() => setAuthModalOpen(false)} />
    </Container>
  );
}

export default JoinGamePage;
