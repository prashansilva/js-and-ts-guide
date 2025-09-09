var value = 5;
{
    let a = 20;
    let b = a;
    a = 15;
    let c = a + b;
    value = a + b + c;

}
console.log("Value:", value);