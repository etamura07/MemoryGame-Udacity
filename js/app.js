// List of Cards

let listCards = document.querySelectorAll(".card");
let listIcons = document.querySelectorAll("#icon");

// Variables
let openedCards = [];
let matchedCards = [];
let moves = 0;
let startGame = 0;
let gameInterval;
let clicks = 0;
let time = document.querySelector('.displayTime');
let starsCount = 3;
const spanMoves = document.querySelector(".moves");
const modal = document.querySelector(".modal");


//Results Modal

let resultMoves = document.getElementById("resultMoves");
let resultTime = document.getElementById("resultTime");
let resultStars = document.getElementById("resultStars");

// icons

let iconsArray = ['fa-anchor', 'fa-anchor', 'fa-bicycle', 'fa-bolt', 'fa-cube', 'fa-diamond', 'fa-diamond', 'fa-plane', 'fa-leaf', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-plane', 'fa-cube'];
shuffle(iconsArray);

spanMoves.innerHTML = moves;

addIcons();
// Adding EventListenerClick and functions to all cards
for(let i = 0; i < listCards.length ; i++){

    listCards[i].addEventListener("click",function(){
        
        const currentCard = this;
        const previousCard = openedCards[0];
        listCards[i].classList.add("open","show","disabled");
        
        if(openedCards.length === 1){
    
            listCards[i].classList.add("open","show","disabled");
            openedCards.push(this);

            if(currentCard.innerHTML === previousCard.innerHTML){
                
                currentCard.classList.add("match");
                previousCard.classList.add("match");
                
                matchedCards.push(currentCard,previousCard);
                
                openedCards = [];
            
                movesCount();
                
                stars();
                
                finish();
                
            } else {
                
                openedCards = [];
                
                
                setTimeout(function(){
                previousCard.classList.remove("open","show","disabled");
                currentCard.classList.remove("open","show","disabled");
                }, 400);
                
                movesCount();
                
                stars();
                
            }     
        } else {
            listCards[i].classList.add("open","show");
            openedCards.push(this);
        }
clicks = clicks + 1;
startTimer();        
    })    
};

//Calling Function Restart, when press the icon "restart"...
restart()

//Function, adding eventListenerClick to close modal...
closeModal();

//Restart the Game
function restart(){
    
    const restart = document.getElementById("restart");
    
    restart.addEventListener("click",function(){    
    for(let i = 0; i < listCards.length; i++){
        listCards[i].classList.remove("open","show","match","disabled");
        }
    for(let i = 0; i < listIcons.length; i++){
        listIcons[i].className = "";
        } 
    openedCards = [];    
    shuffle(iconsArray);    
    addIcons();
    moves = 0;
    spanMoves.innerHTML = moves;
    document.getElementById("star1").style.visibility = "visible";  
    document.getElementById("star2").style.visibility = "visible";
    document.getElementById("star3").style.visibility = "visible";
    matchedCards.length = 0;
    time.innerHTML =  "00:00";
    clearInterval(gameInterval);
    clicks = 0;
    starsCount = 3; 
    }); 
}

	function playAgainfn(){
		
		const playAgain = document.getElementById("btnPlayAgain");
		
		playAgain.addEventListener("click",function(){    
		modal.style.display = "none";   
		for(let i = 0; i < listCards.length; i++){
			listCards[i].classList.remove("open","show","match","disabled");
			}
		for(let i = 0; i < listIcons.length; i++){
			listIcons[i].className = "";
			} 
		openedCards = [];    
		shuffle(iconsArray);    
		addIcons();
		moves = 0;
		spanMoves.innerHTML = moves;
		document.getElementById("star1").style.visibility = "visible";  
		document.getElementById("star2").style.visibility = "visible";
		document.getElementById("star3").style.visibility = "visible";
		matchedCards.length = 0;
		time.innerHTML =  "00:00";
		clearInterval(gameInterval);
		clicks = 0;
		starsCount = 3; 
		}); 
	}

//Finish Game
function finish(){
    if(matchedCards.length === listCards.length){
        clearInterval(gameInterval);
        resultMoves.innerHTML = moves;  
        resultTime.innerHTML = time.innerHTML;
        resultStars.innerHTML = starsCount;
        alert("FINISH");
        modal.style.display = "block";
		playAgainfn();
    }
}

// This Function counts moves
function movesCount(){
    moves++;
    spanMoves.innerHTML = moves;
}

// This function hides the stars according to the number of moves
function stars(){
    if(moves === 20){
        document.getElementById("star3").style.visibility = "hidden";
        starsCount = 2;
    };
    if(moves === 25 ){
        document.getElementById("star2").style.visibility = "hidden";
        starsCount = 1;
    };
}

// This Function calling the other Function "setTimeInterval"
function timer() {
    let minutes = 0;
    let seconds = 0;
    gameInterval = setInterval(function () {
        seconds = parseInt(seconds, 10) + 1;
        minutes = parseInt(minutes, 10);
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        time.innerHTML = minutes + ":" + seconds;
    }, 1000);
}

// This Function starts the timer when the player clicks in the card...
function startTimer(){
if(clicks === 1){
    timer();
} 
}

	function restartCloseModal(){
		for(let i = 0; i < listCards.length; i++){
			listCards[i].classList.remove("open","show","match","disabled");
			}
		for(let i = 0; i < listIcons.length; i++){
			listIcons[i].className = "";
			} 
		openedCards = [];    
		shuffle(iconsArray);    
		addIcons();
		moves = 0;
		spanMoves.innerHTML = moves;
		document.getElementById("star1").style.visibility = "visible";  
		document.getElementById("star2").style.visibility = "visible";
		document.getElementById("star3").style.visibility = "visible";
		matchedCards.length = 0;
		time.innerHTML =  "00:00";
		clearInterval(gameInterval);
		clicks = 0;
		starsCount = 3; 
	}

// Function to close Modal
function closeModal(){
    const closeModal = document.querySelector("#close");
    closeModal.addEventListener("click",function(){
    modal.style.display = "none";   
    restartCloseModal();
	})
}

// This Function add icons to cards
function addIcons(){
for(let i = 0; i < listCards.length ; i++){
    listIcons[i].classList.add("fa");
    listIcons[i].classList.add(iconsArray[i]);
}
};

// This function shuffles the icons
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
 
 

