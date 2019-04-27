// ACTIVE PLAYER (FINISHED)
var players = [1, 2];
players[0] = document.getElementById("player1");
players[1] = document.getElementById("player2");
var activePlayer = players[0]


// RANDOM NUMBER - CHANGE DICE (FINISHED)
function randomNumber() {

    return Math.floor(Math.random() * 6) + 1;

}

document.getElementById("rollDiceBtn").addEventListener("click", function(){

    var givenRandomNumber =  document.getElementById("dice").src = "images/dice-" + randomNumber() + ".png";

    if(activePlayer === players[0]){
    
    document.getElementById("player1").className = "active";
    document.getElementById("player2").className = "";
    
    var player1TotalScore = document.getElementById("player1TotalScore");
    var player1PhaseScore = document.getElementById("player1PhaseScore");
    var takePhaseScorePlayer1 = parseInt(player1PhaseScore.innerHTML);

    switch(givenRandomNumber){
        case "images/dice-1.png": 
        
        // IF YOU GET 1 IT'S NEXT PLAYERS TURN AND YOUR PHASE SCORE IS 0

        player1PhaseScore.innerHTML = takePhaseScorePlayer1 * 0;
        activePlayer = players[1];
        document.getElementById("player1").className = "";
        document.getElementById("player2").className = "active";

        break;
        case "images/dice-2.png": 
        
        player1PhaseScore.innerHTML = takePhaseScorePlayer1 + 2;

        break;
        case "images/dice-3.png": 
        
        player1PhaseScore.innerHTML = takePhaseScorePlayer1 + 3;

        break;
        case "images/dice-4.png": 
        
        player1PhaseScore.innerHTML = takePhaseScorePlayer1 + 4;

        break;
        case "images/dice-5.png": 
        
        player1PhaseScore.innerHTML = takePhaseScorePlayer1 + 5;

        break;
        case "images/dice-6.png": 
        
        player1PhaseScore.innerHTML = takePhaseScorePlayer1 + 6;

        break;
    };

} else {

    document.getElementById("player1").className = "";
    document.getElementById("player2").className = "active";
    
    var player2TotalScore = document.getElementById("player2TotalScore");
    var player2PhaseScore = document.getElementById("player2PhaseScore");
    var takePhaseScorePlayer2 = parseInt(player2PhaseScore.innerHTML);

    switch(givenRandomNumber){
        case "images/dice-1.png": 
        
         // IF YOU GET 1 IT'S NEXT PLAYERS TURN AND YOUR PHASE SCORE IS 0

        player2PhaseScore.innerHTML = takePhaseScorePlayer2 * 0;
        activePlayer = players[0];
        document.getElementById("player1").className = "active";
        document.getElementById("player2").className = "";

        break;
        case "images/dice-2.png": 
        
        player2PhaseScore.innerHTML = takePhaseScorePlayer2 + 2;

        break;
        case "images/dice-3.png": 
        
        player2PhaseScore.innerHTML = takePhaseScorePlayer2 + 3;

        break;
        case "images/dice-4.png": 
        
        player2PhaseScore.innerHTML = takePhaseScorePlayer2 + 4;

        break;
        case "images/dice-5.png": 
        
        player2PhaseScore.innerHTML = takePhaseScorePlayer2 + 5;

        break;
        case "images/dice-6.png": 
        
        player2PhaseScore.innerHTML = takePhaseScorePlayer2 + 6;
        
        break;
    };

}

});


// NEW GAME (FINISHED)
var newGame = document.getElementById("newGameBtn");

newGame.addEventListener("click", function(){

    var player1TotalScore = document.getElementById("player1TotalScore");
    var player2TotalScore = document.getElementById("player2TotalScore");
    var player1PhaseScore = document.getElementById("player1PhaseScore");
    var player2PhaseScore = document.getElementById("player2PhaseScore");

    player1TotalScore.textContent = "0";
    player2TotalScore.textContent = "0";
    player1PhaseScore.textContent = "0";
    player2PhaseScore.textContent = "0";

    document.getElementById("player1").className = "active";
    document.getElementById("player2").className = "";

    document.getElementById("player1").innerHTML = "Player1";
    document.getElementById("player2").innerHTML = "Player2";

});


// HOLD BUTTON

document.getElementById("holdBtn").addEventListener("click", function() {

if(activePlayer === players[0]){

    var player1PhaseScore = document.getElementById("player1PhaseScore");
    var player1TotalScore = document.getElementById("player1TotalScore");
    var takeTotalScorePlayer1 = parseInt(player1TotalScore.innerHTML);
    var takePhaseScorePlayer1 = parseInt(player1PhaseScore.innerHTML);
    
    player1TotalScore.innerHTML = takeTotalScorePlayer1 + takePhaseScorePlayer1;

    // IF TOTAL SCORE IS >= 100 YOUR THE WINNER
    if(player1TotalScore.innerHTML >= 100){

        document.getElementById("player1").innerHTML = "WINNER";

        // DISABLE ROLL BUTTON AND HOLD BUTTON...ONLY NEW-GAME BUTTON SHOULD BE AVAILABLE
        // NOT SURE HOW TO DO IT!!!
    
    };

    player1PhaseScore.innerHTML = 0;

    activePlayer = players[1];
    document.getElementById("player1").className = "";
    document.getElementById("player2").className = "active"; 

} else {

    var player2PhaseScore = document.getElementById("player2PhaseScore");
    var player2TotalScore = document.getElementById("player2TotalScore");
    var takeTotalScorePlayer2 = parseInt(player2TotalScore.innerHTML);
    var takePhaseScorePlayer2 = parseInt(player2PhaseScore.innerHTML);
    
    player2TotalScore.innerHTML = takeTotalScorePlayer2 + takePhaseScorePlayer2;

    // IF TOTAL SCORE IS >= 100 YOUR THE WINNER
    if(player2TotalScore.innerHTML >= 100){

        document.getElementById("player2").innerHTML = "WINNER";

        // DISABLE ROLL BUTTON AND HOLD BUTTON...ONLY NEW-GAME BUTTON SHOULD BE AVAILABLE
        // NOT SURE HOW TO DO IT!!!
    };

    player2PhaseScore.innerHTML = 0;

    activePlayer = players[0];
    document.getElementById("player1").className = "active";
    document.getElementById("player2").className = "";

}

});