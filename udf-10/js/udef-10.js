const swap = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
}

let a = 1;
let b = 10;
document.getElementById("a ans").innerHTML = a;
document.getElementById("b ans").innerHTML = b;
let num  = swap(a, b);

