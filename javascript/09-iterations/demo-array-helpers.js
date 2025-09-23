// array-helpers-demo.js
console.log("=== Array iteration helpers ===");

const numbers = [1, 2, 3, 4, 5];

// Example 1: forEach
console.log("forEach:");
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

// Example 2: map
console.log("\nmap (double each number):");
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Example 3: filter
console.log("\nfilter (keep even numbers):");
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// Example 4: reduce
console.log("\nreduce (sum all numbers):");
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// Example 5: some
console.log("\nsome (any number greater than 4?):");
console.log(numbers.some(num => num > 4));

// Example 6: every
console.log("\nevery (are all numbers > 0?):");
console.log(numbers.every(num => num > 0));

// Example 7: find
console.log("\nfind (first number greater than 2):");
console.log(numbers.find(num => num > 2));

// Example 8: findIndex
console.log("\nfindIndex (first number equal to 3):");
console.log(numbers.findIndex(num => num === 3));
