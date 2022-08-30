/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

//*Objects topic of the lektion 5
// const userName = {
//     name: 'Bob',
//     age: '18',
//     flat: 'Yes'
// };
// console.log(userName);
// console.log(userName.flat);

// //Add objects
// userName.profession = 'true';
// console.log(userName);

// //Delete objects
// delete userName.profession;
// console.log(userName);

// // Object variables creation
// let object = new Object();
// let objectTwo = {};

//String data 
// const userData = {
//     name: 'Bob',
//     age: '18',
//     flat: 'Yes',
//     profession: 'true'
// };
// console.log(userData);
// console.log(userData['profession']);

// const userData = {
//     name: 'Bob',
//     age: '18',
//     flat: 'Yes',
//     profession: 'true',
//     address: {
//         city: 'Stockholm',
//         country: 'Sweden'
//     }
// };
// console.log(userData);
// console.log(userData.address.city);

// for(propertyName in userData){
//     console.log(propertyName, userData[propertyName]);
// }

// for(let propertyName in userData){
//     if(propertyName === 'age'){
//         console.log(userData.age)
//     }
// };
// const person = {
//     name: 'Bob',
//     age: '18',
//     color: function(){
//         console.log(this.name);
//     }
// };
// person.color();

// const human = {
//     name: 'Lidia',
//     surname: 'Random',
//     age: 'before',
//     color: function(){
//         return this.surname
//     }
// };
// const lady = human.color();
// console.log(lady);

const lady = {
    name: Lidia,
    surname: Flower,
    age: '22',
    city: 'Stockholm',
    favColor: 'yellow'
}
for(let propertyName in lady){
if(propertyName === 'age'){
    console.log(this.age)
}
};