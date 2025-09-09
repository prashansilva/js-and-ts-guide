console.log("===== VAR vs LET vs CONST =====");

// 1. Scope Demonstration
function scopeTest() {
    if (true) {
        var varVariable = "I am VAR (function scoped)";
        let letVariable = "I am LET (block scoped)";
        const constVariable = "I am CONST (block scoped)";
    }

    console.log(varVariable); // ✅ Works (function scope)
    // console.log(letVariable);   // ❌ Error (block scope)
    // console.log(constVariable); // ❌ Error (block scope)
}
scopeTest();

console.log("\n------------------------------");

// 2. Redeclaration
var a = 10;
var a = 20; // ✅ Allowed
console.log("var redeclared:", a);

let b = 30;
// let b = 40; // ❌ Error: Identifier 'b' has already been declared
b = 40; // ✅ Reassignment allowed
console.log("let reassigned:", b);

const c = 50;
// const c = 60; // ❌ Error: Identifier 'c' has already been declared
// c = 60;       // ❌ Error: Assignment to constant variable
console.log("const fixed:", c);

console.log("\n------------------------------");

// 3. Hoisting
console.log("var before declaration:", x); // ✅ Undefined (hoisted)
var x = 100;

// console.log("let before declaration:", y); // ❌ ReferenceError
let y = 200;

// console.log("const before declaration:", z); // ❌ ReferenceError
const z = 300;

console.log("After declaration:", x, y, z);

console.log("\n------------------------------");

// 4. Reference types with const
const person = { name: "Alice", age: 25 };
console.log("Before mutation:", person);

// Allowed: mutating object properties
person.age = 26;
console.log("After mutation:", person);

// ❌ Not allowed: reassigning the object
// person = { name: "Bob", age: 30 };

console.log("\n===== END OF DEMO =====");
