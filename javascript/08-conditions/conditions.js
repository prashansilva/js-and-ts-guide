// conditions-demo.js

// -----------------------------
// 1. Simple if
// -----------------------------
let age = 20;
if (age >= 18 ) {
    console.log("Example 1: You are an adult.");
}

// -----------------------------
// 2. if...else
// -----------------------------
let temperature = 15;
if (temperature > 25) {
    console.log("Example 2: It's hot outside.");
} else {
    console.log("Example 2: It's cool outside.");
}

// -----------------------------
// 3. if...else if...else
// -----------------------------
let marks = 85;
if (marks >= 90) {
    console.log("Example 3: Grade A");
} else if (marks >= 75) {
    console.log("Example 3: Grade B");
} else if (marks >= 50) {
    console.log("Example 3: Grade C");
} else {
    console.log("Example 3: Fail");
}

// -----------------------------
// 4. Nested if
// -----------------------------
let loggedIn = true;
let isAdmin = false;

if (loggedIn) {
    if (isAdmin) {
        console.log("Example 4: Welcome Admin!");
    } else {
        console.log("Example 4: Welcome User!");
    }
} else {
    console.log("Example 4: Please log in first.");
}

// -----------------------------
// 5. if with multiple conditions
// -----------------------------
let hour = 14;
if (hour >= 6 && hour < 12) {
    console.log("Example 5: Good Morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Example 5: Good Afternoon!");
} else {
    console.log("Example 5: Good Evening!");
}

// -----------------------------
// 6. Switch basic example
// -----------------------------
let day = 3;
switch (day) {
    case 1:
        console.log("Example 6: Monday");
        break;
    case 2:
        console.log("Example 6: Tuesday");
        break;
    case 3:
        console.log("Example 6: Wednesday");
        break;
    case 4:
        console.log("Example 6: Thursday");
        break;
    case 5:
        console.log("Example 6: Friday");
        break;
    default:
        console.log("Example 6: Weekend or Invalid day");
}

// -----------------------------
// 7. Switch with fall-through
// -----------------------------
let color = "red";
switch (color) {
    case "red":
    case "blue":
        console.log("Example 7: Primary Color");
        break;
    case "green":
    case "yellow":
        console.log("Example 7: Secondary Color");
        break;
    default:
        console.log("Example 7: Unknown Color");
}

// -----------------------------
// 8. Switch with string cases
// -----------------------------
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Example 8: Red fruit");
        break;
    case "banana":
        console.log("Example 8: Yellow fruit");
        break;
    case "grape":
        console.log("Example 8: Purple fruit");
        break;
    default:
        console.log("Example 8: Unknown fruit");
}

// -----------------------------
// 9. Combining if and switch
// -----------------------------
let userType = "editor";
let action = "delete";

if (userType === "admin") {
    console.log("Example 9: Admin can do anything.");
} else {
    switch (action) {
        case "view":
            console.log("Example 9: Allowed to view content.");
            break;
        case "edit":
            console.log("Example 9: Allowed to edit content.");
            break;
        default:
            console.log("Example 9: Not allowed to perform this action.");
    }
}

// -----------------------------
// 10. Real-world menu example
// -----------------------------
let menuChoice = 2;

switch (menuChoice) {
    case 1:
        console.log("Example 10: Start New Game");
        break;
    case 2:
        console.log("Example 10: Load Game");
        break;
    case 3:
        console.log("Example 10: Settings");
        break;
    case 4:
        console.log("Example 10: Exit");
        break;
    default:
        console.log("Example 10: Invalid choice");
}
