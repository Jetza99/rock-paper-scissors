const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const container = document.querySelector(".gestures_container");
const score = document.querySelector(".score");
const round = document.querySelector(".round");


let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

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
   

        //compare the two selections
        // paper > rock
        
        if(a == paper && b == rock){
          //  return "You win! paper beats rock.";
          playerScore++;
          body.classList.add("flash-win");
        }else if (b == paper && a == rock){
            //return "You lose! paper beats rock.";
            computerScore++;
            body.classList.add("flash-lose");
        }
        //scissors > paper
        if(a == scissors && b == paper){
            //return "You win! scissors beats paper.";
            playerScore++;
            body.classList.add("flash-win");


        }else if (b == scissors && a == paper){
            //return "You lose! scissors beats paper.";
            computerScore++;
            body.classList.add("flash-lose");

        }
        //rock > scissors
        if(a === rock && b === scissors){
           // return("You win! rock beats scissors.");
            playerScore++;
            body.classList.add("flash-win");

        }else if (b === rock && a === scissors){
           // return "You lose! rock beats scissors.";
            computerScore++;
            body.classList.add("flash-lose");

        }
        if(a == b){
            score.innerHTML = `${playerScore} VS ${computerScore}`;
            roundNumber++;
            round.innerHTML = `ROUND ${roundNumber}`;
            return;
        }
   

    score.innerHTML = `${playerScore} VS ${computerScore}`;
    roundNumber++;
    round.innerHTML = `ROUND ${roundNumber}`;






}


let computerSelection = computerPlay();

    btns.forEach(addEventListener('click', (e) => {
        //add animate_container to animate the container exiting
        container.classList.add("animate_container");
        
        //retrive the chosen gesture's class
        btnPressed = e.target.classList[1];
        console.log(btnPressed);

        
       
        const main = document.querySelector("main");
        const gesture = document.createElement("div");
        const btnImg = document.createElement("img");
        const gestureComputer = document.createElement("div");
        const btnImgComputer = document.createElement("img");
        
        
        //extract name from pressBtn(event target) and produce elements using playerSelection
        let playerSelection = btnPressed.substr(btnPressed.indexOf('-') + 1, btnPressed.length);
        console.log(playerSelection);

        

        //insert inside html <img> with the corresponding choice (+animation from left to right)
        //for both the player's side and the computer

        gesture.classList.add("gesture-div");
        btnImg.setAttribute('src', `icons/${playerSelection}.svg`);
        btnImg.classList.add("gesture_img");

        console.log(computerSelection);

        gestureComputer.classList.add("gesture-computer");
        btnImgComputer.setAttribute('src', `icons/${computerSelection}.svg`);
        btnImgComputer.classList.add("gesture-computer-img");
        
        

        //increase the score for the winning side
        //(optional)
        //change bg color for the body to red or green, depends on if the player
        //have won the round or not
        //increase the round number

        gameRound(playerSelection, computerSelection);


        main.appendChild(gesture);
        gesture.appendChild(btnImg);
        main.appendChild(gestureComputer);
        gestureComputer.appendChild(btnImgComputer);
   
        

         //hide the choice container
         btns.forEach(addEventListener('animationend', () => {
            container.classList.add("hide");
        }));

    }));







//bring back the choice container
//repeat





























