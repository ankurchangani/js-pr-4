
ans = () => {
    let area;
    area = a * a + 2 * a * b + b * b;
    return area;
}

let a = 10;
let b = 10;


let area = ans(a, b);
document.querySelector("h1").innerHTML = area;



