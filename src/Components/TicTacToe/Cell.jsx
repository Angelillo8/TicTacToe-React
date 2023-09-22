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
                if (cells[position] === "") {
                    if (player === "circle") {
                        event.target.firstChild.classList.add("circle")
                        handleCellChange("circle")
                        setPlayer("cross")
                        if (player !== cpPlayer) {
                            setTimeout(() => setCpTurn(++cpTurn), 1000)
                        }
                    }
                    else {
                        event.target.firstChild.classList.add("cross")
                        handleCellChange("cross")
                        setPlayer("circle")
                        if (player !== cpPlayer) {
                            setTimeout(() => setCpTurn(++cpTurn), 1000)
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

    return (
        <div className="cell" id={position} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;