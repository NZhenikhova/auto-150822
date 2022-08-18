
let index = 10;

if(index > 0 && index < 5){
    console.log('Первый блок')
} else if(index > 5 || index < 10) 
{
    console.log('Второй блок');
} else if (index !=10) {
    console.log('Третий блок');
};

const dog = 5;
const cat = '5';

dog === cat ? (console.log("привет")) : (console.log('пока'));