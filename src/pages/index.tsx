import {createBrowserRouter} from "react-router-dom";
import HomePage from "./home/home";
import GamePage from "./game/game";
import JoinGamePage from "./join/join";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/join/:gameId",
    element: <JoinGamePage />,
  },
  {
    path: "/games/:gameId",
    element: <GamePage />,
  },
]);
