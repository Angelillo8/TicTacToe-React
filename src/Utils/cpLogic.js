import { randomChoice, winningCombinations } from "./constants";

const cpLogic = (cells) => {

    const mappedCells = cells.map((cell, index) => {
        if (cell === "") {
            return index
        }   
    }).filter(x => x)

    const cpPlayedCell = mappedCells[randomChoice(mappedCells)]

    // console.log('mappedCells', mappedCells)

    // console.log('cpPlayedCell', cpPlayedCell)

    return cpPlayedCell
};

export {cpLogic};