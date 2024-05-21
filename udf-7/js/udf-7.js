
convert = (fah) => {
    let a;
    a = (fah - 32) / 1.8;
    return a;
}

fah = 50;
let ce = convert(fah);

document.querySelector("h1").innerHTML = ce;



