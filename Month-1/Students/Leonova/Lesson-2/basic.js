// Задача 1

let a = 'test';
if (a == 'test') {
console.log ('Верно');
}
else{
    console.log ('Неверно');
};

// Задача 2 

let age = 18;
if (age == 18) {
     console.log ('Возраст совпал');
}
else if (age > 18 && age < 30) {
    console.log ('категория - 1');
}
else (age > 30) 
{
    console.log ('Возраст пользователя подходящий для приема на работу');

};


// Задача 3

let o = 1;
let b = 3;

if (o == 1 || o <1 && b > 3 || b==3 ) {
    console.log (o+b);
}

else 

{
    console.log (o-b);

};

let c = 0;
let d = 6;

if (c == 1 || c <1 && d > 3 || d==3 ) {
    console.log (c+d);
} 

else 
{
    console.log (c-d);

};

let e = 3;
let f = 4;

if (e == 1 || e <1 && f > 3 || f==3 ) {
    console.log (e+f);
}

else 
{
    console.log (e-f);

};


// Задача 4

const month = '10';
switch (month) {
    case '12': console.log ('зима');
    break;
    case '1': console.log ('зима');
    break;
    case '2': console.log ('зима');
    break;

    case '3': console.log ('весна');
    break;
    case '4': console.log ('весна');
    break;
    case '5': console.log ('весна');
    break;

    case '6': console.log ('лето');
    break;
    case '7': console.log ('лето');
    break;
    case '8': console.log ('лето');
    break;

    case '9': console.log ('осень');
    break;
    case '10': console.log ('осень');
    break;
    case '11': console.log ('осень');
    break;

};

// Задача 5

  const browser = 'Edge';
switch (browser) {
    case 'Edge': console.log ("You've got the Edge!");
    break;

    case 'Firefox': 
    case 'Safari': 
    case 'Opera': 
    console.log ('Okay we support these browsers too');

    break;
    default :    console.log ('We hope that this page looks ok!');
} ;


// 1 практическое задание

let member = 10;
if (member < 10) {
    console.log ('1 блок');
 } else if (member == 10) {
    console.log ('2 блок');
} else{
    console.log ('3 блок');
};

let member1 = 2;
if (member1 < 10) {
    console.log ('1 блок');
 } else if (member1 == 10) {
    console.log ('2 блок');
} else{
    console.log ('3 блок');
};

let member2 = 12;
if (member2 < 10) {
    console.log ('1 блок');
 } else if (member2 == 10) {
    console.log ('2 блок');
} else{
    console.log ('3 блок');
};



// 2 практическое задание Переменная num может принимать 4 значения
const dog = 2;
const cat = '2';

dog === cat ? (console.log("hello")) : (console.log('bye'));




// 3 практическое задание Переменная num может принимать 4 значения

const num = '2';
switch (num) {
    case '1': console.log ('зима');
    break;

    case '2': console.log ('весна');
    break;

    case '3': console.log ('лето');
    break;

    case '4': console.log ('осень');
    break;


}