//Занятие 

let men = 2
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