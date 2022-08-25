// Task 3 вариант 1

// typeof
let dataType = 'аргумент';
console.log(typeof dataType);

//  функция
let Type1 = 'string';
let Type2 = 'null';
let Type3 = 'undefined';
let Type4 = 'boolean';
let Type5 = 'number';
let Type6 = 'object';
let Type7 = 'symbol';

function showMassage () { 

    let argument = 'string'
    if (argument === Type1) { 
        console.log(true);
    } else  {
        console.log(false);
    }
    }  
    
showMassage ();

// Task 3 вариант 2
const typeCheck = (t) => {
    result = typeof(t) == 'string' ? 'true' : 'false'
    return result;
} ;
console . log ( typeCheck (1234567) )




// Task 1 проверяющую квартиру
// Task 1 вариант 1

function Apartment () {
const flat = (square, street) => {
    square = square >= 100 || square == 80 ? 'true' : 'false';
    street = street == 'School-street' ? 'true' : 'false';
return square, street
} ;
console.log(flat(101,'School-street'));
};

Apartment ();

// Task 1 вариант 2
function isApartment () {
    let square = 110;
    let street = 'School-street';
    if (square >= 100 || square == 80 && street == 'School-street') { 
        console.log('true');
        } else  {
        console.log('false');
    };
    };  

    isApartment ();

    
// Task 2 вариант 1
function phoneFormat () {
    let phone = +380687574365;

    if (phone == +380687574365){
        console.log('International Format');
        } else  {
        console.log('Not International Format');
    }
};
phoneFormat ()


// Практика на  уроке



let fun2 = (num1, num2) => {
    let result = num1 * num2;
    console.log(result)
}

//

let name = 'Daria';
let fam  = 'Leonova';

function showNamFam () {

console.log (`I am ${name} ${fam}`);
}

showNamFam ();

// 


// стрелочная функция

let func2 = (num1, num2) => {
    let result = num1 * num2;
    console.log(result) ;
}

func2 (3,4);


// Return
function test (parametrName1, parametrName2, parametrName3){
    const result = parametrName1 + parametrName2 + parametrName3;
    return result;
 };

 
 // практическая задача

 let com = (num1, num2) => {
    let result = num1 + num2;
    console.log(result) ;
}

com (1,2);






















