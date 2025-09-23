// do-while-demo.js
console.log("=== Do...while loop ===");

// Example 1: run at least once
let num = 5;
do {
    console.log(`Value: ${num}`);
    num++;
} while (num < 5);

// Example 2: user input simulation (stop when 'q')
console.log("\nSimulated input (run until match):");
let inputs = ["a", "b", "q"]; // imagine these came from user
let index = 0;
do {
    console.log(`Input: ${inputs[index]}`);
    index++;
} while (inputs[index - 1] !== "q");

// Example 3: sum numbers until limit
let total = 0;
let k = 1;
do {
    total += k;
    console.log(`Added ${k}, total = ${total}`);
    k++;
} while (total < 15);
