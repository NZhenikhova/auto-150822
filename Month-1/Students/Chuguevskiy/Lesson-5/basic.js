// OOP
/*
const userName = {
    name: "Bob",
    age: "18",
    flat: "yes"
};
console.log(userName.age,userName.name);

                                // add object
userName.profession = "true";
console.log(userName);
                                // delete 
delete userName.profession;
console.log(userName);
                                // create 
let object = new Object();
let object2 = {};

                                // input date string

const userName = {
    name: "Bob",
    age: "18",
    flat: "yes",
    'profession':true
};
console.log(userName);

console.log(userName["profession"]);
console.log(userName["age"]);


const userName = {
    name: "Bob",
    age: "18",
    flat: "yes",
    address :{
        city: "Dnipro",
        country: "UK"
    }
};
console.log(userName);
console.log(userName.address);
console.log(userName.address.country);



//  Обход цикла методом for in

const userName = {
    name: "Bob",
    age: "18",
    flat: "yes",
};
for(let properyName in userName){
    console.log(properyName,userName[properyName]);
};


const userName = {
    name: "Bob",
    age: "18",
    flat: "yes",
};


for(let propertyName in userName){
    if(propertyName == "age"){
        console.log(userName.age);
    };
};



// methods objects "this"


const person = {
    name : "Bob",
    age: "18",
    color: function(){
        console.log(this.age);
    }
};
person.color();

const human = {
    name: "Bob",
    id: "3124325346435",
    age: "before",
    color: function(){
        return this.id
    }
}
const man =human.color();
console.log(man);


const userName = {
    name: "Max",
    age: "23",
    flat: "yes",
        func: function(){
            return this.age 
        }
};

for (let name in userName){
    if(name == "age"){
 //       userName.flat =  names;
 //       return names;
  };
}
*/


// Home Task 


const human = {
    name: "Alex",
    age : "23",
    id : "4542723476923",
        func:function(){
            for( let search in pets){
                if(search == ["age"]){
                    let newObject = new Object();
                    newObject = pets ;
                    newObject.changes="true";
                    console.log(newObject);
                };
        };
    }
};
const pets = {
    name: "Asya",
    tipe: "cat",
    age: "3",
    color:function(){
        human.func();
    }
};
pets.color();
