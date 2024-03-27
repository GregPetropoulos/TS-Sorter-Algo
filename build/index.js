"use strict";
// * BASIC BUBBLE SORT IN TYPESCRIPT WITH ARRAYS, STRINGS, LINKEDLIST
// Bubble sort - take in an array of values if the item to the left is greater than item to the right swap positions
Object.defineProperty(exports, "__esModule", { value: true });
/*
 SET UP
 1.Created a index.ts
 2.Commands to work directly node , no need for browser
 3.COMMAND: `tsc index.ts` , this will generate build file index.js
 4.Created a src folder and put index.ts into it
 5.Create build folder not in src folder
 6.COMMAND: `tsc --init` Creates a tsconfig.json for complier setup
 7. In tsconfig.json uncomment outDir and point to build folder
 8. In tsconfig.json uncomment rootDir and point to src folder
 9. COMMAND: `tsc -w` compiles and watches to make sure the build folder gets updated  so we dont have to keep running tsc
----------
Need to actually run the index.js file not just compile it
10. Open additional terminal
11. COMMAND:  `node build/index.js`, to run file and console.log should show up but this needs better tooling see next step.
----------
12. Make it easier with package.json get rid of second terminal and stop 1st terminal
13. In the same terminal running the compiler after it's stopped create package.json
14. COMMAND npm init -y
15. COMMAND: npm install nodemon concurrently
16.In package.json going to run 3 scripts to compile and run code
17. "scripts":{
            "start:build":"tsc -w",
            "start:run":"nodemon build/index.js",
            "start":"concurrently npm:start:*"
      },
18.COMMAND: npm start
 */
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// ==============
// ARRAY OF NUMBERS
// ==============
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// ==============
// CHARACTER STRINGS
// ==============
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// ==============
// LINKED LIST
// ==============
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
