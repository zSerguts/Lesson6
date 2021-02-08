'use strict';


const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let number = getRandomInt(100);
let attempts = 10;


function Guess(){
    if (attempts !== 0){
        let temp = prompt('Угадай число от 1 до 100:');
        if (typeof(temp) === 'object'){
            alert('Игра окончена.');
            return 0;   
        }
        else if (isNumber(temp) === true){
            temp = parseInt(temp);
            if (temp > number){
                attempts--;
                alert("Загаданное число меньше. Попыток осталось: "+attempts);
                return Guess();
            } else if (temp < number){
                attempts--;
                alert('Загаданное число больше. Попыток осталось: '+attempts);
                return Guess();
            } else if (temp === number) {
              alert('Поздравляю, Вы угадали!!!');
              if (confirm('Хотите сыграть ещё?') === true){
                attempts = 10;
                number = getRandomInt(100);
                return Guess();
              } else{
                  alert('Спасибо за игру!');
                  return 0; 
              }
            }
        } else {
            alert('Введи число.');
            return Guess();
        }
    } else {
        if (confirm('Попытки закончились. Хотите сыграть ещё?') === true){
            attempts = 10;
            return Guess();
        }   else {
            alert('Спасибо за игру!');
            return 0;
        }
    }
}

Guess();