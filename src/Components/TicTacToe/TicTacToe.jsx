import { useEffect, useState } from 'react';
import './TicTacToe.css';
import Cell from './Cell';
import { randomChoice, winningCombinations } from '../../Utils/constants';
import { cpLogic } from '../../Utils/cpLogic';

const TicTacToe = () => {


    const [gameMode, setGameMode] = useState("twoPlayers")

    const onChooseModeChange = (event) => {
        setGameMode(event.target.value)
        reset()
    }
    // This below is the code for the two players and it is working.
    // Let's figure out how to make the Against CP using some of the below
    const circleOrCross = ["circle", "cross"]
    const cpOrPlayer = ["cp", "player"]
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("cross")
    // const [player, setPlayer] = useState(circleOrCross[(randomChoice(circleOrCross))])
    const [cpPlayer, setCpPlayer] = useState("circle")
    // const [cpPlayer, setCpPlayer] = useState(circleOrCross[(randomChoice(circleOrCross))])
    const [cpTurn, setCpTurn] = useState(0)
    const [lock, setLock] = useState(false)
    const [winningMessage, setWinningMessage] = useState(null)

    useEffect(() => {
        checkWinner(winningCombinations)
    }, [cells])


    useEffect(() => {
        if (!lock && cpTurn > 0) {
            const cpPlayedCell = cpLogic(cells)
            const elementPlayed = document.getElementById(cpPlayedCell)
            elementPlayed.click()
        }
    }, [cpTurn])



    const checkWinner = (winningCombinations) => {

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

        if (!cells.some(cell => "" === cell) && winningMessage === null) {
            setWinningMessage("It's a draw.")
            setLock(true)
        }

    }

    let message = "It is now " + player + "'s turn."

    if (gameMode === "againstCP") {
        if (player === cpPlayer) {
            message = "It is now " + player + "'s (CP) turn."
        }
        else {
            message = "It is now " + player + "'s (you) turn."
        }
    }

    const reset = () => {
        setLock(false)
        setCells(["", "", "", "", "", "", "", "", ""])
        setWinningMessage(null)
        // setPlayer(circleOrCross[(randomChoice(circleOrCross))])
        setPlayer("cross")
        // setCpPlayer(circleOrCross[(randomChoice(circleOrCross))])
        setCpPlayer("circle")
        setCpTurn(0)
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
                        gameMode={gameMode}
                        cpPlayer={cpPlayer}
                        cpTurn={cpTurn}
                        setCpTurn={setCpTurn}
                    />)}
            </div>
            <p>{winningMessage || message}</p>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;