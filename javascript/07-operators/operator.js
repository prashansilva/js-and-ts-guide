// =========================
// 1. Arithmetic Operators
// =========================
console.log("=== Arithmetic Operators ===");

let a = 10;
let b = 3;

console.log("a + b =", a + b);  // Addition
console.log("a - b =", a - b);  // Subtraction
console.log("a * b =", a * b);  // Multiplication
console.log("a / b =", a / b);  // Division
console.log("a % b =", a % b);  // Modulus (remainder)
console.log("a ** b =", a ** b); // Exponentiation

// =========================
// 2. Assignment Operators
// =========================
console.log("\n=== Assignment Operators ===");

let x = 5;
console.log("Initial x =", x);

x += 3; // x = x + 3
console.log("x += 3 →", x);

x -= 2; // x = x - 2
console.log("x -= 2 →", x);

x *= 4; // x = x * 4
console.log("x *= 4 →", x);

x /= 2; // x = x / 2
console.log("x /= 2 →", x);

x %= 3; // x = x % 3
console.log("x %= 3 →", x);

// =========================
// 3. Comparison Operators
// =========================
console.log("\n=== Comparison Operators ===");

console.log("5 == '5' →", 5 == "5");   // true (value only)
console.log("5 === '5' →", 5 === "5"); // false (value + type)
console.log("5 != '5' →", 5 != "5");   // false
console.log("5 !== '5' →", 5 !== "5"); // true

console.log("8 > 5 →", 8 > 5);
console.log("8 < 5 →", 8 < 5);
console.log("5 >= 5 →", 5 >= 5);
console.log("5 <= 8 →", 5 <= 8);

// =========================
// 4. Logical Operators
// =========================
console.log("\n=== Logical Operators ===");

let age = 20;
console.log("age > 18 && age < 30 →", age > 18 && age < 30); // AND
console.log("age > 18 || age > 40 →", age > 18 || age > 40); // OR
console.log("!(age > 18) →", !(age > 18)); // NOT

// =========================
// 5. Unary Operators
// =========================
console.log("\n=== Unary Operators ===");

let num = 5;
console.log("num =", num);

console.log("++num =", ++num); // Pre-increment
console.log("--num =", --num); // Pre-decrement
console.log("typeof num =", typeof num); // Type check

