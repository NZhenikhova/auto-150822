/* Задание 5 Задача на функции:
Создайте два объекта. 
В каждом из них есть функция. 
Во втором объекте функция вызывает функцию первого объекта. 
Далее в первой функции первого объекта мы проверяем есть ли “ключ - uid” у  второго объекта, 
если есть то создаем новый  пустой объект к которому присваиваем второй объект, н
овому объекту добавляем “ключ - changes, значение - true” и выводим в консоль новый объект. 
(ожидаем объект с новым ключ- значением)*/


const citiesName = {
    name : 'Dnipro',
    age : '18',
    square : '2222222',
    color : function(){
        if (countriesName.name && countriesName.age && countriesName.square && countriesName.color != null){                              /*“ключ - uid*/
            const villageName = countriesName;
            villageName.changes = 'true';
            console.log(villageName);
        };
    }
    };

const countriesName = {
    name : 'Ukraine',
    age : '31',
    square  : '6666666',  
    color : function(){
        let color = citiesName.color();
      }
}; countriesName.color();

 










