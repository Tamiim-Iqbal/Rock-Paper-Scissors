let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const botScoreP = document.querySelector("#bot-score");

const genChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};

const drawGame = () => {
    // console.log("Game draw!");
    msg.style.background = "#0e2e53";
    msg.innerText = "It's a Draw!";
};

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreP.innerText = userScore;
        // console.log("You win!");
        msg.style.background = "green";
        // msg.innerText = `You win, your ${userChoice} beats ${botChoice}`;
        msg.innerText = `You win, your ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)}`;

    }
    else
    {
        botScore++;
        botScoreP.innerText = botScore;
        // console.log("You lose!");
        msg.style.background = "red";
        // msg.innerText = `You lost, ${botChoice} beats your ${userChoice}`;
        msg.innerText = `You lost, ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} beats your ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;

    }
};

const playGame = (userChoice) => {
    // console.log("User choice :", userChoice);
    //Generate Computer Choice
    const botChoice = genChoice();
    // console.log("Computer choice:", botChoice);

    if (userChoice === botChoice)
    {
        drawGame();
    }
    else 
    {
        let userWin = true;
        if (userChoice === "rock")
        {
            userWin = botChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper")
        {
            userWin = botChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});