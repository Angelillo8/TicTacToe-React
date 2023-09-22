import { useEffect } from 'react';
import { cpLogic } from '../../Utils/cpLogic';
import './TicTacToe.css';


const Cell = ({ position, cell, setCells, cells, player, setPlayer, lock, gameMode, cpPlayer, cpTurn, setCpTurn }) => {

    const handleClick = (event) => {
        if (!lock) {
            if (gameMode === "twoPlayers") {
                if (cells[position] === "") {
                    if (player === "circle") {
                        event.target.firstChild.classList.add("circle")
                        handleCellChange("circle")
                        setPlayer("cross")
                    }
                    else {
                        event.target.firstChild.classList.add("cross")
                        handleCellChange("cross")
                        setPlayer("circle")
                    }
                }
            }
            else {
                let temporaryCells = cells
                if (cells[position] === "") {
                    if (player !== cpPlayer) {
                        if (player === "circle") {
                            event.target.firstChild.classList.add("circle")
                            handleCellChange("circle")
                            setPlayer("cross")
                            setCpTurn(++cpTurn)
                        }
                        else {
                            event.target.firstChild.classList.add("cross")
                            handleCellChange("cross")
                            setPlayer("circle")
                            setCpTurn(++cpTurn)
                        }
                    }
                    else {
                        if (player === "circle") {
                            event.target.firstChild.classList.add("circle")
                            handleCellChange("circle")
                            setPlayer("cross")
                        }
                        else {
                            event.target.firstChild.classList.add("cross")
                            handleCellChange("cross")
                            setPlayer("circle")
                        }
                    }
                }
            }
        }
    }

    const handleCellChange = (playerClass) => {
        const modifiedCells = cells.map((cell, index) => {
            if (index === position) {
                return playerClass
            }
            else {
                return cell;
            };
        });
        setCells(modifiedCells)
    };

    // const handleCpPlayedCellChange = (cpClass, positionCp) => {
    //     const modifiedCellsByCp = cells.map((cell, index) => {
    //         if (index === positionCp) {
    //             return cpClass
    //         }
    //         else {
    //             return cell
    //         }
    //     })
    //     console.log('modifiedCellsByCp', modifiedCellsByCp)
    //     setCells(modifiedCellsByCp)
    // }

    // const cpPlays = (emptyCells) => {
    //     const cpPlayedCell = cpLogic(emptyCells)
    //     const elementPlayed = document.getElementById(cpPlayedCell)
    //     elementPlayed.firstChild.classList.add(cpPlayer)
    //     handleCpPlayedCellChange(cpPlayer, cpPlayedCell)
    // }

    // if (cpTurn === true) {
    //     const cpPlayedCell = cpLogic(cells)
    //     const elementPlayed = document.getElementById(cpPlayedCell)
    //     elementPlayed.click()
    //     // cpPlays(cells);
    //     setCpTurn(false)
    // }

    return (
        <div className="cell" id={position} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;