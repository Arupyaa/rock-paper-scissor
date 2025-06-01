const display = document.querySelector("#display");
const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissor = document.querySelector("#scissor");

let roundCount = 0;
let score = {
    humanScore: 0,
    ComputerScore: 0
}










function playGame(humanChoice) {

    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);


    if (roundCount >= 5) {
        if (score.humanScore == score.ComputerScore) {
            display.innerHTML += `<br>It's a tie ${score.humanScore} to ${score.ComputerScore}`;
        }
        else if (score.humanScore > score.ComputerScore) {
            display.innerHTML += `<br>Human wins ${score.humanScore} to ${score.ComputerScore}`;
        }
        else {
            display.innerHTML += `<br>Computer wins ${score.ComputerScore} to ${score.humanScore}`;
        }
        roundCount = 0;
        score.ComputerScore = 0;
        score.humanScore = 0;
    }



}


function playRound(humanChoice, computerChoice) {
    display.innerHTML = `Human: ${humanChoice} Computer: ${computerChoice} `;

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissor") {
        score.humanScore++;
        display.innerHTML += `Human wins`;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        score.humanScore++;
        display.innerHTML += `Human wins`;

    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        score.humanScore++;
        display.innerHTML += `Human wins`;

    }
    else if (humanChoice == computerChoice) {
        display.innerHTML += `It's a tie!`;

    }
    else {
        score.ComputerScore++;
        display.innerHTML += `Computer wins`;
    }

    roundCount++;
}




function getComputerChoice() {
    let guess = getRandomIntegearInclusive(0, 2);
    //rock:0 paper:1 scissor:2
    let result;
    switch (guess) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissor";
            break;
    }
    return result;
}

function getRandomIntegearInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

button_rock.addEventListener("click", function () { playGame("rock"); });
button_paper.addEventListener("click", function () { playGame("paper"); });
button_scissor.addEventListener("click", function () { playGame("scissor"); });
