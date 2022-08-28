let cats = [];
console.log('Длина массива', cats.length);

const automobile1 = 'BMW';
const automobile2 = 'Mercedes';
const automobile3 = 'Volvo';
const automobile4 = 'Volkswagen';

const allCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log('Our array', allCars);

console.log(allCars[0]);

const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'kia'];
// console.log('Added new car ', allMachines.push('Toyota'));
// console.log(allMachines);
// console.log('Deleted ' , allMachines.pop());
// console.log('Delete the first element' , allMachines.shift());
console.log('Check splice ', allMachines.splice(2, 2, 'newcar', 'newcar2'));

let myPets = ['cat', 'dog', 'mouse', 'chameleon', 'snake'];
// console.log ('Длина массива ', myPets.length);
// console.log ('Третий элемент ', myPets[2]);
console.log(myPets.includes('snake'));
// push pop shift unshift splice include 
myPets.unshift('parrot');
console.log(myPets);

// const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
// allFavoriteCars.unshift('Toyota');
// console.log('Массив с новым элементом в начале ', allFavoriteCars);
// allFavoriteCars.push('Kia');
// console.log('Массив с новым элементом в конце ', allFavoriteCars);

// циклы (от, до, шаг)
for (let i = 0; i < 10; i++){
    console.log(i);
}

// const allCar = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
// for (let car = 0; car < 5; car ++){
//     console.log(allCar[car]);
// }

for (let a = 0; a <= 10; a++){
    console.log(a);
}

const allCar = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'Toyota'];
function isCarInArray(nameAuto){
    for (let q = 0; q < allCar.length; q++){
        console.log('debug ', nameAuto);
        if (allCar[q].includes(nameAuto)) {
            let auto = allCar[q];
            return auto;

        }
    }
}

const result = isCarInArray('Volvo');
console.log('I have a car ', result);


const allnewcars = ['jag', 'rolls', 'aston', 'bentley'];
for (let item of allnewcars){
    console.log(item);
}


/* HOMETASK 
Task 1
Сформируйте массив данных. 
Перебором определите есть ли в массиве определенный элемент и запишите его в переменную. */ 

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function searchLetter(letter){
    for (let i = 0; i < alphabetArray.length; i++) {
        if (alphabetArray.includes(letter)){
            let newLetter = letter;
            console.log('Array includes this letter ', newLetter); 
            break; 
        }
        else {
            console.log(`Array doesn't include this letter ${letter}`);
            break;
        }      
    }
}
searchLetter('g');
searchLetter('v');
/*Comments Task 1
1) Хорошо воспользовалась break,в следующий раз потренируй return
2) Обрати внимание что у тебя выполниться проверка тольк на первый элемент, при случаи если нет совпадения
Решение твоей задачи будет отрабатывать только один раз!
 Потому что если элемент не найден в  if (alphabetArray.includes(letter)) => вернуло false, 
 выполнение пойдет на блок else  дойдет до строки с break  и закончится выполнение задачи, 
 поэтому, нужно вынести return который возвращает ошибку с цикла
*/



/* Task 2
Сформируйте два массива . Первый - определите циклом for of внутри функции есть ли у данного массива элемент, 
если нет то верните в переменную первый элемент массива. */

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchElement(numb){
    for (let item of myArray){
       if (myArray.includes(numb)) {
        return console.log('Array includes element: ', numb);
        }
       else {let newVar = myArray[0]; 
        return console.log ('Element was not found, the first element of Array is ', newVar);
        }
    }
}
searchElement(15); 
searchElement(5);
/*Comments Task 2
1) Обрати внимание что у тебя выполниться проверка тольк на первый элемент, при случаи если нет совпадения
Решение твоей задачи будет отрабатывать только один раз!
 Потому что если элемент не найден в  if (myArray.includes(numb)) => вернуло false, 
 выполнение пойдет на блок else  дойдет до строки с return  и закончится выполнение задачи, 
 поэтому, нужно вынести return который возвращает ошибку с цикла. 
 Цикл должен проходить по  элементам массива, до тех пор пока не найдет то что ищет,
 или же до последнего индекса или элемента и тогда он может сделать вывод такого нет

 function searchElement(numb){
    for (let item of myArray){
       if (myArray.includes(numb)) {
        return console.log('Array includes element: ', numb);
        }
    }
    return myArray[0]; 
}

2) Не стоит в return  писать console.log  использу их отдельно

*/



/* Task 3
Второй -  определите циклом for внутри функции если длина массива больше 5 элементов, 
то верните текст с “читабельной ошибкой” если длина массива меньше либо равна 5
То запишите это значение в переменную где вызвана была функция. */

const myArray2 = ['cola', 'pepsi', 'fanta', 'sprite', 'mirinda', 'jivchik'];
 
let lengthOfArrayChecking = (paramName) => {
    for (i = 0; i < myArray2.length; i++){
        if(myArray2.length > paramName) {
            return console.log('Error. Длина массива больше ' + paramName);
        }
        else {
            return console.log('Длина массива меньше ', paramName, ' элементов');
        }

    }
}

lengthOfArrayChecking(5);


/* Comments Task 3
Напишу вам решение по шагово для всех
*/