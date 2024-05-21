let ode = (number) => {
    let odd = "enter the odd number"
    let even = "enter the even number"

    if (number % 2 == 1) {
        document.querySelector("h1").innerHTML = odd;
    } else {
        document.querySelector("h1").innerHTML = even;

    }

}

let number = 3;
document.querySelector("h2").innerHTML = number;

let Num = ode(number);
