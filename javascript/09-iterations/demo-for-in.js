// for-in-demo.js
console.log("=== For...in loop ===");

const person = { name: "Alice", age: 25, city: "Colombo" };

// Example 1: object keys
for (const key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
}

// Example 2: nested object
const student = {
    name: "John",
    grades: { math: 90, english: 85 },
    activities: { sport: "football", music: "guitar" }
};

// Loop through top-level keys
for (const key in student) {
    const value = student[key];

    // If the value is an object, loop inside it
    if (typeof value === "object" && value !== null) {
        console.log(`Nested object: ${key}`);
        for (const nestedKey in value) {
            console.log(`  ${nestedKey}: ${value[nestedKey]}`);
        }
    } else {
        // Otherwise just print directly
        console.log(`${key}: ${value}`);
    }
}


// Example 3: array with for...in (not recommended, but demo)
console.log("\nArray with for...in:");
const colors = ["red", "green", "blue"];
for (const index in colors) {
    console.log(`Index: ${index}, Value: ${colors[index]}`);
}
