// 🔹 Demonstration of JavaScript Data Types

console.log("===== PRIMITIVE TYPES =====");

// 1. Number
let age = 25;
let price = 19.99;
console.log("Number -> age:", age, "price:", price);

// 2. String
let name = "Alice";
let greeting = 'Hello';
let template = `Hi, my name is ${name}`;
console.log("String ->", name, greeting, template);

// 3. Boolean
let isActive = true;
let isComplete = false;
console.log("Boolean ->", isActive, isComplete);

// 4. Null
let emptyValue = null;
console.log("Null ->", emptyValue);

// 5. Undefined
let notAssigned;
console.log("Undefined ->", notAssigned);

// 6. Symbol (unique values)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol -> sym1 === sym2 ?", sym1 === sym2);

// 7. BigInt (large integers beyond Number limit)
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt ->", bigNum);

console.log("\n===== REFERENCE TYPES =====");

// 8. Object
let person = { name: "Bob", age: 30 };
console.log("Object ->", person);

// 9. Array
let colors = ["red", "green", "blue"];
console.log("Array ->", colors);

// 10. Function
function add(x, y) {
    return x + y;
}
console.log("Function -> add(5, 3):", add(5, 3));

// 11. Date
let today = new Date();
console.log("Date ->", today);

// 12. RegExp
let regex = /hello/i;
console.log("RegExp ->", regex.test("Hello World"));

// 13. Map
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log("Map ->", map);

// 14. Set
let set = new Set([1, 2, 3, 3]);
console.log("Set ->", set);

console.log("\n===== TYPE CHECKING =====");
console.log("typeof age:", typeof age);
console.log("typeof name:", typeof name);
console.log("typeof isActive:", typeof isActive);
console.log("typeof emptyValue (null):", typeof emptyValue); // quirk -> "object"
console.log("typeof notAssigned:", typeof notAssigned);
console.log("typeof sym1:", typeof sym1);
console.log("typeof bigNum:", typeof bigNum);
console.log("typeof person:", typeof person);
console.log("typeof colors:", typeof colors);
console.log("typeof add:", typeof add);

console.log("\n===== END OF DEMO =====");
