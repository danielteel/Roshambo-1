class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    playTheGame(){
        console.log("");
        console.log("ROCK - PAPER - SCISSORS\n")
        console.log(this.player1.name+" picks "+this.player1.move);
        console.log(this.player2.name+" picks "+this.player2.move);
        console.log("");

        if (this.player1.move===this.player2.move){
            console.log("It's a tie!");
        }else{
            if (this.player1.move==="other"){
                console.log(this.player2.name+" wins!");
            }else if (this.player2.move==="other"){
                console.log(this.player1.name+" wins!");
            }else if (this.player1.move==="rock" && this.player2.move!=="paper"){
                console.log(this.player1.name+" wins!");
            }else if (this.player1.move==="paper" && this.player2.move!=="scissors"){
                console.log(this.player1.name+" wins!");
            }else if (this.player1.move==="scissors" && this.player2.move!=="rock") {
                console.log(this.player1.name+" wins!");
            }else {
                console.log(this.player2.name+" wins!");
            }
        }
        console.log("\n");
    }
}

module.exports = Game;