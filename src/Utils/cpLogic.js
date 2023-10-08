import { randomChoice, winningCombinations } from "./constants";

const cpLogic = (cells) => {

    console.log("hola")

    const mappedCells = cells.map((cell, index) => {
        if (cell === "") {
            return index
        }
    }).filter(x => x)

    let cpPlayedCell = mappedCells[randomChoice(mappedCells)]

    const almostWinningPlayerArrays = []

    const almostWinningCpArrays = []

    winningCombinations.forEach(oneArray => {
        if (oneArray.filter(cell => cells[cell] === "cross").length > 1 &&
            oneArray.some(cell => cells[cell] === "")) {
            almostWinningPlayerArrays.push(oneArray)
        } else if (oneArray.filter(cell => cells[cell] === "circle").length > 1 &&
            oneArray.some(cell => cells[cell] === "")) {
            almostWinningCpArrays.push(oneArray)
        }
    })

    // Defend from a player almost winning array

    if (almostWinningPlayerArrays.length > 0) {
        console.log('almostWinningPlayerArrays', almostWinningPlayerArrays)
        const choosedArrayToBePlayed = almostWinningPlayerArrays[randomChoice(almostWinningPlayerArrays)]
        cpPlayedCell = choosedArrayToBePlayed.find(cell => cells[cell] === "")
    }

    // Finish a computer almost winning array

    if (almostWinningCpArrays.length > 0) {
        console.log('almostWinningCpArrays', almostWinningCpArrays)
        const choosedArrayToBePlayed = almostWinningCpArrays[randomChoice(almostWinningCpArrays)]
        cpPlayedCell = choosedArrayToBePlayed.find(cell => cells[cell] === "")
    }

    return cpPlayedCell
};

export { cpLogic };