'use strict';


const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const number = getRandomInt(100);
function Guess(){
    let temp = prompt('Угадай число от 1 до 100:');
    if (typeof(temp) === 'object'){
        alert('Игра окончена.');
        return 0;
    }
    else if (isNumber(temp) === true){
        temp = parseInt(temp);
        if (temp > number){
            alert('Загаданное число меньше.');
            return Guess();
        } else if (temp < number){
            alert('Загаданное число больше.');
            return Guess();
        } else if (temp === number) {
            alert('Поздравляю, Вы угадали!!!');
            return 0;
        }
    } else {
        alert('Введи число.');
        return Guess();
    }
}

Guess();