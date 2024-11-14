let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const genCompChoices = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

const drawGame = () => {
    console.log("Match Draw!!!");
    msg.innerText = "Draw 😇. Play again...";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("user wins 🎉");
        msg.textContent = "You win 🎉";
    }else {
        console.log("computer wins 🎉");
        msg.textContent = "You loose 😢";
    }
}

const playGame = (userChoice) => {
    console.log(`User choice cliked with id: ${userChoice}`);
    // Generate computer choices
    const computerChoice = genCompChoices();
    console.log(`Computer choice: ${computerChoice}`);

    let userWin = true;
    if (userChoice === computerChoice){
        drawGame();
    }else {
        showWinner(userWin)
        if(userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            userWin = computerChoice === "rock" ? false : true;
        }
    }
    

};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});