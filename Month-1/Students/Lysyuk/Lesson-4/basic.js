

//Homework4

//task1
//Сформируйте массив данных. 
//Перебором определите есть ли в массиве определенный элемент и запишите его в переменную.


let Allvegetables= ['Cabbage','Carrot','Cucumber','Paper','Tomato'];
 function searchForVegetables(nameVegetables){
       for(let item of allVegetables){
       if(item.includes(nameVegetable)){
              let Vegetables=item;
              return Vegetables;
       }
       }
    };

    const search = VegetablesInArray('Paper');
   console.log(search);

   //task2
   //Сформируйте два массива . 
   //Первый - определите циклом for of внутри функции есть ли у данного массива элемент,
   // если нет то верните в переменную первый элемент массива.

   const allCollors