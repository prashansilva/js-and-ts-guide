// for-of-demo.js
console.log("=== For...of loop ===");

const fruits = ["apple", "banana", "cherry"];

// Example 1: simple values
for (const fruit of fruits) {
    console.log(fruit);
}

// Example 2: string characters
console.log("\nIterating string:");
for (const char of "HELLO") {
    console.log(char);
}

// Example 3: Set
console.log("\nIterating Set:");
const mySet = new Set([1, 2, 3, 3]); // duplicates ignored
for (const value of mySet) {
    console.log(value);
}

// Example 4: Map
console.log("\nIterating Map:");
const myMap = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of myMap) {
    console.log(`Key=${key}, Value=${value}`);
}

