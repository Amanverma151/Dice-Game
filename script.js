'use strict';

var globalScore, roundScore, activePlayer,gamePlaying;

init();
//DOM manipulation can be done with help of document
//querySelector can be used to select the id and class 

// .textContent is used to change the only text not HTML on the webpage

// document.querySelector('#current--' + activePlayer).textContent=dice; // setter
/**
 * since active player is set to 0 therrfore we can change the text of the player that will be active at the time of execution
to change the HTML content using document we have to use the innerHTML property and it has to be a string
 
 */
// document.querySelector('#current--' + activePlayer).innerHTML=  "<b>" +  dice + "</b>"; // this will make the round number appear bold 

/**
 * .querySelector is also used to get the value fron the webpage and store it to a variable(getter)
 */
// var x= document.querySelector("#score--0").textContent; // getter 
//console.log(x); 


/**
 * .querySelector is also used to change the css property of the webpage
 * using .style.property_name="value";
 */




/**
 * Event can only be happened when the execution stack is empty
 * "Event Listener" is a function that reacts to an event syntax is : .addEventListener('type of event(for eg. click),name of function that will be called')
 * function that is not called by us but by the event listener is called "callback function"
 * Anonynms function- no name directly defined inside the DOM 
 * document.querySelector.addEventListener('.btn-roll',function()
 * {
 * ......
 * }) 
 * 
 */

// for roll-dice button
document.querySelector(".btn--roll").addEventListener('click', function () {


    if(gamePlaying)
    {
//floor function will reture the largest integer less than or equal to 
    /**
     * Since we wanted the dice to generate random number between 1-6 therefore we multiply
     * the random function with 6 and add 1 to it so that it does not produces 0
     */
     var dice = Math.floor(Math.random() * 6) + 1;

     // to display the dice
     var dicedom = document.querySelector(".dice")
     dicedom.style.display = "block";
 
     // to sync the image with the number generated 
     dicedom.src = "dice-" + dice + ".png";
     // var x= dice;
     // console.log(x);
 
     //to update the values to the round score
 
     if (dice !== 1) {
         roundScore += dice;
         document.querySelector("#current--" + activePlayer).textContent = roundScore;
 
     }
     else {
 
 
         nextPlayer();
 
     }
    }

    

})


// for hold button
document.querySelector(".btn--hold").addEventListener("click", function () {
    
    if(gamePlaying)
    {

        //add round scores to the global scores
    globalScore[activePlayer] += roundScore;
    document.querySelector("#score--" + activePlayer).textContent = globalScore[activePlayer];

    // winner 
    if (globalScore[activePlayer] >= 20) {
        document.querySelector("#name--" + activePlayer).textContent = "Winner";
        document.querySelector(".dice").style.textContent = "none";
        document.querySelector(".player--" + activePlayer).classList.add("player--winner");
        document.querySelector(".player--" + activePlayer).classList.remove("player--active");
        gamePlaying=false;
    }

    else {
        nextPlayer();
    }
    }
    
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";





    /**
     *  ".classList" function is used to add,remove and toggle classes between the elements
     */

    // document.querySelector(".player--0").classList.remove("player--active");
    // document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.toggle("player--active"); // to change the background properties of the activeplayer
    document.querySelector(".player--1").classList.toggle("player--active");



    document.querySelector(".dice").style.display = "none";

}


// for new game button
document.querySelector(".btn--new").addEventListener("click", init);


function init() {
    globalScore = [0, 0];
    roundScore = 0;
    gamePlaying=true;
    // active player variable to keep track of the player that is rolling the dice can be 0 or 1.
    // initially setting it to 0
    activePlayer = 0;

    document.querySelector(".dice").style.display = "none";
    document.getElementById("score--0").textContent = "0";
    document.getElementById("score--1").textContent = "0";
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.querySelector("#name--0").textContent="Player 1";
    document.querySelector("#name--1").textContent="Player 2";
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");



    
}

/**
 * "State variable" - this variable tells the condition of the system
 */