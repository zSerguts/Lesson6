'use strict';

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  let x = +prompt('Введите x:');
  let y = +prompt('Введите y');
  
  for( let i = 0; i < 50; i++){
      console.log(random(Math.min(x,y), Math.max(x,y)));
  }