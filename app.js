let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const userCompPara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw. Play again.");
  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, choiceId, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    userCompPara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${choiceId}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (choiceId) => {
  const compChoice = genCompChoice();

  if (choiceId === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (choiceId === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (choiceId === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, choiceId, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
