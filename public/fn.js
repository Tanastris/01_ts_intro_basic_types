"use strict";
function greet(name, weekDay) {
    console.log('Hello', name, weekDay);
}
greet('James', 5);
// parasyti funkcija sum(4,5 ir grazina ju suma)
function sum(one, two) {
    return one + two;
}
// pasiimti reiksmes ir prompt() ir gauti suma
const pirmas = prompt('ivesk pirmaji skaiciu');
const antras = prompt('ivesk antraji skaiciu');
let num1 = Number(pirmas);
let num2 = Number(antras);
const suma = sum(num1, num2);
console.log('suma ===', suma);
function makePrice(number, currency = '$') {
    return `$${number.toFixed(2)}`;
}
makePrice(50);
