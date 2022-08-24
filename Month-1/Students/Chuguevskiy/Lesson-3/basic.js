/// Function declaration 
/*

function nameFunction(){
    console.log("Декоративная Функция");
}

nameFunction();

let fruit = 'apple';
let count = 23;

function showCountApples(){
    console.log(`I have ${count} my  % {fruit}`);
}
showCountApple();




let name = "Danill";
let lastName = "Verulane";
function NameLastName(){
    console.log (`I am ${name} ${lastName}`)
;}
NameLastName();




/// function expression



const functions = function (){
    console.log("function expression")
};

functions ();





function findElement (paramentName){
    console.log(`На странице ${paramentName}`)
};

let page = "Home";

findElement(page);


let numb = 11;
function numbs(age){
age > 18 ? console.log("true") : console.log("false")  
};
numbs(numb);





// arrow functional


let func =(numb1,numb2) => {
let result= numb1 * numb2;   
    console.log(result);
};
func(2,5);



// Return




function test (para1,para2,para3){
    
    const res = para1 + para2 + para3;
    return res;
};

let number1 =10;
let number2 =34;
let number3 =200;


const result = test(number1,number2,number3);
    console.log(result);





function summ(a,b){
    return a + b;
}
let result = summ(10,12);    //22
console.log(result);




console.log(sum(10,12));


function summ(a,b){
    return a + b;
}


const fullResult = summ(summ(1,3), summ(5,6));
console.log(fullResult);




let func = (numb1,numb2) => {
    let result = numb1+numb2;
    return result;
};

let numb1 = 1;
let numb2 =2;

console.log(func(numb1,numb2));


function  isStrongPassword(password){
    const length = password.length;
    return length > 8 && length <20;
}

const one =isStrongPassword('password');
const two =isStrongPassword('crazylastochka');

console.log(`Check word password is strong `, one );
console.log(`Check word password is strong `, two );

*/

/////////////////////////////////////// Home Task 


//Task 1

let func = (numb,string)=>{
    result = numb >=100 && string == "School-street" ;
    return (result)
};

numb = 100;
string = "School-street";

console.log(func(numb,string));

//Task 2



function numberPhone(number1){
    result =number1;
    number1[0] == "+"? console.log("Международный номер") : console.log("Немеждународный номер");   
};

let number1 = "+380970951282";  // input

numberPhone(number1);



//Task 3


let words = (example) => { 
    return string;
};

example = ("Test");         // input 
console.log(typeof example);
words();



