const userName = {
    name: 'Bob',
    age: '18',
    flat: 'yes'
};

// console.log(userName);
console.log(userName.age);

// Добавить объект

userName.profession = 'true';
console.log(userName);

//удалить 

delete userName.profession;
console.log(userName);
// создание объектов
let object = new Object();
let object2 = {};

// вывод данных string

const userName2 = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
    'profession': true
};
console.log(userName2);
console.log(userName2["profession"]);
console.log(userName2["flat"]);


const userName3 = {
    name: 'Bob',
    age: '18',
    flat: 'yes',
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
};
console.log(userName3);
console.log(userName3.address);
console.log(userName3.address.country);

// обход цикла методом for in

const usName4 = {
    name: 'Bob',
    age: '18',
    flat: 'yes'
}
for (propertyName in usName4){
    console.log(propertyName /*вывод ключей*/, usName4[propertyName] /*вывод значений*/);  
}

for (let propName in usName4){
    if(propName == 'age'){
        console.log(usName4.age)
    }
}

//методы 

const person = {
    name: 'Bob',
    age: '18',
    color: function(){
        console.log('hello');
    }
}
person.color();

const person2 = {
    name: 'Bob',
    age: '18',
    color: function(){
        console.log(this.age); //this обращение только внутри функции
    }
}
person.color();

const human = {
    name: 'Bob',
    surname: 18,
    age: 'before',
    color: function(){
        return this.surname; 
    }
}
const man = human.color();
console.log(man);


// task 

const address = {
    street: 'noname',
    city: 'other',
    land: 'another',
    homenumber: function(){
        return this.country; 
    }
}
    for (let propName1 in address){
    if(propName1 == 'land'){
        address.homenumber();
        console.log('Вызов функции объекта');
    }
  }

  //Hometask
  
  console.log('Hometask');

  const shipAddress = {
    houseNumber: '23',
    street: 'Mulholland drive',
    city: 'Vaughan',
    country: 'Canada',
    zipCode: function(){
        // хороший вариант проверки поля
        if (billAddress.cityB != null){
            // объект нужно объвить сначало,а после присваивать. Иначе, исходя из строки не понятно что это объект.
            const thirdAddress = billAddress;
            thirdAddress.changes = 'true';
            console.log(thirdAddress);
        }
    }
  }
  const billAddress = {
    houseNumberB: '32',
    streetB: 'Seventy av',
    cityB: 'Custer',
    countryB: 'Mexico',
    zipCodeB: function(){
        // лишняя переменная checkZip
        let checkZip = shipAddress.zipCode();
    }
  }
  billAddress.zipCodeB();