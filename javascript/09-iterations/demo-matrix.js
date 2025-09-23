// twoDArrayDemo.js
// ===============================
// DEMO: Working with 2D Arrays in JavaScript
// ===============================

// A 2D array is basically an array of arrays (like a table or grid).
// Example: A 3x3 matrix
const matrix = [
    [1, 2, 3],   // Row 0
    [4, 5, 6],   // Row 1
    [7, 8, 9]    // Row 2
];

// -------------------------------
// 1. Accessing elements
console.log("Single element (row 1, col 2):", matrix[1][2]); // 6

// -------------------------------
// 2. Printing all elements using nested loops
console.log("\nPrinting all elements with row & col indices:");
for (let i = 0; i < matrix.length; i++) {          // rows
    for (let j = 0; j < matrix[i].length; j++) {   // columns
        console.log(`Row ${i}, Col ${j}: ${matrix[i][j]}`);
    }
}

// -------------------------------
// 3. Sum of all elements
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log("\nSum of all numbers:", sum);

// -------------------------------
// 4. Find the maximum element
let max = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
}
console.log("Maximum element:", max);

// -------------------------------
// 5. Print diagonal elements
console.log("\nDiagonal elements:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}

// -------------------------------
// 6. Using for...of for cleaner iteration
console.log("\nUsing for...of:");
for (const row of matrix) {
    for (const value of row) {
        process.stdout.write(value + " "); // print inline
    }
    console.log(); // new line after each row
}

// -------------------------------
// 7. Example: Multiplication table (5x5)
const table = [];
for (let i = 1; i <= 5; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
        row.push(i * j);
    }
    table.push(row);
}

console.log("\n5x5 Multiplication Table:");
console.log(table);


// 8. Square Pattern (5x5)
/*
*****
*****
*****
*****
*****
*/
console.log("1. Square Pattern:");
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
        row += "*";
    }
    console.log(row);
}