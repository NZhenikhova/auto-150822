const user = {
    uid: 'qwerty12345',
    pan: '44441111',
    firstName: 'Viktor'
}

console.log(user)
console.log(user.pan)

//добавить значение ключу
user.pan = '55552222'

//delete
delete user.uid

//create
let object = new Object ()
let object2 = {}

//
const user2 = {
    uid: '1qwerty12345',
    pan: '144441111',
    firstName: 'Viktor',
    'age': true,
    address: {
        city: 'Dnipro',
        street: 'Myrna'
    }
}

console.log(user2.address.street)

//обход цикла for in
const user3 = {
    uid: '1qwerty12345',
    pan: '144441111',
    firstName: 'Viktor',
    'age': true,
    address: {
        city: 'Dnipro',
        street: 'Myrna'
    }
}
for(clientName in user3){
    console.log(clientName, user3[clientName])
}

//clientName - вывод ключей
//user3[clientName] - вывод значений


const user4 = {
    uid: '1qwerty12345',
    pan: '144441111',
    firstName: 'Viktor',
    'age': true,
    address: function(){
        return this.pan
    }
}

for(keyName in user4){
     if(keyName == 'uid'){
            console.log(user4.address, 'Вызов функции')
}
}
//


