import { cpLogic } from '../../Utils/CPLogic';
import './TicTacToe.css';


const Cell = ({ position, cell, setCells, cells, player, setPlayer, lock, gameMode, cpPlayer }) => {

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
                if (cpPlayer === player) {
                    // cpLogic(cells)
                    cpLogic
                }
                else {
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
        console.log('modifiedCells', modifiedCells)
    };

    return (
        <div className="cell" id={position} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;