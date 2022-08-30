///Nothing here 8)

///Nothing here 8)


const array = [23, 'mouse', 'racun'];

for(let item  of array) {
    console.log(item);
}

// Выяснить за серч
// Выяснить за динамически наполнение массивов

const petInArray = (pet) => {
   const array = [pet];
   return array;
}
console.log(petInArray('miki'));


 let pages = [];

 fun = 2;

const pageInArray = (pageName) =>  {
    for(let i = 0; i < 5; i++) {
       pages.push( i + pageName);
   }
    return pages;
}

console.log(pageInArray('heyPage'));



/* Task 3
Второй -  определите циклом for внутри функции если длина массива больше 5 элементов, 
то верните текст с “читабельной ошибкой”, если длина массива меньше либо равна 5
То запишите это значение в переменную где вызвана была функция. */


let mood = ['happy', 'depressed', 'in love', 'cozy', 'furry', 'crazy'];
console.log(mood);


function moodCheck(n) {
    for(let i = 0; i < mood.length; i++) {
        console.log('Just check the i in each iteration ', i);
        if(i + 1 > n) {
            console.log('читабельной ошибкой');
            return `Array length  > then ${n}`;
        }
    }
    return mood.length <= n;
}
let result = moodCheck(4);

console.log('My result ', result);