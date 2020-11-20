class Player{
    constructor(name, move){
        this.name=name;
        this._move='';
        this.move=move;
        this.winCount=0;
    }

    set move(value){
        this._move=String(value).toLowerCase().trim();
        if (this._move!=="rock" && this._move!=="scissors" && this._move!=="paper"){
            this._move="other";
        }
    }
    get move(){
        return this._move;
    }

    newMove(move){
        this.move=move;
    }
}

module.exports = Player;