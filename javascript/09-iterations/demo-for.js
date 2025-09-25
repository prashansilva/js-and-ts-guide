// for-demo.js
console.log("=== Classic for loop ===");

const numbers = [10, 20, 30, 40, 50];

// Example 1: iterate with index
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index: ${i}, Value: ${numbers[i]}`);
}

// Example 2: reverse iteration
console.log("\nReverse iteration:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// Example 3: skip numbers using step
console.log("\nSkip every second number:");
for (let i = 0; i < numbers.length; i += 2) {
    console.log(numbers[i]);
}


const numbers = [10, 20, 30, 40, 50];

let changeNumbers = [];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if( numbers[i] % 2 === 0 ) {
        count = count + numbers[i];
    }
}
console.log(changeNumbers);
