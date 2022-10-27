export class CalculatorForPerformance {
    performance;
    play;
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }
    get amount() {
        throw new Error('Tipo desconocido');
    }
    get volumeCredits() {
    }
}
