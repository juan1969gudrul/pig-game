import "./style.css";

document.querySelector("#app").innerHTML = `
<main>
  <section class="player player--0 player--active">
    <h2 class="name" id="name--0">Player 1</h2>
    <p class="score" id="score--0">43</p>
    <div class="current">
      <p class="current-label">Current</p>
      <p class="current-score" id="current--0">3</p>
    </div>
  </section>
  <section class="player player--1">
    <h2 class="name" id="name--1">Player 2</h2>
    <p class="score" id="score--1">24</p>
    <div class="current">
      <p class="current-label">Current</p>
      <p class="current-score" id="current--1">5</p>
    </div>
  </section>

  <img src="dice-5.png" alt="Playing dice" class="dice" />
  <button class="btn btn--new">🔄 New game</button>
  <button class="btn btn--roll">🎲 Roll dice</button>
  <button class="btn btn--hold">📥 Hold</button>
</main>
`;

// Variables de estado en JS y selectores DOM
const sectionplayer0 = document.querySelector(".player--0");
const sectionplayer1 = document.querySelector(".player--1");

const Score0 = document.querySelector("#score--0");
const Score1 = document.querySelector("#score--1");

const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const imgDice = document.querySelector(".dice");

let score, currentScore, activePlayer;

const iniData = () => {
  // Inicialización de las variables de estado
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // Inicialización de las variables del DOM
  console.log(Score0, "Score0");
  console.log(Score1, "Score1");
  console.log(currentScore0, "currentScore0");
  console.log(currentScore1, "currentScore1");

  // Actualizar el DOM con los valores iniciales
  Score0.textContent = 0;
  Score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

iniData(); // Llamada a la función
