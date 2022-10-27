import { CalculatorForPerformance } from "./calculatorForPerformance.js";
class TragedyCalculator extends CalculatorForPerformance {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    }
    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0);
    }
}
class ComedyCalculator extends CalculatorForPerformance {
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    }
    get volumeCredits() {
        let volumeCredits = Math.max(this.performance.audience - 30, 0);
        volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits;
    }
}
