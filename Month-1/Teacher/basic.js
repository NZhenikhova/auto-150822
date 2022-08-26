/*----6.0 Массивы ---*/

const automobile1 = 'BMW';
const automobile2 = 'Mercedes';
const automobile3 = 'Volvo';
const automobile4 = 'Volkswagen';


console.log('Sveta ', automobile1[0]);


let cats = [];
console.log('Длина массива ', cats.length);

// cats[0];

const allCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log('Our array ', allCars);

/*
index 0 - BMW
index 1 - Mercedes
index 2 - Volvo
index 3 - Volkswagen
*/


const allVehicle = ['BMW', 10, true, 'Volkswagen', null];
console.log(allVehicle);

const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen','Toyota'];
allMachines.splice(2, 2); 
console.log(allMachines);

const allCars1 = ["BMW","Mercedes","Volvo","Volkswagen"];
allCars.splice(2,2, "Audi","Seat");
console.log(allCars);   // delete  [0 - 1]

const pets = ['Marfa', 'Kyzya', 'Iko'];
console.log(pets.includes('Lusya'));
pets.unshift('Kesha');
console.log(pets);


/*----7.0 Циклы ---*/

const allGermanCars = ['BMW', 'Volkswagen', 'Volvo', 'Huidai', 'Toyota'];

function isCarInArray(nameAuto) {
    for(let i = 0; i < allGermanCars.length; i++) {
        if(allGermanCars[i].includes(nameAuto)) {
            let auto = allGermanCars[i];
            return auto;
        } else {
            return 'There was no auto for you!';
        }
    }
}

const result = isCarInArray('KIA SORENTA');
console.log('I ahve a car ', result);

/*----7.2 Обход массива циклом for (of) ---*/

const allBritishCars = ['Jaguar', 'ROLLS-ROYCE', 'ASTON MARTIN', 'Bentley', 'Land Rover'];

// for(let i = 0; i < allGermanCars.length; i++) {
//     console.log(allGermanCars[i]);
// }


for(let item of allBritishCars) {
    console.log(item);
}

const allItalianCars = ['Pagani', 'Mazzanti', 'Ferrari', 'Lamborghini', 'Maserati'];

function searchForCar(nameAuto){
    for (let item of allItalianCars) {
    if(item.includes(nameAuto)){
        let auto = item;
        return auto;     
    }   
}
};

const assert = searchForCar('Pagani');
console.log(assert);


