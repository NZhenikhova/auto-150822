// Обьекты

const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
};

console.log(userName);
console.log(userName.age);

// Добавить обьект

userName.profession = 'true'

// Удалить

delete userName.profession;

// Создание 

let object = new Object();
let object2 = {};

// Вывод данных стринг


const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
    'university' : true
};

console.log(userName);
console.log(['university']); // фикс


const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
};

console.log(userName);
console.log (userName.address)
console.log (userName.address.city)


// Обход цикла методом for in

const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
};

for(propertyName in userName) {
    console.log(propertyName, userName[propertyName]); //propertyName - выводит ключи const, userName[propertyName] -  вывод значений

}


for (let propertyName in userName) {
    if (propertyName == 'age'){
        console.log(userName.age)
    }
};


// Методы обьекты и this 

const person = {
    name: 'Bob',
    age: '18',
    color: function(){
        console.log(this.age);
    }
}

person.color();



const human = {
    name: 'Bob',
    sureName: 18,
    age: 'before',
    color: function(){
        return this.sureName
    }
}

const man = human.color();
console.log (man);






const pet = {
    name: 'Amour',
    age: 2,
    gender: function(){
        return this.age
    },
}


for (let anyObject in pet){
    if (anyObject == 'Amour'){
        console.log(userName.name)
    }
}