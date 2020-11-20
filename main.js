let Game = require('./Game.js');
let Player = require('./Player.js');
let ComputerPlayer = require('./ComputerPlayer.js');

let comp1=new ComputerPlayer();
let comp2=new ComputerPlayer();
let game=new Game(comp1, comp2);

for (let i = 0; i<10; i++){
    game.playTheGame();
    comp1.newMove();
    comp2.newMove();
}

console.log(comp1.name," won ", comp1.winCount," times!");
console.log(comp2.name," won ", comp2.winCount," times!");


// let playerMove = String(process.argv[2]).split("=")[1];

// let thisGame = new Game( new Player('Tim', playerMove), new ComputerPlayer() );
// thisGame.playTheGame();

