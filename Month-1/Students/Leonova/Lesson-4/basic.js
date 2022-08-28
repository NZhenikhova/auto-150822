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




/* Task 3 
Define with a for loop inside the function if the array length > 5 elements, then return the text with a “readable error”.
If the array length is less than or equal to 5. Then write this value to the variable where the function was called */

const allflowers= ['roses', 'tulips', 'chamomile', 'bells','mak', 'sunflower'];
console.log(allflowers);

let lengthFlowersAtHome = (numberOfLetters) => {

    for (let i=0; i<allflowers.length; i++) {
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


