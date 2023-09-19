import { useState } from 'react';
import './TicTacToe.css';
import Cell from './Cell';

const TicTacToe = () => {

    const randomChoice = (arrayToChoose) => {
        return Math.floor(Math.random() * arrayToChoose.length)
    }

    const circleOrCross = ["circle", "cross"]
    const [cells, setCells] = useState(["","","","","","","","",""])
    const [player, setPlayer] = useState(circleOrCross[(randomChoice(circleOrCross))])

    const message = "It is now " + player + "'s turn."

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="board">
                {cells.map((cell, index) => 
                <Cell
                    key={index}
                    position={index}
                    cell={cell}
                    setCells={setCells}
                    player={player}
                    setPlayer={setPlayer}
                />)}
            </div>
            <button className="reset">Reset</button>
        </div>
    )
}

export default TicTacToe;