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
    if (param == 'age') {
       Jedi.ability()
    };
};

/*Создайте два объекта. В каждом из них есть функция. Во втором объекте 
функция вызывает функцию первого объекта. Далее в первой функции первого 
объекта мы проверяем есть ли “ключ - uid” у  второго объекта, если есть 
то создаем новый  пустой объект к которому присваиваем второй объект, 
новому объекту добавляем “ключ - changes, значение - true” и выводим в 
консоль новый объект. (ожидаем объект с новым ключ- значением)*/

console.log('/// Hometask///');
const yoda = {
    name: 'Yoda',
    age: '900',
    saberColor: 'green',
    force: function () {
        for (let key in grogu) {
            if (key == 'uid') {
                const newJedi = new Object ();
                newJedi = grogu;
                newJedi.changes = 'true'
                console.log(newJedi);
            };
        }
    }
};

const grogu = {
    name: 'Grogu',
    age: '50',
    saberColor: '',
    'uid': true,
    force: function () {
        yoda.force()
    }
};
