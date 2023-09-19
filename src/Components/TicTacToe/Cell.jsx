import './TicTacToe.css';

const Cell = ({ position, cell, setCells, cells, player, setPlayer, lock}) => {

    const handleClick = (event) => {
        if (!lock) {
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