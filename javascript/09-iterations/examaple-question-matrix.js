// Q1
// Right Triangle Pattern
/*
        *
        **
        ***
        ****
        *****
*/

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {

        if( j <= i) {
            row += "*";
        }
    }
    console.log(row);
}

// Q2
// Pyramid Pattern
/*
    *
   ***
  *****
 *******
*********
*/

const n = 5; // number of rows

for (let i = 1; i <= n; i++) {
    // Use a single inner loop to handle both spaces and stars
    let row = "";
    // total characters in each row = n - i spaces + (2*i -1) stars
    for (let j = 1; j <= n + i - 1; j++) {
        if (j <= n - i) {
            row += " "; // leading spaces
        } else {
            row += "*"; // stars
        }
    }
    console.log(row);
}
