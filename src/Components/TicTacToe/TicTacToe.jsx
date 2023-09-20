import { useEffect, useState } from 'react';
import './TicTacToe.css';
import Cell from './Cell';

const TicTacToe = () => {

    const randomChoice = (arrayToChoose) => {
        return Math.floor(Math.random() * arrayToChoose.length)
    }

    const [gameMode, setGameMode] = useState("twoPlayers")

    const onChooseModeChange = (event) => {
        setGameMode(event.target.value)
    }
    // This below is the code for the two players and it is working.
    // Let's figure out how to make the Against CP using some of the below
    const circleOrCross = ["circle", "cross"]
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState(circleOrCross[(randomChoice(circleOrCross))])
    const [lock, setLock] = useState(false)
    const [winningMessage, setWinningMessage] = useState(null)

    useEffect(() => {
        checkWinner()
    }, [cells])

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5],
            [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        winningCombinations.forEach(oneArray => {
            let circleWins = oneArray.every(cell => cells[cell] === "circle")
            if (circleWins) {
                setWinningMessage("Circle Wins!")
                setLock(true)
                return
            }
        })

        winningCombinations.forEach(oneArray => {
            let crossWins = oneArray.every(cell => cells[cell] === "cross")
            if (crossWins) {
                setWinningMessage("Cross Wins!")
                setLock(true)
                return
            }
        })

        console.log('winningMessage !== null :>> ', winningMessage !== null);
        console.log('!cells.some(cell => "" === cell) :>> ', !cells.some(cell => "" === cell));
        console.log('!cells.some(cell => "" === cell) && winningMessage !== null :>> ', !cells.some(cell => "" === cell) && winningMessage !== null);

        if (!cells.some(cell => "" === cell) && winningMessage === null) {
            setWinningMessage("It's a draw.")
            setLock(true)
        }

    }

    const message = "It is now " + player + "'s turn."

    const reset = () => {
        setLock(false)
        setCells(["", "", "", "", "", "", "", "", ""])
        setWinningMessage(null)
        setPlayer(circleOrCross[(randomChoice(circleOrCross))])
    }

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe</h1>
            <div>
                <h2>Choose a mode:</h2>
                <input
                    type="radio"
                    name="chooseMode"
                    value="twoPlayers"
                    id="twoPlayers"
                    checked={gameMode === "twoPlayers"}
                    onChange={onChooseModeChange}
                />
                <label htmlFor="regular">Two Players</label>

                <input
                    type="radio"
                    name="chooseMode"
                    value="againstCP"
                    id="againstCP"
                    checked={gameMode === "againstCP"}
                    onChange={onChooseModeChange}
                />
                <label htmlFor="medium">Against CP</label>
            </div>
            <div className="board">
                {cells.map((cell, index) =>
                    <Cell
                        key={index}
                        position={index}
                        cell={cell}
                        cells={cells}
                        setCells={setCells}
                        player={player}
                        setPlayer={setPlayer}
                        lock={lock}
                    />)}
            </div>
            <p>{winningMessage || message}</p>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;