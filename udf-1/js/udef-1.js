let time = 11;

function greeting(ankur) {
    document.getElementById("grt").innerHTML = ankur;
}

switch (time) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        greeting("Good Night");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        greeting("Good Morning");
        break;
    case 12:
        greeting("Good Afternoon");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        greeting("Good Afternoon");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        greeting("Good Evening");
        break;
    default:
        console.log("invalid");
        break;
}
