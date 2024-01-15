

export default function GameBoard({ onSelectPlayer, board }) {
    // const [gameBoard, setGameBoard] = useState(initialBoard);
    // function HandleSelectSquare(row, col, userValue) {
    //     setGameBoard((prevBoardValue) => {
    //         const updatedBoard = [...prevBoardValue]; //const updatedBoard = [...prevBoardValue.map(innerArray => [...innerArray])];
    //         console.log("updatedBoard", updatedBoard)
    //         updatedBoard[row][col] = userValue;
    //         return updatedBoard;

    //     })
    //     onSelectPlayer();
    // }


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectPlayer(rowIndex, colIndex)}
                                    disabled={playerSymbol != null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>

                        ))}
                    </ol>
                </li>
            ))
            }

        </ol>

    );
}