
let options = ["rock", "paper", "scissors"];

let player1 = {
    name: "Chris",
    hand: getHand()
}
let player2 = {
    name: "John",
    hand: getHand()
};

var player1Win = 0;
var player2Win = 0;

function getHand(){
    return options[parseInt((Math.random()*10)%3)];
};

function playRound(player1, player2){
    if     (player1.hand === "rock" && player2.hand === "scissors"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!");
        return player1.name;
    }
    else if(player1.hand === "rock" && player2.hand === "paper"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!");
        return player2.name;
    }
    else if(player1.hand === "paper" && player2.hand === "scissors"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!");
        return player2.name
    }
    else if(player1.hand === "paper" && player2.hand === "rock"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!");
        return player1.name
    }
    else if(player1.hand === "scissors" && player2.hand === "rock"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!");
        return player2.name
    }
    else if(player1.hand === "scissors" && player2.hand === "paper"){
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!");
        return player1.name
    }
    else{
        console.log(player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". It's a tie!");
        return null;
    }
};

function playGame(player1, player2, playUntil){
    while(player1Win < playUntil && player2Win < playUntil){
        var result = playRound(player1, player2);
        if(result===player1.name){
            return player1Win++;
            break;
        }
        else if(result===player2.name){
            return player2Win++;
            break;
        }
        else{
            break;
        }
    }
}

playGame(player1, player2, 2);