// Массивы

const allCars = ['BMW', 'Mercedes', 'Volvo'];
console.log('Our array', allCars);
console.log (allCars[0]);


const myPets = ['cat', 'dog', 'horse', 'frog', 'snail']
console.log (myPets.length, myPets[2])

// Методы массивов

// push - добавление элемента в конец массива
// pop - удаление последнего элемента
// shift - удаление первого элемента
// splice - удаление конкретного элемента (или замена)
// includes - проверяет ли входит элемент в массив (true/false)
// unshift - добавляет элемент в начало массива


const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
allFavoriteCars.unshift('Toyota')
allFavoriteCars.push('Kia')
console.log (allFavoriteCars);