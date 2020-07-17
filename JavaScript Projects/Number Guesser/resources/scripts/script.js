let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generate a number between 0 - 9
const generateTarget = () => {
    return (Math.floor(Math.random() * 10));
};
//Checking the guess to see who is closer to the target number. human wins in case of draw
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
};
//assigning the winner of the game and awarding update to score for winner
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

//Advancing the round number after each one
const advanceRound = () => currentRoundNumber++;

