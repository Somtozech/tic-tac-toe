import {User} from "firebase/auth";
import {getDatabase, ref, set, onValue, update, child, push} from "firebase/database";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {calculateWinner} from "../utils/calculateWinner";

export interface Player {
  uid: string;
  nickname: string | null;
  symbol: "X" | "O";
}

interface GameData {
  uid: string;
  players: Player[];
  board: string[];
  currentPlayer: string;
  winner: string;
  status: "created" | "playing" | "ended";
}

const useGame = (gameId?: string) => {
  const navigate = useNavigate();
  const [gameData, setGameData] = useState<GameData | null>(null);

  useEffect(() => {
    if (!gameId) return;
    const db = getDatabase();
    const gameRef = ref(db, `games/${gameId}`);

    onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      const result = calculateWinner(data.board);

      if (result) {
        const updateData = {
          ...data,
          status: "ended",
          winner: data?.players.find(({symbol}: Player) => symbol === result)?.uid ?? "tie",
        };
        update(ref(db), {
          [`/games/${gameId}`]: updateData,
        });

        return setGameData(updateData);
      }
      setGameData(data);
    });
  }, [gameId, navigate]);

  const createGame = (player: User): string => {
    const db = getDatabase();
    const newGameId = push(child(ref(db), "games")).key;

    set(ref(db, `games/${newGameId}`), {
      uid: newGameId,
      status: "created",
      board: Array(9).fill(""),
      currentPlayer: player.uid,
      players: [{uid: player.uid, nickname: player.displayName, symbol: "X"}],
    });

    return newGameId as string;
  };

  const joinGame = (game: GameData, player: User) => {
    const db = getDatabase();

    if (!game) return;

    if (game.players.length === 2) {
      return alert("Cannot Join Game");
    }

    game.players.push({uid: player.uid, nickname: player.displayName, symbol: "O"});
    game.status = "playing";

    update(ref(db), {
      [`/games/${game.uid}`]: game,
    });
  };

  const saveGame = (game: GameData, currentPlayer: User, board: string[]) => {
    const db = getDatabase();

    update(ref(db), {
      [`/games/${game.uid}`]: {
        ...game,
        board,
        currentPlayer: game.players.find(({uid}) => currentPlayer.uid !== uid)?.uid,
      },
    });
  };

  return {createGame, saveGame, joinGame, gameData};
};

export default useGame;
