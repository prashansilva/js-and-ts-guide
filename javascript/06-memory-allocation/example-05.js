var value = 5;
{
    let prim = 20;
    const value = prim * 5;
    console.log("Inside block:", value);
}
console.log("Outside block:", value);