const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const main = document.querySelector("main");
const container = document.querySelector(".gestures_container");
const score = document.querySelector(".score");
const round = document.querySelector(".round");



let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;




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
   
    body.classList.remove("flash-win");
    body.classList.remove("flash-lose");


        //compare the two selections
        // paper > rock
        
        if(a == paper && b == rock){

          playerScore++;
          body.classList.add("flash-win");
        }else if (b == paper && a == rock){

            computerScore++;
            body.classList.add("flash-lose");
        }
        //scissors > paper
        if(a == scissors && b == paper){
 
            playerScore++;
            body.classList.add("flash-win");


        }else if (b == scissors && a == paper){
        
            computerScore++;
            body.classList.add("flash-lose");

        }
        //rock > scissors
        if(a === rock && b === scissors){
       
            playerScore++;
            body.classList.add("flash-win");

        }else if (b === rock && a === scissors){
          
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

//nextRound function initate another game
//another round in 2s
//setTimeout(function, milliseconds)
//reverse animate the gestures
//bring back the choice container



function gameplay(){
    btns.forEach(addEventListener('click', (e) => {

        container.classList.remove("enter-animate-container");    

       container.classList.add("animate_container");

        

        //retrive the chosen gesture's class
        btnPressed = e.target.classList[1];
        console.log(btnPressed);

        
        //create elements for gameplay
       
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

        let computerSelection = computerPlay();

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


     

       setTimeout(() => {
        gestureComputer.classList.add("reverse-animate-ai");
        
    }, 1000);

    setTimeout(() => {
        main.removeChild(gestureComputer);

    }, 1600);


    setTimeout(() => {
        gesture.classList.add("reverse-animate-p");
    }, 1000);
    
    setTimeout(() => {
        main.removeChild(gesture);
        container.classList.add("enter-animate-container");    
    }, 1600);

         //hide the choice container


   checkGame();

    }));

}

const wonGame = document.createElement("div");
wonGame.classList.add("finished-game");
const wonGameText = document.createElement("h4");
wonGameText.classList.add("finished-title");
main.appendChild(wonGame);
wonGame.appendChild(wonGameText);



function checkGame(){
    if( roundNumber < 5){
       console.log("nothing")
    }else{
        if (playerScore > computerScore){
            wonGameText.innerText =  "You won! hit the refresh button or F5 to replay.";
            main.removeChild(container);            
        }else if (computerScore > playerScore){
            wonGameText.innerText =  "You lost! hit the refresh button or F5 to replay.";
            main.removeChild(container);            

        }else {
            wonGameText.innerText =  "It's a Draw! hit the refresh button or F5 to replay.";
            main.removeChild(container);            

        }
    }
    
}

gameplay();




