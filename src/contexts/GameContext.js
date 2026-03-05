import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GangeContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Akhil",
    },
    player2: {
      choice: "o",
      name: "Priyanka",
    },
    turn: "x",
  })

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updateBoard,
      turn: game.turn === "X" ? "o" : "x",
    })
  }

  return (
    <GameContext.Provider value={{
      game
    }}>
      {props.children}
    </GameContext.Provider>
  )
}