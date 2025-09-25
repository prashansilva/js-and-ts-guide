// Basic regex matching
const regex = /cat/;

// console.log(regex.test("The cat sleeps"));   // true
// console.log(regex.test("The dog sleeps"));   // false
//
// console.log("hotdog".match(/dog/));          // ["dog"]
// console.log("hello world".search(/world/));  // 6


const regex2 = /c.t/;

console.log(regex2.test("The cat sleeps"));
console.log(regex2.test("cot"));
console.log(regex2.test("ct"));
console.log(regex2.test("cart"));
console.log(regex2.test("tomc1t"));

console.log("Answer:", /[a-c]/.test("JS Regex 101!"));
console.log("Answer:", "JS Regex 101!".match(/ege/g));
console.log("Answer:", /egx/.test("JS Regex 101!"));
console.log("Answer:", /[egx]/.test("JS Regex 101!"));

console.log("Answer:", "JS Regex 101!".replace(/Regex/ , "Function"));

console.log("Answer:", /a{2,}/.test("caaandy and baad"));