/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/
/*

const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
    'profession': true,
    adress: {
        country: 'Germany',
        city: 'Berlin',
        street: 'Leipzig strasse'
    }
};
/*
console.log(userName);
console.log(userName.age);

//Добавление
userName.profession = 'true';
console.log(userName);

//Удаление
delete userName.profession;
console.log(userName);

//Создание нового объекта

let object = new Object ();
let object2 {};



console.log(userName);
console.log(userName.adress);
console.log(userName.adress.city);

for (let propertyName in userName) {
    console.log(propertyName, userName[propertyName]);
};

for (let propertyName in userName) {
    if (propertyName == 'age') {
        console.log(userName.age);
    };
    
};


const human = {
    name: 'Bob',
    surname: 18,
    age: 'before',
    color: function () {
        return this.surname;
    }
};
const man = human.color();
console.log(man);
*/

const Jedi = {
    name: 'Yoda',
    saber: 'green',
    age: 900,
    power: 'Force',
    ability: function () {
        return this.power
    }
};

for (let param in Jedi){
    if (param == age) {
       Jedi.ability()
    };
};