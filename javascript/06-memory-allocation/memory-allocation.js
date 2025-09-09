// memory-allocation-demo.js
// 🔹 Demonstration of JavaScript Memory Allocation

console.log("===== PRIMITIVE TYPES (Stack Memory) =====");

// Primitive types are stored in the stack
let num1 = 10;
let num2 = num1; // Copy value
console.log("Before change -> num1:", num1, "num2:", num2);

// Change num1
num1 = 20;
console.log("After change -> num1:", num1, "num2:", num2);
// ✅ num2 remains 10 because primitive is copied by value

console.log("\n===== REFERENCE TYPES (Heap Memory) =====");

// Reference types are stored in the heap, variable stores a reference
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // Copy reference
console.log("Before change -> obj1:", obj1, "obj2:", obj2);

// Change obj1
obj1.age = 26;
console.log("After obj1.age change -> obj1:", obj1, "obj2:", obj2);
// ✅ obj2 also sees the change because both reference the same object

// Reassign obj1 to a new object
obj1 = { name: "Bob", age: 30 };
console.log("After obj1 reassignment -> obj1:", obj1, "obj2:", obj2);
// ✅ obj2 still points to old object

console.log("\n===== ARRAY MEMORY =====");

let arr1 = [1, 2, 3];
let arr2 = arr1; // Copy reference
console.log("Before push -> arr1:", arr1, "arr2:", arr2);

// Modify arr2
arr2.push(4);
console.log("After arr2.push -> arr1:", arr1, "arr2:", arr2);
// ✅ Both changed because arrays are reference types

// Break the reference using spread operator
let arr3 = [...arr1];
arr3.push(5);
console.log("After copying with spread -> arr1:", arr1, "arr3:", arr3);
// ✅ arr1 unaffected by arr3 changes

console.log("\n===== FUNCTION MEMORY (Reference Behavior) =====");

function changeObj(o) {
    o.value = 100;
}

let data = { value: 50 };
console.log("Before function call:", data);
changeObj(data);
console.log("After function call:", data);
// ✅ Functions can modify reference types

console.log("\n===== END OF MEMORY DEMO =====");
