{
    let a = 10;
    const b = 20;
    let x = { value1:a, value2:b};
    let y = x;
    y.value1 = 20;
    x = { value1: 5, value2: 10 };
    let c = x.value1 + x.value2;
    let d = y.value1 + y.value2;
    let value = a + b + c + d;
    console.log(value);
}