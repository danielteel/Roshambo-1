let Player = require('./Player.js');

class ComputerPlayer extends Player {
    static get MOVE_AS_STRING() { 
        return  ["Rock", "Paper", "Scissors"];
    }

    static computerCount=1;

    constructor(){
        super("Computer "+ComputerPlayer.computerCount, null);
        ComputerPlayer.computerCount++;
        this.newMove();
    }

    newMove(){
        this.move=ComputerPlayer.MOVE_AS_STRING[ Math.trunc(Math.random()*3) ];
    }
}

module.exports = ComputerPlayer;