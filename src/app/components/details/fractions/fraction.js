//model class for fractions
export class Fraction {

    constructor(id, source, name, price, max, unit) {
        this.id = id;
        this.source = source;
        this.name = name;
        this.price = price;
        this.max = max,
        this.unit = unit,
        this.hatchOpen = false;
        this.isFull = false;
    }
}