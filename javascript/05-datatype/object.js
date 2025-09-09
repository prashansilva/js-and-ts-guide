// ===============================
// Object Demo in JavaScript
// ===============================

// 1. Creating objects
let person = {
    name: "Alice",
    age: 30,
    isStudent: true
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);
console.log("Is student?", person.isStudent);
console.log("");

// 2. Changing properties
person.age = 31;
console.log("Person after changing age:", person);
console.log("");

// 3. Adding new properties
person.country = "USA";
console.log("Person after adding country:", person);
console.log("");

// 4. Methods in objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    start: function() {
        console.log("The car has started");
    },
    honk: function() {
        console.log("Beep beep!");
    }
};

console.log("Car object:", car);
car.start();
car.honk();
console.log("");

// 5. Looping through objects
let student = {
    name: "Bob",
    age: 20,
    grade: "A"
};

console.log("Looping through student object:");
for (let key in student) {
    console.log(key + ":", student[key]);
}
console.log("");

// 6. Nested objects
let classroom = {
    name: "Math 101",
    teacher: {
        name: "Mr. Smith",
        age: 40
    },
    students: ["Alice", "Bob", "Charlie"]
};

console.log("Classroom object:", classroom);
console.log("Teacher name:", classroom.teacher.name);
console.log("Second student:", classroom.students[1]);
console.log("");

// 7. Practical example: book
let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 500,
    readBook: function() {
        console.log(`Reading ${this.title} by ${this.author}`);
    }
};

console.log("Book object:", book);
book.readBook();
console.log("");

// 8. Deleting a property
delete person.isStudent;
console.log("Person after deleting isStudent:", person);
