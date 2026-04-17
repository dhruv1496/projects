let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const userScore = document.querySelector("#user_score");
const compScore = document.querySelector("#comp_score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game draw!, play again";
    msg.style.backgroundColor = "purple";
};

const showWinner = (userWin, user_choice, comp_choice) => {
    if(userWin){
        user_score++;
        userScore.innerText = user_score;
        msg.innerText = `You Win!, your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    } else {
        comp_score++;
        compScore.innerText = comp_score;
        msg.innerText = `You lose!, ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (user_choice) => {
    const compChoice = genCompChoice();

    if(user_choice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(user_choice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(user_choice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice = "rock" ? false : true;
        }

        showWinner(userWin, user_choice, compChoice);
    }
};

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
});