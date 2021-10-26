let options = ['rock','paper','scissors'];
let message;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const results = document.querySelector('.results');
const gameOver = document.createElement('p');
const resultTally = document.createElement('p');
const playAgain = document.createElement('button');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => { 
  playerSelection = 'rock';
  playRound();
  if (playerScore === 5 || computerScore === 5) {

    if (playerScore > computerScore) {
    gameOver.textContent = 'Excellent work, you win.';
    results.appendChild(gameOver);
    }
    else {
      gameOver.textContent = 'You lose.';
      results.appendChild(playAgain);
    }
  
    playAgain.textContent = 'Play again';
    results.appendChild(playAgain);
    
  }  
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  playRound();

  if (playerScore === 5 || computerScore === 5) {

    if (playerScore > computerScore) {
    gameOver.textContent = 'Excellent work, you win.';
    results.appendChild(gameOver);
    }
    else {
      gameOver.textContent = 'You lose.';
      results.appendChild(playAgain);
    }
  
    playAgain.textContent = 'Play again';
    results.appendChild(playAgain);
    playAgain.addEventListener('click')
    
  }  
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  playRound();

  if (playerScore === 5 || computerScore === 5) {

    if (playerScore > computerScore) {
    gameOver.textContent = 'Excellent work, you win.';
    results.appendChild(gameOver);
    }
    else {
      gameOver.textContent = 'You lose.';
      results.appendChild(playAgain);
    }
  
    playAgain.textContent = 'Play again';
    results.appendChild(playAgain);
    
  }  
}); 


function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
} 

function playRound() {
      computerSelection = computerPlay();

      const divGame = document.querySelector('.selections'); 
      const selections = document.createElement('p');
      selections.textContent = `You have selected ${playerSelection}. The computer has selected ${computerSelection}.`;
      divGame.appendChild(selections);

      const roundResult = document.createElement('p');

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You win! Rock beats scissors.';
    divGame.appendChild(roundResult);
    return ++playerScore;
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You lose! Paper beats rock.';
    divGame.appendChild(roundResult);
    return ++computerScore;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You win! Paper beats rock.';
    divGame.appendChild(roundResult);
    return ++playerScore;
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You lose! Scissors beat paper.';
    divGame.appendChild(roundResult);
    return ++computerScore;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You lose! Rock beats scissors.';
    divGame.appendChild(roundResult);
    return ++computerScore;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    divGame.innerHTML = '';
    roundResult.textContent = 'You win! Scissors beats paper.';
    divGame.appendChild(roundResult);
    return ++playerScore;
  }
  else if (playerSelection === computerSelection) {
    divGame.innerHTML = '';
    roundResult.textContent = 'Tie game!';
    return divGame.appendChild(roundResult);
  }

resultTally.textContent = `You have ${playerScore} points and the computer has ${computerScore} points.`;
results.appendChild(resultTally);

}





  
  