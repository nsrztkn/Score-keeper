const p1Btn = document.querySelector(".p1Btn");
const p2Btn = document.querySelector(".p2Btn");
const resetBtn = document.querySelector(".resetBtn");
const p1Score = document.querySelector("#p1-score");
const p2Score = document.querySelector("#p2-score");
const winningScoreInput = document.querySelector("#winning-score");

let p1ScoreNum = 0;
let p2ScoreNum = 0;
let winningScoreNum = parseInt(winningScoreInput.value);
let isGameOver = false;

winningScoreInput.addEventListener("change", () => {
  winningScoreNum = parseInt(winningScoreInput.value);
});

p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p1ScoreNum++;
    p1Score.textContent = p1ScoreNum;
    if (p1ScoreNum === winningScoreNum && winningScoreNum > 0) {
      isGameOver = true;
      p1Btn.setAttribute("disabled", true);
      p2Btn.setAttribute("disabled", true);
      p1Score.classList.add("winner");
      p2Score.classList.add("loser");
    }
  }
});

p2Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p2ScoreNum++;
    p2Score.textContent = p2ScoreNum;
    if (p2ScoreNum === winningScoreNum && winningScoreNum > 0) {
      isGameOver = true;
      p1Btn.setAttribute("disabled", true);
      p2Btn.setAttribute("disabled", true);
      p2Score.classList.add("winner");
      p1Score.classList.add("loser");
    }
  }
});

resetBtn.addEventListener("click", () => {
  p1ScoreNum = 0;
  p2ScoreNum = 0;
  p1Score.textContent = p1ScoreNum;
  p2Score.textContent = p2ScoreNum;
  isGameOver = false;
  p1Btn.removeAttribute("disabled");
  p2Btn.removeAttribute("disabled");
  p1Score.classList.remove("winner", "loser");
  p2Score.classList.remove("winner", "loser");
});
