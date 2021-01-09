function suma(numero1, numero2) {
    return numero1 + numero2;
}

function calculadora(numero1, numero2, callback) {
    return callback(numero1, numero2);
}

console.log(calculadora(4, 5, suma));

function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

