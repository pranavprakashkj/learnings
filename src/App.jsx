import Players from "./components/Players"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
import { useState } from "react"

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function derivedActivePlayer(gameTurn) {
  let curPlayer = 'X';
  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    curPlayer = 'O';
  }
  return curPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combi of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combi[0].row][combi[0].column]
    const secondSquare = gameBoard[combi[1].row][combi[1].column]
    const thirdSquare = gameBoard[combi[2].row][combi[2].column]

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      // console.log("firstSquare", firstSquare);
      winner = players[firstSquare];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurn) {

  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;

  }

  return gameBoard;
}



function App() {
  const [gameTurn, setGameTurn] = useState([])
  const [players, setPlayers] = useState(PLAYERS)
  const activePlayer = derivedActivePlayer(gameTurn)

  let gameBoard = deriveGameBoard(gameTurn);

  const winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurn.length === 9 && !winner;

  function HandlePlayer(rowIndex, colIndex) {

    setGameTurn((prevState) => {
      // console.log('prevState', prevState)
      const curPlayer = derivedActivePlayer(prevState)
      const updatedState = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer }, ...prevState,
      ]
      return updatedState;

    })
  }

  function HandleRestart() {

    setGameTurn([]);
    // gameBoard = INITIAL_GAME_BOARD;
  }

  function HandlePlayerNameChange(symbol, name) {
    setPlayers(prevState => {
      return {
        ...prevState,
        [symbol]: name
      }
    })

  }

  // console.log('prevState', gameBoard, winner)

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name={PLAYERS.X} symbol='X' activePlayer={activePlayer === 'X'} onPlayerChange={HandlePlayerNameChange} />
          <Players name={PLAYERS.O} symbol='O' activePlayer={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} restart={HandleRestart} />}
        <GameBoard onSelectPlayer={HandlePlayer} player={activePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
