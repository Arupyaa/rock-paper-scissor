const display = document.querySelector("#display");
const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissor = document.querySelector("#scissor");

display.textContent = "Enter rock,paper or scissor? : ";
button_rock.addEventListener("click", HumanClicked("rock"));
button_paper.addEventListener("click", HumanClicked("paper"));
button_scissor.addEventListener("click", HumanClicked("scissor"));


playGame();









function playGame()
{
    let score = {
        humanScore:0,
        ComputerScore:0
    }

    for (let round = 0; round < 5; round++) {
        const computerChoice = getComputerChoice();
        //console.log(computerChoice);
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice,score);
    }
    if(score.humanScore>score.ComputerScore)
        console.log("Human wins "+score.humanScore+" to "+score.ComputerScore);
    else if(score.ComputerScore>score.humanScore)
        console.log("Computer wins "+score.ComputerScore+" to " +score.humanScore);
    else
        console.log("It's a tie "+score.humanScore+" to "+score.ComputerScore);


}


function playRound(humanChoice, computerChoice,score) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissor") {
        score.humanScore++;
        console.log("Human wins!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        score.humanScore++;
        console.log("Human wins!");
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        score.humanScore++;
        console.log("Human wins!");
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else {
        score.ComputerScore++;
        console.log("Computer wins!");
    }
}

function HumanClicked(choice)
{

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