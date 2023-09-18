const moves = ['rock', 'paper', 'scissors'];
let round = 0;
let computerScore = 0;
let hummanScore = 0;
const roundNum = document.getElementById('round-num')
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const winner = document.getElementById('winner')


const getComputerChoice = () => {
    let num = Math.floor((Math.random() * 3))
    return moves[num];
}

const playRound = (human, computer) => {
    console.log(human, computer)
    if (human === computer) {
        return 'Tie';
    }
    else if ((human == 'rock' && computer == 'scissors') || (human == 'paper' && computer == 'rock') || (human == 'scissors' && computer == 'paper')) {
        hummanScore++
        return 'Human Wins'
    }
    else if ((computer == 'rock' && human == 'scissors') || (computer == 'paper' && human == 'rock') || (computer === 'scissors' && human == 'paper'))
        computerScore++
    return 'Computer Wins'
}


const getWinner = () => {
    if (hummanScore > computerScore) {
        return 'Human';
    }
    return 'Computer';
}

const game = () => {
    choices.forEach(choice => choice.addEventListener('click', () => {
        round++;
        if (round <= 5) {
            roundNum.textContent = `Round: ${round}`
            result.textContent = `Result: ${playRound(choice.textContent.toLowerCase(), getComputerChoice())}`
        }
        if (round == 5) {
            winner.textContent = `Winner: ${getWinner()}`
        }
    }))
}

game()