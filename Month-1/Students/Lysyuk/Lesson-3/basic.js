//function

let name="Lina";
let age=25;

function showagename();
    console.log("I have${age}my${name}");
    
    showagename();


  

   //function expression

    const =("page"){
        console.log("");
    }

    function();
    function();
    function();
 
 
    //параметры и аргументы для функции

    let numb = 15;
    function numbs(age){
    age > 18 ? console.log("true") : console.log("false")  
    };
    numbs(age);


// arrow functional

let func1=function(num1,num2){
let result=num1*num2;
console.log("Expression function,result")
}

funct(1,2);

//arrow expession

let func2=(num1,num2)=>{
let result=num1*num2;
console.log("Arrow function",result)
}
let numberone=3;
func2(numberone,4);


//Return

function test(parnametr1,parametr){
   
    const res = para1 + para2 + para3;
return res;
;
let number1 =5;
let number2 =20;
let number3 =100;
};
  



//Return



function summ(a+b){
    return a+b
}

const result = test(number1,number2,number3);
    console.log(result);


//Examples


function  isStrongPassword(password){
    const length = password.length;
    return length > 8 && length <20;
}
const one =isStrongPassword('password');
const two =isStrongPassword('crazylastochka');
console.log(`Check word password is strong `, one );
console.log(`Check word password is strong `, two );



//////Homework

///1
Напишем стрелочную функцию, проверяющую квартиру.
Она принимает два аргумента: площадь (число) и название улицы (строку):
площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И
улица должна быть равна “School-street”



let  apart=(square,street)>= {
    return square >=100 || square>=80 && street==='School-street'
}
    
console.log(result)  
result = apart(79,'School-street')

    
///2
Реализуйте функцию, который проверяет формат указанного телефона.
Если телефон начинается с +, значит это международный формат.


const Phonenumb = (phone) => {
     let result = phone.indexOf("+")
    result === 0 ? console.log('Это международный формат'):console.log('Это не международный формат')
    }
     Phonenumb('+380936062442')  


    ///3

    Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’ и выведет в консоль true.

    const string = (argument) => {
        let type = typeof argument 
        argument = type ? console.log ('true') : console.log ('false');    
        }
        string('argument');