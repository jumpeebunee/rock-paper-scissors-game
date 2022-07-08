function playGame() {
    const userBtn = document.querySelectorAll('.rpsButton');
    userBtn.forEach((item) => item.addEventListener('click', () => userChoice(item)));
};

function robotChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const getRandomNumber = Math.floor(Math.random() * (rpsChoice.length - 0) + 0);
    return rpsChoice[getRandomNumber];
};

function userChoice(userChoice) {
    const userChoiceValue = userChoice.value;
    getResult(userChoiceValue, robotChoice());
};

function getResult(userValue, robotValue) {

    if (userValue === robotValue) {
        result(0, userValue, robotValue);
        isWinner('It\'s a Draw!');
    } else if (userValue === 'Rock' && robotValue === 'Scissors'
        || userValue === 'Paper' && robotValue === 'Rock'
        || userValue === 'Scissors' && robotValue === 'Paper')
    {
        result(1, userValue, robotValue);
        isWinner('You win!');
    } else {
        result(-1, userValue, robotValue);
        isWinner('You Loose!');
    };
    
};

function result(point, userChoose, robotChooser) {
    const playerScore = document.querySelector('#player-score');
    const handsResult = document.querySelector('#hands');

    playerScore.textContent = Number(playerScore.textContent) + point;
    handsResult.textContent = `👱 ${userChoose} vs 🤖 ${robotChooser}`
};

function isWinner(gameResult) {
    const result = document.querySelector('#result');
    result.textContent = gameResult;
};

function clearScore()  {

    const endGameBtn = document.querySelector('#endGameButton');
    const container  = document.querySelector('.resultContainer');
    const containerChildren = container.children;
    
    for (let key of containerChildren) {
        key.textContent = '';
    };

    endGameBtn.textContent = '🔴';

};

playGame();