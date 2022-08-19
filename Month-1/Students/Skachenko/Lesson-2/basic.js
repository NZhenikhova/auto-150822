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
let num = '4';
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
////////////////////////////////////////////////////////////////
/*Home task:
Задача 1
Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест
Задача 2
Напишите условие: Если возраст пользователя равно 18, то выведете текст “Возраст совпал”, если возраст пользователя превышает ожидаемый но меньше 30, то выведете текст “Категория - 1”, если возраст больше 30, то выведете текст `“Возраст пользователя” подходящий для приема на работу`
Задача 3
Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
Задача 4
В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
Задача 5
Напишите код switch, который будет соответствовать следующему if..else:
if(browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }
  */

  //Задание 1//
let a = 'test' 
if (a == 'test') {
  console.log('верно');
} else {
  console.log('не верно');
};
  //Задание 2//
let age = 18
