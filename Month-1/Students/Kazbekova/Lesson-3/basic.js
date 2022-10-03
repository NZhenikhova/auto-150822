/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

////Homework 
 ///Задание 1

 let a1 = 'test';

 switch(a1){
     case'test':
     console.log('Верно');
 break;
 
 case'test1':
 case'test2':
 case'test3':
     console.log('Неверно');
 break;
 }
 
 ///////Задача2
  const age = 18;
  if(age=>18){
     console.log("Возраст совпал");
  }else if(age > 18 && age < 30){
         console.log('Категория-1');
  }else{(age=>30)
     console.log(`“Возраст пользователя” подходящий для приема на работу`)
  }
  ;
 
  /////////Задача5
 const browser = "Edge";
 switch(browser){
     case'Edge':
         console.log('You have got Edge!');
     break;
 case'Chrome':
 case'Firefox':
 case'Opera':
         console.log('Okay we support these browsers too');
     break;
 }
 ////////////Задача 3
 const a = 1;
 const b = 3;
 if(a<=1 && b>=3){
     console.log(a + b);
 }else{(b - a);
 }
 
 const c = 0;
 const d = 6;
 if(c<=1 && d>=3){
     console.log(c + d);
 }else{(d - c);
 }
 
 const a2 = 3;
 const b2 = 5;
 if(a<=1 && b>=3){
     console.log(a + b);
 }else{(b - a);
 }
 
 ///Задача4
 const month = 3;
 if(month==3 && month == 4 && month == 5){
     console.log('весна');
 }else if(month== 6 && month == 7 && month == 8){
     console.log('лето');
 }else if(month ==9 && month == 10 && month == 11){
     console.log('осень');
 }else if (month==12 && month==1 && month ==2){
     console.log('зима');
 }
 ;