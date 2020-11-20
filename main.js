let Game = require('./Game.js');
let Player = require('./Player.js');
let ComputerPlayer = require('./ComputerPlayer.js');

/*
for (let i = 0; i<10; i++){
    let thisGame = new Game( new ComputerPlayer(), new ComputerPlayer() );
    thisGame.playTheGame();
}
*/


let playerMove = String(process.argv[2]).split("=")[1];

let thisGame = new Game( new Player('Tim', playerMove), new ComputerPlayer() );
thisGame.playTheGame();

