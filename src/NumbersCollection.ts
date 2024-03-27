import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    // Swapping Mechanism
    const leftHand = this.data[leftIndex];
    // assign the left index value the right index value
    this.data[leftIndex] = this.data[rightIndex];
    // assign the right index value the leftHand
    this.data[rightIndex] = leftHand;
  }
}
