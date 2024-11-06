let result_1;
let result_2;
let result_3;
let check;

function verify() {
    let Aa = parseInt(document.getElementById('a').value);
    let Hh = parseInt(document.getElementById('h').value);
    let Rr = parseInt(document.getElementById('r').value);
    let Mm = parseInt(document.getElementById('m').value);
    console.log(Aa, Hh, Rr, Mm)

    if ((Aa ** 3) >= Mm) {
        result_1 = "Жидкость поместится"
        check = true;
        alert
    } else {
        result_1 = "Жидкость не поместится"
        check = false;
    }
    document.getElementById("result_1").value=result_1;
    
    if ((3,14 * Rr * 2 * Hh) >= Mm) {
        result_2 = "Жидкость поместится"
        check = true;
    } else {
        result_2 = "Жидкость не поместится"
        check = false;
    }
    document.getElementById("result_2").value=result_2;

    if (((Aa ** 3) + 3,14 * Rr * 2 * Hh) >= Mm) {
        result_3 = "Жидкость поместится"
        check = true;
    } else {
        result_3 = "Жидкость не поместится"
        check = false;
    }
    document.getElementById("result_3").value=result_3;
}

function send() {
    if (check) {
        document.getElementById("user_enter_1").submit();
    } else {
        alert("Поменяйте параметры.")
    }
}

const verify_me = document.getElementById("verify");
verify_me.addEventListener('click', verify);

const send_me = document.getElementById("send");
send_me.addEventListener('click', send);