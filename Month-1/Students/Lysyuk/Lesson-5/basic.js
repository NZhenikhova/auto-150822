//5.0 Объекты


const userName= {
    name:'Bob',
    age:'18',
    flat:'yes'
};

console.log(userName);
console.log(userName.age);



//Добавить объект

userName.profession='true';
console.log(userName);


//Delete

delete userName.profession;
console.log(userName);

//создание объекта

let object = new Object();
let object2={};


//вывод данных стринг

const userName= {
    name:'Bob',
    age:'18',
    flat:'yes',
    'profession':true
};

console.log(userName);
console.log(userName['profession']);
console.log(userName['flat']);


const userName= {
    name:'Bob',
    age:'18',
    flat:'yes',
    adress:{
    city:'Berlin',
    country:'Germany'
    }
};
console.log(userName);
console.log(userName.adress);
console.log(userName.adress.country)


//Обход цикла методом for in

const userName= {
    name:'Bob',
    id:'38149738685',
    flat:'yes'

};

for(propertyName in userName ){
    console.log(propertyName,userName[propertyName]);
};

//propertyName - вывод ключей
//userName[propertyName] - вывод  значений


for(let propertyName in UserName){
    if(propertyName=='id'){
        const cardUser=userName.id;
    }
};

//методы объекта u this

const person2= {
    name:'Bob',
    age:'18',
    color:function(){
        console.log(this.age);
    }
};

person2.color();


const human= {
    name:'Bob',
    surename:'18',
    name:'before',
    color:function(){
      return this.surename
    }
    }


const man= human.color();
console.log(man);




/////////  Home task

//Создайте два объекта. 
//В каждом из них есть функция.
//Во втором объекте функция вызывает функцию первого объекта. 
//Далее в первой функции первого объекта мы проверяем есть ли “ключ - uid” 
//у  второго объекта, если есть то создаем новый  пустой объект к которому присваиваем второй объект,
//новому объекту добавляем “ключ - changes, значение - true” и выводим в консоль новый объект. 
// (ожидаем объект с новым ключ- значением)


const person = {
    name: "Igor",
    age : "17",
    id : "234545435",
        color:function(){
            for( let search in cats){
                if(search == ["age"]){
                    let newObject = new Object();
                    newObject = cat ;
                    newObject.changes="true";
                    console.log(newObject);
                };
        };
    }
};
const cats = {
    name: "Lola",
    tipe: "cat",
    age: "5",
    color:function(){
        person.func();
    }
};
cats.color();
     