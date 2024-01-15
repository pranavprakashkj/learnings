import { useState } from "react"

export default function Players({ name, symbol, activePlayer, onPlayerChange }) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function HandleEditClick() {
        setIsEditing(anyName => !anyName)
        if (isEditing) {
            onPlayerChange(symbol, playerName)
        }
    }

    function HandleChange(event) {
        setPlayerName(event.target.value);
    }



    return (
        <li className={activePlayer ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    <input type="text" required Value={playerName} onChange={HandleChange}></input>
                    : <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleEditClick}>{isEditing ? "save" : "edit"}</button>
        </li>
    )
}