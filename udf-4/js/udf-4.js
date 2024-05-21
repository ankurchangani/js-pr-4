
rectangle = (l, h) => {
    let area;
    area = l * h
    return area;
}

let l = 5;
let h = 10;

let area = rectangle(l, h);

document.getElementById("rec").innerHTML = area;