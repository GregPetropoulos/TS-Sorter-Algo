"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        // Swapping Mechanism
        const leftHand = this.data[leftIndex];
        // assign the left index value the right index value
        this.data[leftIndex] = this.data[rightIndex];
        // assign the right index value the leftHand
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
