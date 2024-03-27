import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split(''); //split the string into an array of characters

    // Swapping mechanism
    const leftHand = characters[leftIndex];

    // assign the left index value the right index value
    characters[leftIndex] = characters[rightIndex];

    // assign the right index value the leftHand
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
