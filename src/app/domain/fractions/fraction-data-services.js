import {fractions} from "./fraction-data.js";
import {Fraction} from "./fraction.js";

export class FractionDataService {

    constructor() {
        this.allFractions = [];
    }

    loadData() {
        for (const f of fractions) {
            let fraction = new Fraction(f.id, f.source, f.price)
            this.allFractions.push(fraction);
        }
    }
}