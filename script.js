// Declarando variáveis com metodos de seleção
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

// Adicionando eventos de clique aos botões
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    // Garantir que pegamos o ID do botão, não do ícone
    userChoice = e.currentTarget.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

// Função para gerar a escolha do computador
function generateComputerChoice() {
  const choices = ['pedra', 'papel', 'tesoura'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Função para obter o resultado
function getResult() {
  if (computerChoice === userChoice) {
    result = 'Empate!';
  } else if (
    (computerChoice === 'pedra' && userChoice === 'tesoura') ||
    (computerChoice === 'papel' && userChoice === 'pedra') ||
    (computerChoice === 'tesoura' && userChoice === 'papel')
  ) {
    result = 'Você perdeu!';
  } else {
    result = 'Você ganhou!';
  }
  resultDisplay.innerHTML = result;
}
