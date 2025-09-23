
// Write a function to check is a given world is a palindrome or not
/*
    Output should be like
    madam is a palindrome
    apple is NOT a palindrome
    level is a palindrome
    hello is NOT a palindrome
    racecar is a palindrome
 */


const wordsArray = ["madam", "apple", "level", "hello", "racecar"];



function isPalindrome(word) {

    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse === word;
}

function printPalindrome(word) {
    if(isPalindrome(word)) {
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} is NOT a palindrome`);
    }
}

for (const word of wordsArray) {
    printPalindrome(word);
}
