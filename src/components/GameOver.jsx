export default function GameOver({ winner, restart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ? <p>{winner} is the winner</p> : <p>it's a draw!</p>}
            <p><button onClick={restart}>rematch</button></p>
        </div>
    )

}