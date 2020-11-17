var randomNumber = Math.floor(Math.random() * 500) + 1;
var guesses = document.querySelector('.guesses')
var lastResult = document.querySelector('.lastResult')
var lowOrhigh = document.querySelector('.lowOrhigh')
var guessSubmit = document.querySelector('.guessSubmit')
var guessField = document.querySelector('.guessField')
var guessCount = 1;
var resetButton;

guessField.focus(); // focus cursor on input box where you input guesses

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses: '
    }
    guesses.textContent += userGuess + ' ';
    guesses.style.backgroundColor = 'blue';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congrats! You got it right!'
        lastResult.style.backgroundColor = 'green'
        lowOrhigh.textContent = ''
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game Over!'
        lowOrhigh.textContent = ''
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!'
        lastResult.style.backgroundColor = 'red'
        if (userGuess < randomNumber) {
            lowOrhigh.textContent = 'Last guess was too low!'
        } else if (userGuess > randomNumber) {
            lowOrhigh.textContent = 'Last guess was too high!'
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disable = true;
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game'
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame () {
    guessCount = 1

    var resetParas = document.querySelectorAll('.resultParas p')
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = '#12aab4'
    guesses.style.backgroundColor = '#12aab4'
    
    randomNumber = Math.floor(Math.random() * 500) + 1;
}