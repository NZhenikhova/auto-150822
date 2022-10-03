/*const man = {
    gfggf:'jfj',
    hfgf:'fjjf'}

    console.log(man)
    console.log(man.gfggf)

   добавить обьект
    man.ythth = 'sdfs'

    удалить
    delete man.gfggf

    создание
    let object = new Object()
    let object2 = {}  */

/*
    const man = {
        gfggf:'jfj',
        hfgf:'fjjf',
        'hfjfjjf':true}

        console.log(man)
        console.log(man["hfjfjjf"])


        //for in - цикл для перебора обьекта
        for (tero in man){
            console.log(propertyName, man[propertyName])
        }

        propertyName - такой формат, вывод только ключей
        man[propertyName] - такой формат, вывод только значений

////////////////////////
        for (let tero in man){
            if(tero == 'id'){
            console.log(propertyName, man[propertyName])
        }}

        
        const person = {
            name : 'Bob',
            age : '18',
            color : function(){
                console.log(this.name);
            }
        };
        
        person.color();

        const person1 = {
            name : 'Bob',
            age : '18',
            color : function(){
                return this.age
            }
        };
        
        person.color();  */


        //////////////////////
        
        let user = {
            name : 'Bob',
            age : '18',
            flat : function(){
                return this.age
            }
        }
        
        for (let tero in user){
            if(tero == 'name'){console.log(user.flat())
        
        }}



//Домашка

let client = {
    age:'30',
    name:'Vasilij',
    bankId:true,
    address:{
        city:'Dnipro',
        flat:52},
    balance:function(){
        for (let checkUid in bank) {
            if (checkUid == 'uid'){
                let newBank = {bank};
                newBank.changes = true;
                console.log(newBank);
            }
        }
    }
    } 

let bank = {
    maxCredit:20000,
    uid:'dfdf48f48e',
    installment:true,
    limit:function(){
        client.balance()
    }
}

bank.limit()