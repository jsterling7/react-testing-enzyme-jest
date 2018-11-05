export default class BowlingGame {

    constructor() {
        this.runningTotal = 0
    }

    roll(numPins) {
        if(numPins >= 0 && numPins <= 10){
            this.runningTotal += numPins
        }else{
            this.runningTotal = 0
        }
    }

    score() {
        return this.runningTotal
    }

}