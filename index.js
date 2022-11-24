const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function getWinner(applicants, winnerObject) {
    let keysArr = Object.keys(applicants)
    let winner = keysArr[getRandomNumberInRange(0, keysArr.length)]
    let result = {
        ...winnerObject,
        ...applicants[winner]
    }
    return result
}

console.log(getWinner(winnerApplicants, todaysWinner))