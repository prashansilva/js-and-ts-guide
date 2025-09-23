// ==========================================
// JavaScript Functions Demo for Beginners
// ==========================================

// 1. Traditional Function (No Parameters)
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Call the function

// ------------------------------------------

// 2. Function with Parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Alice");
greetUser("Bob");

// ------------------------------------------

// 3. Function with Return Value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum:", sum);

// ------------------------------------------

// 4. Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiply:", multiply(4, 5));

// ------------------------------------------

// 5. Arrow Function
const divide = (a, b) => {
    return a / b;
};
console.log("Divide:", divide(10, 2));

// ------------------------------------------

// 6. Simplified Arrow Function (One Line)
const square = x => x * x;
console.log("Square:", square(6));

// ------------------------------------------

// 7. Function Calling Another Function
function greet(name) {
    return "Hello, " + name + "!";
}

function welcomeMessage(user) {
    let message = greet(user);
    console.log(message + " Welcome to our website!");
}

welcomeMessage("Prashan");

// ------------------------------------------

// 8. Function with Default Parameter
function sayHi(name = "Guest") {
    console.log("Hi, " + name + "!");
}
sayHi();         // Uses default
sayHi("Nina");   // Uses provided name

// ------------------------------------------

// 9. Function with Multiple Parameters
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log("Full Name:", fullName("John", "Doe"));

// ------------------------------------------

// 10. Anonymous Function inside setTimeout
setTimeout(function() {
    console.log("This runs after 2 seconds!");
}, 2000);

// ------------------------------------------

// 11. Arrow Function inside setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if (count === 3) {
        clearInterval(intervalId); // Stop after 3 times
    }
}, 1000);

// ==========================================
// End of Demo
// ==========================================
