/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

//Занятие
// let one = 34;

// if(one == 34){
//     console.log('First block');
// }else{
//     console.log('Second block');
// }

// let two = 34;
// if(two <= 34){
//     console.log('First new block');
// }else{
//     console.log('Random answer');
// }

// let three = 34;
// if(three => 34){
// console.log('Correct answer');
// }else{
//     console.log('Something else');
// }

// const time = 5;

// if(time < 5){
//     console.log('Hi');
// }else{
//     console.log('Bye');
// };
// time < 5 ? console.log('Hi') : console.log('Bye');

// const dog = 5;
// const cat = '5';

// dog === cat ? console.log('Hi') : console.log('Bye');

//Switch case examples + explanation
// const language = 'se';

// switch (language){
//     case 'ua':
//     console.log('1')
//     break;

//     case 'ru':
//     console.log('2')
//     break;

//     case 'en':
//     console.log('3');
//     break;
//     default:
//         console.log('Nothing');
// };

// switch ('User'){
//     case 'Tom': console.log('First name')
//     break;

//     case 'Andy': console.log('Second name')
//     break;

//     case 'Admin':
//     case 'User':
//     case 'Random':
//         console.log('Other names');
//         break;

//     default: console.log('Empty');
// };  


// let num = 5;

// switch (num) {
// 	case 1:
// 		console.log('winter');
// 	break;
// 	case 2:
// 		console.log('spring');
// 	break;
// 	case 3:
// 		console.log('summer');
// 	break;
//     case 4:
//         console.log('autumn');
//         break;
// 	default:
// 		console.log('incorrect value');
// 	break;
// };

//Concatination vs templated strings
let firstName = 'Bob';
let lastName = 'Charles';
console.log(firstName,lastName);

let user = firstName+lastName;
console.log(user);

console.log('Users name is' +firstName + ' ' +lastName); 
let idUser = '536-8888-8777-778';
console.log(`User id - ${idUser} with name ${firstName}`);