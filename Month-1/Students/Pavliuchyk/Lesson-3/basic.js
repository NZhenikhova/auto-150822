// function declaration

nameFunction();
function nameFunction() {
    console.log ('Функция вызвалась');
    }

let name1 = 'Olga';
let surname = 'Pavliuchyk';

function showNameSurname() {
    console.log (`My name is ${name1} ${surname}`);
}
showNameSurname();


// function expression

const functions = function(){
    console.log(`function expression`);
}
functions();

//параметры и аргументы функций

function findElement (parametrName){
    console.log(`На странице ${parametrName} элемент не обнаружен`);
}

let page = 'Home';
findElement(page);

function findElement2 (parametrName, parametrName2, parametrName3){
    console.log(`На странице ${parametrName} элемент ${parametrName2} класса ${parametrName3} не обнаружен`);
};

let page2 = 'Home';
findElement2(page2, 'registration page', 'work');


function checking (age){
    age > 18 ? console.log('true') : console.log ('false');
    }
    let age = 19;
    checking(age);


    //arrow function 

    let funcArr = (num1, num2) => {
        let result = num1 * num2;
        console.log('Arrow function', result)
    }
    funcArr (3,4);

      //expression function 

      let funcExpr = function(num1, num2) {
        let result = num1 * num2;
        console.log('expression function', result)
    }
    let perem1 = 2;
    funcExpr (perem1,5);

    //функция может возвращать - return

    function finds2 (parametrName, parametrName2, parametrName3){
        const res = parametrName + parametrName2 + parametrName3;
        return res;
    };

    let numb1 = 1;
    let numb2 = 5;
    let numb3 = 10;

    const result1 = finds2(numb1, numb2, numb3);
    console.log(result1); 

    //функции как аргумент 

    function summ (a, b){
        return a + b;
    }
    let result = summ(10, 12);
    console.log('Summ numbers ', result);

    // пример2 function as argument

    console.log(summ(20,5));

    // пример3 function as result

    const fullResult = summ(summ(1, 3), summ (5, 6));
    console.log('full result ', fullResult);

    // задание 

    function fSumm (param1, param2){
        const resOfFunc = param1 + param2;
        return resOfFunc;
    };

    let param1 = 10;
    let param2 = 5;
    console.log(fSumm(param1, param2));
