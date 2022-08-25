// на занятии 

let index = 10;
if(index > 5  || index <= 10){ 
    console.log('Первый блок')
} else if(index > 0 && index < 5) 
{    console.log('Второй блок');
} else if (index !=10) {
    console.log('Третий блок');
};


let index2 = 50;
if(index2 > 50 && index2 < 60){
    console.log('Первый блок')
} else if(index2 >= 40 || index2 <= 50) 
{    console.log('Второй блок');
} else if (index2 !=50) {
    console.log('Третий блок');
};

let index3 = '20';
if(index3 > 10 && index3 < 20){
    console.log('Первый блок')
} else if(index3 === 20) 
{    console.log('Второй блок');
} else if(index3 != 21 || index3 == 20) {
    console.log('Третий блок');
};


const dog = 5;
const cat = '5';
dog === cat ? (console.log("привет")) : (console.log('пока'));


let num = 2;
switch (num) {
    case 1 : console.log('winter')
    break;
    case 2 : console.log('spring')
    break;
    case 3 : console.log('summer')
    break;  
    case 4 : console.log('autumn')
    break;  
    default: 'not found'
break;
}

// Home task

// task1 вариант 1
let result = 'test';

if (result == 'тест'){ 
    console.log('Неверно')
} else if (result == 'test'){
    console.log('Верно')
} else {
    console.log('Нет совпадений')
};

// task1 вариант 2
let res = 'тест';
res == 'test' ? (console.log('Верно')) : (console.log('Не верно'));

// task 2
let age;
age = 18;

if(age == 18){
    console.log('Возраст совпал')
} else if(age > 18 && age < 30) {
    console.log('Категория - 1');
} else if (age >= 30) {
    console.log('Возраст пользователя подходящий для приема на работу');
}
    else {console.log('Возраст не задан');
}

// task 3 вариант 1

let varA = 1;
let varB = 3;

if (varA <= 1 && varB >= 3){
    console.log(varA + varB);
} else {
    console.log (varA - varB);
}

let varC = 0;
let varD = 6;

if (varC <= 1 && varD >= 3){
    console.log(varC + varD);
} else {
    console.log (varC - varD);
}

let varE = 3;
let varF = 5;

if (varE <= 1 && varF >= 3){
    console.log(varE + varF);
} else {
    console.log (varE - varF);
}


//task 3 вариант 2

let varyA = 1;
let varyB = 3;
varyA <= 1 && varyB >= 3 ? console.log(varyA + varyB) : (console.log(varyA - varyB));

let varyC = 0;
let varyD = 6;
varyC <= 1 && varyD >= 3 ? console.log(varyC + varyD) : (console.log(varyC - varyD));

let varyE = 3;
let varyF = 5;
varyE <= 1 && varyF >= 3 ? console.log(varyE + varyF) : (console.log(varyE - varyF));


//task 4 вариант 1

let month = 8;

if (month >= 1 && month <= 2 || month == 12){
    console.log('Зима');
}
else if (month >= 3 && month <= 5){
    console.log('Весна');
}
else if (month >=6 && month <= 8){
    console.log('Лето');
}
else if (month >= 9 && month <= 11){
    console.log('Осень');
}
else if (month == null) {
    console.log('Месяц не задан');
}
else if (month <1 || month > 12){
    console.log('Месяц задан неверно');
}
else if (month % 1 !== 0){
    console.log('Месяц задан неверно');
}


//task 4 вариант 2

let month2 = 4.5;

switch (month2) {
    case 1: console.log('Зима');
    break;
    case 2: console.log('Зима');
    break;
    case 3: console.log('Весна');
    break;  
    case 4: console.log('Весна');
    break;
    case 5: console.log('Весна');
    break;
    case 6: console.log('Лето');
    break;
    case 7: console.log('Лето');
    break;
    case 8: console.log('Лето');
    break;
    case 9: console.log('Осень');
    break;
    case 10: console.log('Осень');
    break;
    case 11: console.log('Осень');
    break;
    case 12: console.log('Зима');
    break;
    default: console.log('Месяц не задан/Месяц задан неверно');
    break;
}

// task 5
// не предусмотрены варианты написания edge или EDGE,
// для них надо добавлять || в условия if/else или дополнительные case/break

  let browser = 'Edge'; 
  switch (browser){
    case 'Edge': console.log("You've got the Edge!");
    break;
    case 'Chrome': console.log('Okay we support this browser too');
    break;
    case 'Firefox': console.log('Okay we support this browser too');
    break;
    case 'Safari': console.log('Okay we support this browser too');
    break;
    case 'Opera': console.log('Okay we support this browser too');
    break;
    default: console.log('We hope that this page looks ok!');
  }   