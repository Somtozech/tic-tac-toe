import {useState} from "react";
import {styled} from "styled-components";
import {useNavigate} from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import {AuthModal} from "../../components/authModal";
import useGame from "../../hooks/useGame";

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

function HomePage() {
  const {getUser} = useAuth();
  const navigate = useNavigate();
  const {createGame} = useGame();
  const [isOpen, setAuthModalOpen] = useState(false);
  const handlePlayGame = () => {
    const {user} = getUser();
    if (!user) {
      return setAuthModalOpen(true);
    }

    const gameId = createGame(user);
    setAuthModalOpen(false);
    navigate(`/games/${gameId}`);
  };

  return (
    <Container>
      <img src="/tic-tac-toe.png" style={{height: 300, width: "auto", marginBottom: 30}} />
      <ButtonCover>
        <Button onClick={handlePlayGame}>Play With Friend</Button>
      </ButtonCover>

      <AuthModal isOpen={isOpen} onAfterAuth={handlePlayGame} onRequestClose={() => setAuthModalOpen(false)} />
    </Container>
  );
}

export default HomePage;
