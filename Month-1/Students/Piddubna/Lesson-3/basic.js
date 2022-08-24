//Class. Functions
// nameFunction();

// function.nameFunction() {
//     console.log('Function Declared');
// }
// let fruit = 'apple';
// let number = 13;

// function showCountApples(){
//     console.log('I have ${number} of ${fruit}');
// }
// showCountApples();

// let name = 'Tania';

// function myName(){
//     console.log(`Hello my name is ${name}`);
// }
// myName();

//Function expression
// const funcExpress = function(){
//     console.log('function expression');
// }
// funcExpress();

// //Declarative funtions
// function testFunction() {
//     console.log('Thats declerative function');
// }
// testFunction();
//Parametrs and arguments for function
// function findElement (parameterName){
//     console.log(`The page ${parameterName} can not be found`);

// }; 

// let page = 'Home';
// findElement(page);

// let page = 'Home Page';
// function findElementbyParams(parameterName, parameterName1, parameterName2) {
//     console.log(`On the page ${parameterName}, element ${parameterName1} of the class ${parameterName2}`);
// };
// findElementbyParams(page, 'Work page', 'Terms page');

//Solution 1
// let myNumb = 10;
// function Numb(){
//    if (myNumb == 18 || myNumb > 18){
//     console.log('true');
//    }else{
//     console.log('false');
//    }
// };
// Numb();

// let func1 = function(num1, num2){
//     let result = num1*num2;
//     console.log('Thats expression function', result);
// };
// func1(1,2);

//Arrow function
// let funcAr = (num1, num2) => {
//     let result = num1*num2;
//     console.log('Thats arrow function', result);
// };
// funcAr(3,4);

//Return
// function ret (value, value1, value2) {
//     const newRet = value, value1, value2;
//     return res;
// };
// let value = 10;
// let value1 = 12;
// let value2 = 123;

// const result = test(value,value1,value2);
// console.log(result);

// function summary(a,b) {
//     return a+b;
// };
// let result = summary(10,12);
// console.log('Summary of numbers', result);

// console.log(summary(10,12));

// //function as result
// const fullResult = summary(summary(1,3),summary(5,6));
// console.log('Full result', fullResult);

//Solution 2
// function equation(one, two){
//     return one+two;
// };
// let newSum = equation(5,7);
// console.log('This is summary of',newSum);


//help for hometask
// function isStrongPassword(password) {
// const length = password.length; 

// return length > 8 && length < 20
// };

// const one = isStrongPassword('password');
// const two = isStrongPassword('crazylastochka');
// const three = isStrongPassword('randomcrapgoesherecantfixit');

// console.log('Check whether password is strong',one);
// console.log('Check whether password is strong',two);
// console.log('Check whether password is strong',three);

//Homework is located below
//Task 1
let checkApar = (square,street) => {
    return (square >= 80 && square >= 100 && street == 'School-street')
};
let square = 80;
let street = 'School-street';
if (checkApar(square, street)){
console.log("It is valid apartment")
}else{
console.log("It is not valid apartment")};

//Task 2
let phone = '666565666';
let inPhone = '+46776786868';
let internPhone = (phone) => phone[0] === '+';

internPhone('666565666'); // false
internPhone('+46776786868'); // true

console.log('This is the not internetional phone',phone);
console.log('This is internetional phone',inPhone);

//Task 3
let checkType = (datatype) => {
    return (typeof datatype) 
};
let datatype = "Hi there";
console.log('Here is the check of data type', typeof datatype);