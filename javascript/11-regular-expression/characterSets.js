// Character sets and ranges
console.log(/[aeiou]/.test("sky"));     // false
console.log(/[a-z]/.test("apple"));   // true

console.log(/[0-9]/.test("Room 101"));  // true
console.log(/[A-Z]/.test("Hello"));     // true

console.log(/[^aeiou]/.test("a"));      // false
console.log(/[^aeiou]/.test("b"));      // true
