// Quantifiers
console.log(/a*/.test(""));          // true
console.log(/a+/.test(""));       // true
console.log(/ba?d/.test("bad"));     // true
console.log(/ba?d/.test("bd"));      // true
console.log(/a{3}/.test("aaaa"));     // true
console.log(/a{2,4}/.test("aaaa"));  // true
