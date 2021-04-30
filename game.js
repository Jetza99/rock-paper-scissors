function computerPlay(){


    //generate a random number between 0.0 and 1.0
    //and multiply by 10
    //return value between 1 and 3
    let rand = Math.floor(Math.random()* 3 + 1);

    //check random value
    if(rand == 1) {
        return rock;
    } else if (rand == 2){
        return paper;
    }else if (rand == 3){
        return scissors;
    } else return "falty";

}


function gameRound(a, b){

    //a is playerSelection
    //b is computerSelection
    if(checkSelection(a)){
        //compare the two selections
        // paper > rock
        
        if(a == paper && b == rock){
            return "You win! paper beats rock.";
        }else if (b == paper && a == rock){
            return "You lose! paper beats rock.";
        }
        //scissors > paper
        if(a == scissors && b == paper){
            return "You win! scissors beats paper.";
        }else if (b == scissors && a == paper){
            return "You lose! scissors beats paper.";
        }
        //rock > scissors
        if(a === rock && b === scissors){
            return("You win! rock beats scissors.");
        }else if (b === rock && a === scissors){
            return "You lose! rock beats scissors.";
        }
        if(a == b){
            return "draw!";
        }
    } else {
        return "Enter valid choice";
    }

}

function checkSelection(a){

    if(a === rock || a === paper
        || a === scissors){
            return true;
        }else return false;


}


let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

let computerSelection = computerPlay();
let playerSelection = prompt("Choose: Rock/Paper/Scissors").toUpperCase();


alert(gameRound(playerSelection, computerSelection));