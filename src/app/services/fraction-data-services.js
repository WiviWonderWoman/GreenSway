import {fractions} from '../data/fraction-data.js'
import {Fraction} from '../models/fraction.js';

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