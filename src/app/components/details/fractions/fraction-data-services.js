import {fractions} from "./fraction-data.js";
import {Fraction} from "./fraction.js";

export class FractionDataService {

    constructor() {
        this.allFractions = [];
    }

    loadData() {
        for (const f of fractions) {
            let fraction = new Fraction(f.id, f.source, f.name, f.price)
            this.allFractions.push(fraction);
        }
    }

    getFractionBySource(source) {
        this.loadData();
        const fraction = this.allFractions.find((f) => f.source === source);
        // console.log('Found FRACTION: ', fraction)
        return fraction;
    }
}