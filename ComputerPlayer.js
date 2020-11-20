let Player = require('./Player.js');

class ComputerPlayer extends Player {
    static get MOVE_AS_STRING() { 
        return  ["Rock", "Paper", "Scissors"];
    }

    static computerCount=1;

    constructor(){
        super("Computer "+ComputerPlayer.computerCount, ComputerPlayer.MOVE_AS_STRING[ Math.trunc(Math.random()*3) ]);
        ComputerPlayer.computerCount++;
    }
}

module.exports = ComputerPlayer;