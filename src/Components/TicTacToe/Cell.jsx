import './TicTacToe.css';

const Cell = ({position, cell, setCells, player, setPlayer}) => {

    const handleClick = (event) => {
        const cellPlayed = event.target.firstChild.classList.contains("circle") || 
                           event.target.firstChild.classList.contains("cross") 

    console.log('cellPlayed :>> ', cellPlayed);
        if(!cellPlayed) {
            if (player === "circle") {
                event.target.firstChild.classList.add("circle")
                setPlayer("cross")
            }
            else {
                event.target.firstChild.classList.add("cross")
                setPlayer("circle")
            }
        }

    }

    return (
        <div className="cell" id={position} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;