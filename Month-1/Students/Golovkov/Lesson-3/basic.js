//Занятие 

/*let men = 2
let girl = 5

//Декларация - можно вызывать перед и после инициализировалась 
function firstFunk() {
    console.log(`Всего ${men} мальчиков и ${girl} девочек`); //интерполяция
}

firstFunk()

//expression - можно вызывать только после инициализации
const secondFunk = function(){
    console.log('привет')
}

secondFunk()

function firstFunk() {
    men >18?console.log(true): console.log(false);

}
firstFunk()


//стрелочные (Arrow) функции - только после инициализации
const thirdFunk = (num1, num2) => {
let result = num1 * num2;
   console.log (result)
}

thirdFunk(men,girl)


//return
//function test1 (num1, num2, num3)
//......................

const thirdFunk1 = (num1, num2) => {
    return num1 + num2
       console.log (result)
    }

    thirdFunk1(4,6)


/*function isSrtongPassword (password) {
        const length = password.length;
        return length >8 && length<20;
    }

    const one = isSrtongPassword('password');
    console.log('Check word password is strong', one);
    console.log('');
    console.log('Больше 20 символов', tree); */

    ///ДОМАШКА
    //1.
    ////////////// variant 1

// Task 1
// Напишем стрелочную функцию, проверяющую квартиру. 
// Она принимает два аргумента: площадь (число) и название улицы (строку):
// площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И 
// улица должна быть равна “School-street”
    
    const checkFlat1 = (square, street) => {
    let result = square >=100 || square>=80 && street==='School-street'? console.log(true):console.log(false)
    }
    checkFlat1(79,'School-street')
     
    ////////////// variant 2

    const checkFlat2 = (square, street) => {
        return square >=100 || square>=80 && street==='School-street'
    }

    checkFlat2(79,'School-street')
    result = checkFlat2(79,'School-street')
    console.log(result)  

    /* Comments Task 1 
    1. Второй вариант краше, молодец!
    2. Variable shuld be created with const or let 
    3. Для оптимизации вот этой части  square >=100 || square>=80
    можно сделать вот так square>=80, это будет покрывать случай с номером 100
    */

    // Task 2
    // Реализуйте функцию, который проверяет формат указанного телефона. 
    // Если телефон начинается с +, значит это международный формат.

    const checkPhone = (phone) => {
    //let result = phone.includes("+")?console.log(true): console.log(false)
    let result = phone.indexOf("+")
    result === 0 ? console.log('Это международный формат'):console.log('Это не международный формат')
    }

    checkPhone('+380953622897')  

    /* Comments Task 2 
    1. Оба подхода хороши! includes - тут можно было сказать что вхождения по 0 индексу
    и indexOf тоже отлично, еще можно вот так phone[0] 
    */
    
   // Task 3
   // Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’
   // и выведет в консоль true.

const checkString = (value) => {
    let valueAny = typeof value 
     valueAny === 'string' ? console.log(true):console.log(false)
}
checkString('apple') 
/*
Отлично! Можно немного поработать с названиеми переменных valueAny => type
*/