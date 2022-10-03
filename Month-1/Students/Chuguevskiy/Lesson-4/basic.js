// Массивы 

/*
const automobile1 = "BMW";
const automobile2 = "Mercedes";
const automobile3 = "Volvo";
const automobile4 = "Volkswagen";

let cats = [];
const allCars = ["BMW","Mercedes","Volvo","Volkswagen"];
console.log(allCars);
console.log("Длина массива", cats.length);

console.log(allCars[0]);


let myPets = ["Муся","Персик","Коржик","Руби","Ася"];
console.log(myPets.length,myPets[3]);


// push - добавляет елемент в конец массива

const allCars = ["BMW","Mercedes","Volvo","Volkswagen"];

///console.log(allCars.push("Infiniti"));                                                     // add
//console.log(allCars);
//console.log(allCars.pop());                                                               //delete 

//allCars.shift();                                                                        // delete first element[0] 
//console.log(allCars);

allCars.splice(2,2,"Audi","Seat");                                                     // delete  [0 - 1] 
console.log(allCars);   

const pets = ["Marfa","Kyzya","Iko"];  
console.log(pets.includes("Marfa"));                                               // includes - проверка на наличие в массиве

pets.unshift("Kesha");                                                           // unshift - добавляет елемент в начало массива
console.log(pets);



const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
allFavoriteCars.push("Infiniti");
allFavoriteCars.unshift("Seat");
console.log(allFavoriteCars);


/// Цыкл 

for (let i=0;i<=10;i++){
    console.log(i);
};





for(let i =0; i <= 10 ; i++){
    console.log(i);
};




const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];

function isCarInArray(nameAuto){
    for (let i=0; i<allFavoriteCars.length; i++){
        if(allFavoriteCars[i].includes(nameAuto)){
            let auto = allFavoriteCars[i];
            return auto;
        };
    };
    return "There was no auto for you!";
};
const result = isCarInArray("Kia");
console.log("I have a car",result);




const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];


for(let item of allFavoriteCars){
    console.log(item);
};



const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];

function searchForCar(nameAuto){
    for(let item of allFavoriteCars){
        if(item.includes(nameAuto)){
            let auto= item;
            return auto;
        };
    };
};const assert = searchForCar("Volvo");
console.log(assert);

*/

////////////////////////////// Home Task

// task1
//Сформируйте массив данных.
// Перебором определите есть ли в массиве определенный элемент
// и запишите его в переменную.


const pets= ["cat","dog","Chris","lizard"];
function searchPets(pet){
for(let item of pets){
    if(item.includes(pet)){
        let result = item;
        return result;
        };
    };
};
const results = searchPets("lizard");
console.log(results);


//task2
//Сформируйте два массива .
// Первый - определите циклом for of внутри функции есть ли у данного массива элемент,
// если нет то верните в переменную первый элемент массива.

const myFriendsNames= ["Katya","Danill","Lera","Kirill","Max"];
const fruit = ["Apple","pear","watermelon","cherry","peach"];   // 5


function searchName(names){
    for(const item of myFriendsNames){
        if(item.includes(names)){
            let resultName = item;  
           console.log(resultName);  
        }
}  

let result = names;                        
switch(names){                             
    case "Katya":                          
    case "Danill":
    case "Lera":
    case "Kirill":
    case "Max":
        break;
        default:
            console.log(myFriendsName[0]);
};
}; 
const resultMyNamesFriends = searchName("Mdfsdfax");
console.log(resultMyNamesFriends);

//Comments Task 2
/*
1) Эту задачу можно реализовать без switch, мы же отрабатываем работу с массивами, 
а что если у тебя длинна массива 1000 ты будешь 1000 кейсов писать или нет? 

function searchName(name){
    for(const item of myFriendsNames){
        if(item.includes(name)){
            let resultName = item;  
            return resultName;   /// вернет нужное имя и дальше не пойдет 
        }
}  
return myFriendsNames[0];
}
const checkIfNoName = searchName("Mdfsdfax");
const checkIfThereIsName = searchName("Max");
console.log(checkIfThereIsName);

*/

//task3
//Второй -  определите циклом for внутри функции если длина массива больше 5 элементов,
// то верните текст с “читабельной ошибкой” если длина массива меньше либо равна 5.
// То запишите это значение в переменную где вызвана была функция.

/*
let addFruits = "avocado";                                              // add new fruits , needed for first check
fruit.push(addFruits);
*/


function lengthFruit(){
    for(let item of fruit){
        if(fruit.length > 5 ){
            console.log("There are more than 5 elements in the array");
        }else if(fruit.length <= 5 ){
            console.log(fruit.length)                               // bad understand second terms
        };
    };
};
lengthFruit();


//Comments Task 3
/*
1) Эту задачу можно реализовать с  for(let i;  i < 5; i++);
2) Нужно учиться использовать return, так ты сможешь манипулировать с результатом выполнения функции 

if(fruit.length > 5 ){
            console.log("There are more than 5 elements in the array"); /// можно заменить на return  'индекс с таким эдементов не существует'
        } else if(fruit.length <= 5 ){
            return fruit;            
        };

3) const result = lengthFruit();  // То запишите это значение в переменную где вызвана была функция. 

Напишу вам решение по шагово для всех
*/
