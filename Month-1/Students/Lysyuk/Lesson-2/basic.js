//////Practise

//////// 1
let time = 10;
if (time < 10) {
    console.log ("Первый блок");
 } else if (time == 10) {
    console.log ("Второй блок");

};

let num= 5;
if (num <10 ) {
    console.log ("Первый блок");
 } else if (num == 5) {
    console.log ("Второй блок");
};



//////// 2 

const dog = 5;
const cat = '5';

dog === cat ? (console.log("Привет")) : (console.log('Пока'));


////////3


const gender = 'male';
switch (gender) {
    case 'female': console.log ('1');
    break;

    case 'male': console.log ('2');
    break;
}





/////////     Homework2

Задача 1 

let string = "test" ;

if(string == "test"){
    console.log("Верно");
}else{
    console.log("Неверно");
};


Задача 2



let age=31;
if(age==18){
    console.log("Возраст совпал")
}else if(age>18 || age< 30){
    console.log("Категория-1");
}else if(age > 30){
        console.log("Возраст пользователя  подходящий для приема на работу");
    };


    Задача 3



    let month=11;
switch (month) {
    case '12': console.log ("Зима");
    break;
    case '1': console.log ("Зима");
    break;
    case '2': console.log ("Зима");
    break;


    case '3': console.log ("Весна");
    break;
    case '4': console.log ("Весна");
    break;
    case '5': console.log ("Весна");
    break;

    case '6': console.log ("Лето");
    break;
    case '7': console.log ("Лето");
    break;
    case '8': console.log ("Лето");
    break;

    case '9': console.log ("Осень");
    break;
    case '10': console.log ("Осень");
    break;
    case '11': console.log ("Осень");
    break;
};




Задача 5




let browser = "Edge";
switch(browser){
case "Edge":
    console.log("You've got the Edge!");
break;
case "Chrome":
case "Firefox":
case "Safari":
case "Opera":
    console.log("Okay we support these browsers too");
break;
    default:
        console.log("We hope that this page looks ok!");
};