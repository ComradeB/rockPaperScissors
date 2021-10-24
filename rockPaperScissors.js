let options = ['rock','paper','scissors'];
let message;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    return prompt('Enter rock, paper or scissors below').toLowerCase();
}

function playRound(playerSelection,computerSelection) {
  
  playerSelection = playerPlay();
  while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
    alert('Invalid Entry');
    playerSelection = playerPlay();
  }
  
  console.log(`You have selected ${playerSelection}.`);


  computerSelection = computerPlay();
  console.log(`The computer has selected ${computerSelection}`);
  
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You win! Rock beats scissors.');
    return ++playerScore;
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose! Paper beats rock.');
    return ++computerScore;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win! Paper beats rock.');
    return ++playerScore;
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You lose! Scissors beat paper.');
    return ++computerScore;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You lose! Rock beats scissors.');
    return ++computerScore;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You win! Scissors beats paper.');
    return ++playerScore;
  }
  else if (playerSelection === computerSelection) {
    return console.log('Tie game!');
  }
   

}

function game() {
    for (i=0;i<5;i++) {
        playRound();
    }
}

game();

console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}.`);

(playerScore > computerScore)? 
console.log('You win the game!'):
console.log('You lose! Well, either that or it\'s a tie.');

