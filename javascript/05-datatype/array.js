// ===============================
// Array Demo in JavaScript
// ===============================

// 1. Creating arrays
let numbers = [10, 20, 30, 40];
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "hello", true];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("Mixed array:", mixed);
console.log("");

// 2. Accessing elements
console.log("First fruit:", fruits[0]); // apple
console.log("Third number:", numbers[2]); // 30
console.log("");

// 3. Changing elements
fruits[1] = "grape";
console.log("Fruits after change:", fruits);
console.log("");

// 4. Array operations
// Adding elements
numbers.push(50);   // add at end
numbers.unshift(5); // add at start
console.log("Numbers after push and unshift:", numbers);

// Removing elements
numbers.pop();   // remove from end
numbers.shift(); // remove from start
console.log("Numbers after pop and shift:", numbers);
console.log("");

// 5. Array length
console.log("Length of fruits array:", fruits.length);
console.log("");

// 6. Looping through arrays
console.log("Looping through numbers array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}:`, numbers[i]);
}
console.log("");

// 7. Practical example: shopping list
let shoppingList = ["milk", "eggs", "bread"];
console.log("Shopping list:", shoppingList);
console.log("First item to buy:", shoppingList[0]);

// Adding an item
shoppingList.push("butter");
console.log("Updated shopping list:", shoppingList);

// Removing the first item
shoppingList.shift();
console.log("Shopping list after removing first item:", shoppingList);
