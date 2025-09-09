// consoleDemo.js
// Demo for everything you can do with console.log in JavaScript

console.log("========== Basic Examples ==========");

// 1. New line (\n)
console.log("Hello\nWorld");
console.log("\n"); // Just an empty line

// 2. Tabs (\t)
console.log("Name:\tJohn\tDoe");
console.log("Age:\t30\tYears");

// 3. Combining tabs and new lines
console.log("Details:\n\tName: John\n\tAge: 30\n\tLocation: Sri Lanka");

// 4. Multiple new lines
console.log("Line 1\n\nLine 2\n\nLine 3");

// 5. Template literals for multi-line strings (ES6)
console.log(`Using Template Literals:
Name: John
Age: 30
Location: Sri Lanka
`);

// 6. Tabs with template literals
console.log(`Using Tabs with Template Literals:
Name:\tJohn
Age:\t30
Location:\tSri Lanka
`);

// 7. String interpolation with variables
const name = "Alice";
const age = 25;
const city = "Colombo";

console.log(`Hello ${name}, you are ${age} years old and live in ${city}.`);

// 8. Aligning text manually using tabs
console.log("Product\t\tPrice\tQuantity");
console.log("Pen\t\t$1.5\t10");
console.log("Notebook\t$3.0\t5");
console.log("Eraser\t\t$0.5\t20");

// 9. Using special characters
console.log("Quotes: \"Double\" and \'Single\'");
console.log("Backslash: \\");

// 10. Combining everything in a formatted table
console.log("\nFormatted Table:");
console.log("Item\t\tQty\tPrice");
console.log("Apple\t\t10\t$2.5");
console.log("Banana\t\t5\t$1.2");
console.log("Cherry\t\t20\t$0.5");

// 11. Fun: Repeat characters
console.log("\nSeparator Line:");
console.log("=".repeat(30));

// 12. Emoji support in console
console.log("Tasks Completed ✅");
console.log("Pending Tasks ❌");

// 13. Multi-line with tab and repeat
console.log(`
Report:
\tTask 1: Done ✅
\tTask 2: Pending ❌
\tTask 3: In Progress ⏳
`.trim());

console.log("\n========== End of Demo ==========");
