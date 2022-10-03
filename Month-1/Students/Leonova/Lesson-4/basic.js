// HOMETASK 4
/* Task 1 
Form a data array.
Browse to determine if the array contains a certain element.
Write it to a variable. */

const allBrends= ['Boss', 'Klein', 'Armani', 'Moschino', 'Diesel'];
console.log(allBrends);

function searchForBrend(nameBrends){
    for (let item of allBrends) {
    if(item.includes(nameBrends)){
        let Brends = item;
        return Brends;    
    }  
}
};
const assert = searchForBrend('Diesel');
console.log(assert);
/*Comment Task 1 - Отлично!*/


/* Task 2 
Form an array.
Define with a for of loop inside a function.
Does this array have an element, if not, then return the first element of the array to the variable. */

const allCountries= ['Ukraine', 'Turkey,', 'Germany', 'Poland', 'France'];
console.log(allCountries);

function searchForCountries(nameCountries){
    for (let item of allCountries) {
    if(item.includes(nameCountries)){
        let Countries = item;
        return Countries;    
    }
    else {let firstCountries = allCountries[0]; 
        return console.log ('нет необходимого эллемента, выводим первый элемент массива', firstCountries);
        }
    };
 };

const assert2 = searchForCountries('notPoland');

console.log(assert2);
/*Comment Task 2 
1) Следим за переменными называем методы и переменный с маленькой буквы камел кейсом
2) Решение твоей задачи будет отрабатывать только один раз!
 Потому что если элемент не найден в if(item.includes(nameCountries)) => вернуло false, 
 выполнение пойдет на блок else  дойдет до строки с return  и закончится выполнение задачи, 
 поэтому, нужно вынести return который возвращает ошибку с цикла

 function searchForCountries(nameCountries){
    for (let item of allCountries) {
    if(item.includes(nameCountries)){
        let Countries = item;
        return Countries;    
    }

    };

    return allCountries[0]; 
 };

 нужно помнить что цикл проходит по всем эелементам пока не найдет нужный,
  поэтому если нет совпадение не останавливать его а разрешить идти дальше
*/




/* Task 3 
Define with a for loop inside the function if the array length > 5 elements, 
then return the text with a “readable error”.
If the array length is less than or equal to 5. 
Then write this value to the variable where the function was called */

const allflowers= ['roses', 'tulips', 'chamomile', 'bells','mak', 'sunflower'];
console.log(allflowers);

let lengthFlowersAtHome = (numberOfLetters) => {
    for (let i=0; i < allflowers.length; i++) {
        if (allflowers[i].length > numberOfLetters) {
        let Letter = allflowers[i];
        return console.log('readable error', numberOfLetters);
    }
        else {
        return  console.log ('текст с читабельной ошибкой', numberOfLetters, 'elements') ;
       
        }

};
}

lengthFlowersAtHome(6)

/*Comment Task 3 
1) Обрати внимание на условие - he array length > 5 elements, 
а ты проверяешь длину одного элемента по индексу 
 if (allflowers[i].length > numberOfLetters) 
2) Вижу ты стала рабоатть с элементами массива, а не массивом, 
поэтому обращаю твое внимание снова на подобную ошибку, 
ты останавливаешь прохождение в цикле при первом же несовпадении, снова вынеси return.
3) И еще вот это не совсем хороший вариант return console.log('readable error', numberOfLetters);

консоль лог сам по себе делает вывод в консоль возвращать его не нужно, возращать только значение 

Например,

return 'readable error';
Потом ты делаешь вызов функции и сохраняешь результат в переменную

const result = lengthFlowersAtHome(6)
console.log(result);
 это тебя избавит от двух строчек   от console.log('readable error', numberOfLetters);  
 и вот этой console.log ('текст с читабельной ошибкой', numberOfLetters, 'elements') ;
 просто возращай значение.

Напишу вам решение по шагово для всех
*/