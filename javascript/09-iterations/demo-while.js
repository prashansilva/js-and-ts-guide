// while-demo.js
console.log("=== While loop ===");

// Example 1: simple counter
let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}

// Example 2: iterate array with while
console.log("\nIterating array:");
const fruits = ["apple", "banana", "cherry"];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// Example 3: break condition
console.log("\nBreak when number found:");
const numbers = [3, 6, 9, 12];
let j = 0;
while (j < numbers.length) {
    if (numbers[j] === 9) {
        console.log("Found 9!");
        continue;
    }
    j++;
}
