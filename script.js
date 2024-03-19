let scores = [0, 0];
let JogadorAtivo = 0;
let currentScore = 0;
var Points;

const ScoreAtual0 = document.getElementById("current--0");
const ScoreAtual1 = document.getElementById("current--1");
const DiceImage = document.getElementById("ImagemDado");
const HoldBtn = document.getElementById("HoldPoints");
const ScoreTotal0 = document.getElementById("score--0");
const ScoreTotal1 = document.getElementById("score--1");

const roll = document.getElementById("RollDice");
const hold = document.getElementById("HoldPoints");

function proximoJogador() {
  JogadorAtivo === 0 ? (JogadorAtivo = 1) : (JogadorAtivo = 0);
  currentScore = 0;
  ScoreAtual0.textContent = currentScore;
  ScoreAtual1.textContent = currentScore;
}

roll.addEventListener("click", function () {
  Points = Math.floor(Math.random() * 6) + 1;

  if (Points === 1) {
    proximoJogador();
  } else {
    currentScore += Points;
  }
  if (JogadorAtivo === 0) {
    ScoreAtual0.textContent = currentScore;
  } else {
    ScoreAtual1.textContent = currentScore;
  }
  DiceImage.setAttribute("src", `dice-${Points}.png`);
});

HoldBtn.addEventListener("click", function () {
  if (JogadorAtivo === 0) {
    scores[0] += parseInt(ScoreAtual0.textContent);
    ScoreTotal0.textContent = scores[0];
    if (scores[0] >= 100) {
      alert("The player 1 won");
    }
  } else {
    scores[1] += parseInt(ScoreAtual1.textContent);
    ScoreTotal1.textContent = scores[1];
  }
  if (scores[1] >= 100) {
    alert("The player 2 won");
  }
  proximoJogador();
});
