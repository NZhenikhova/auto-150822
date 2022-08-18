


/*
if ( x < y ){
    console.log("one");
}else if(x == 11){    
    console.log("two");
}else{
    console.log("three");
};

*   && - и
*   || - или 
*   !true - не ( bollean )
*
*
*
*



let index = 7;
if(index <5){
    console.log("Wow");
}else if (index > 5 && index <10){
    console.log("hard");
}else{
    console.log("Bro");
};


const num = 40;
const result = num <10 || num > 30;
console.log(result);


const pets = true;
if(pets == !true){
    console.log("привет");
}else{
    console.log("нет");
}



let x = 10;
time = 9;


if(x == time ){
    console.log("Первый блок");
}else if (x == 11){
console.log("Второй блок");
}else{
    console.log("Третий блок");
};



// 10 < 10 ? console.log("true") : console.log("false"); // Тернарный оператор 



const dog = 5;
const cat = "5";

dog === cat ? console.log("true") : console.log("false");




const lang = "ar";

switch(lang){
case "ru":
console.log("1");
break;
case "en":
console.log("2");
break;
case "fr":
console.log("3");
break;
default:
    console.log("Nothing");

};










switch("Sandra"){
case "Tom":
console.log("first name");
break;

case "Andy":
console.log("last name");
break;

case "Other":
case "Admin":
case "user":
    console.log("Остальные");
    break;
    default : console.log("Null");
};



let numb = 3;

switch(numb){
case 1:
    console.log("Весна");
break;
case 2:
    console.log("Лето");
break;
case 3 :
    console.log("Осень");
break;
case 4:
    console.log("Зима");
    break;
    default : console.log("Дурашка нужно выбрать от 1 до 4 ");
};



let idUser = "1111-2222-3333";
console.log(`Пoльзовательский ID - ${idUser} c именем Андрей`);


*/


//                               Home task


let String = "test" ;

if(String == "test"){
    console.log("Верно");
}else{
    console.log("Неверно");
};
/////////////////////////////////////////////////////

let age = 31;
if(age == 18){
    console.log("Возраст совпал");
}else if (age > 18 && age <= 30){
    console.log("Категория - 1");
}else if(age > 30){
    console.log("Возраст пользователя -"+ age + " подходящий для приема на работу");
};
////////////////////////////////////////////////////

const a = 1;
const b = 3;

if(a == 1 || a < 1 || b == 3 || b > 3 ){
    console.log( a + b );
}else{
    console.log("Неверные значение");
};
/////////////////////////////////////////////////////

let month = 5 ;
switch(month){
case 12:                    // the beginning of winter of the 12th month
case 1:
case 2:
    console.log("Зима");
break;
case 3:
case 4:
case 5:
    console.log("Весна");
break;
case 6:
case 7:
case 8:
    console.log("Лето");
break;
case 9:
case 10:
case 11:
    console.log("Осень");
};
/////////////////////////////////////////////////////

let browser = "Edge";
switch(browser){
case "Edge":
    console.log("You've got the Edge!");
break;
case "Chrome":
case "Firefox":
case "Safari":
case "Opera":
    console.log('Okay we support these browsers too');
break;
    default:
        console.log('We hope that this page looks ok!');
};
