document.addEventListener('DOMContentLoaded', function () {
	const choices = ['rock', 'paper', 'scissors'];
  
	document.getElementById('rock').addEventListener('click', () => playGame('rock'));
	document.getElementById('paper').addEventListener('click', () => playGame('paper'));
	document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
  
	function playGame(playerChoice) {
	  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	  const result = getResult(playerChoice, computerChoice);
  
	  document.getElementById('result').innerText = result;
	}
  
	function getResult(player, computer) {
	  if (player === computer) {
		return 'It\'s a tie!';
	  } else if ((player === 'rock' && computer === 'scissors') ||
				 (player === 'paper' && computer === 'rock') ||
				 (player === 'scissors' && computer === 'paper')) {
		return 'You win!';
	  } else {
		return 'Computer wins!';
	  }
	}
  });
  