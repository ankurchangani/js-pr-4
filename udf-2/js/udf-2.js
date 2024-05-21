

function Circle(radius) {
    let pie = 3.14;
    let area;
    area = pie * radius * radius;
    return area;
}
let radius = 5;
let area = Circle(radius);
document.getElementById("radius").innerHTML = radius;
document.getElementById("cricle").innerHTML = area;
