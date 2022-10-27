export class CalculatorForPerformance {
    performance:string;
    play:string;
    constructor(aPerformance:string, aPlay:string) {
        this.performance = aPerformance;
        this.play = aPlay;
    }
    
    get amount():number {
        throw new Error('Tipo desconocido');
    }
    get volumeCredits():number{
        
    }
}

