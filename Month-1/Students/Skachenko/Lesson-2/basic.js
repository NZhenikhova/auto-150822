/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/
/*
let time = 10;
if (time > 10 && time < 50)(
    console.log('Первый блок');
)else( if (time > 50 || time < 100)(
    console.log('Второй блок');
))else( if (time !== 0)(
    console.log('Третий блок');
));
*/
/////////////////////////////////////////////////////////////
const dog = 5;
const cat = '5';
dog == cat ? console.log('верно') : console.log('не верно');
/////////////////////////////////////////////////////////////
let lang = 'en'
switch (lang) {
    case 'ru':
    console.log('1')
    break;
    case 'en':
    console.log('2')
    break;
    case 'fr':
    console.log('3')
    break;
    default:
    console.log('ничего')
};
////////////////////////////////////////////////////////
let num = '2';
let result;
switch (num) {
    case '1':
    result = 'зима';
    console.log(result);
    break;    
    case '2':
    result = 'весна';
    console.log(result);
    break;
    case '3':
    result = 'лето';
    console.log(result);
    break;
    case '4':
    result = 'осень';
    console.log(result);
    break;
};