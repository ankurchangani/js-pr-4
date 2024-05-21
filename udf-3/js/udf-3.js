
triangle = (l, b) => {
    let area;
    area = (l * b) / 2
    return area;
}

let l = 7;
let b = 70;

let area = triangle(l , b);

document.getElementById("tri").innerHTML = area;