
/*
INTERFACES VS ABSTRACT CLASSES
INTERFACES:
  1. Sets up a contract between different classes
  2. Use when we have very different objects that want to work together
  3. Promotes loos coupling

  ABSTRACT CLASSES/INHERITANCE 
  1. Sets up a contract between different classes
  2. Use when we are trying to build up a definition of an object
  3. Strongly couples classes together
*/




/*
ABSTRACT CLASS RULES
 This needs to be an abstract class and is a parent (super) only but can allow child classes to inherit it's method
1. Cant be used to create an object directly (no new up)
2. Only used as a parent class
3. Can contain real implementation for some methods
4. The implemented methods can refer to other methods that dont actually exist yet (we still have to provide names and types for the unimplemented methods)
5. Can make child classes promise to implement some other method
 */

// We need to make an agreement that the child component of Sorter will implement length(), compare(), swap()
export abstract class Sorter {
  // We need to type out this method that the child will need to use
  // These methods do not exist in this class but will when the child implements them and are required
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    // destructure length of array
    const { length } = this;

    // Nested loops
    for (let i = 0; i < length; i++) {
      // j<length-i-1 ensures we have the right most value in correct location
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// Bad Sorter not generic enough
// class Sorter {
//   // collection: number[];
//   // constructor(collection: number[]) {
//   //   this.collection = collection;
//   // }
//   // shorten up code above with modifier below

//   constructor(public collection: number[] | string) {}

//   // Implements though bubble sort
//   sort(): void {
//     // destructure length of array
//     const { length } = this.collection;

//     // Nested loops
//     for (let i = 0; i < length; i++) {
//       // j<length-i-1 ensures we have the right most value in correct location
//       for (let j = 0; j < length - i - 1; j++) {
//         // BAD CODE IF COLLECTIONS IS ARRAY OF NUMBERS

//         // Type guard need to restore access to the array methods in a number[] not needing to be shared with string via union |
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             // SWAPPING LOGIC
//             const leftHand = this.collection[j];
//             // The left hand side is assigned to the right value
//             this.collection[j] = this.collection[j + 1];
//             // The right hand value is assigned to the leftHand
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         // BAD CODE IF COLLECTIONS IS A STRING  SORT LOGIC
//         // Type guard for the string type, TS will only allow you to restore access to primitives with typeof and could not use instanceof here thats why both type guards have different syntax
//         if(typeof this.collection==='string'){

//         }
//       }
//     }
//   }
// }
