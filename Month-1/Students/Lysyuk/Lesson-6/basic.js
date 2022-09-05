
 //div[@class='entry-contents']
 //div[@class='entry-contents']/div
//div[@class='entry-contents']//div
 //div
 //a|//img
 //*[@class="popUp-form-title"]

//css
document.querySelector('');
document.querySelectorAll('');
//xPath
$x('');


//Предикаты XPath

//li[@class='page-item'] - Выбрать все принадлежащие Атрибуту class - значения page-item с Элементом li
//article/div[1] - Выбрать принадлежащий статье Дочерний элемент - Первый элемент div (Запись: div [1])
//article/div[last()] - Выбрать принадлежащий статье Дочерний элемент - Последний элемент div (Запись: div [las())
//article/div[last()-1] - Выбрать принадлежащий статье Дочерний элемент - Предпоследний элемент div (Запись: div [last () - 1)

//li[@class='page-item']
//ul[@class='glossary__list']/li[1]
//ul[@class='glossary__list']/li[last()]
//ul[@class='glossary__list']/li[last()-1] // -2,-3 порядок выбираете сами

//practise

//1  $x('div[@class='searchform']/input');
//или 
$x("input[type='text']");

//2  
$x("//ul[@class='glossary_list']/li[17]");

//пример атрибута
//a[@href="https://apps.apple.com/ua/app/beaxy-exchange/id1493015933?"

//поиск по тексту
//h1[text()='Beaxy Blog']

//*[contains(text()."Beaxy")]




// Practical task: 
//Сформируйте локаторы:
//Заголовка страницы https://www.beaxy.com/blog/


//*[@class='title'];
//h1[@class ='title']



//Раздела Podcasts - ссылку

//*[@ href="https://www.beaxy.com/tag/podcast/";
//ul[@class='blog-pagination']/li[@class='page-menu_header--item']/a/Podcasts


//Найдите селектор даты и автора первого поста (локатор с использованием ‘text(), contains’  и без.)


          //Home task: https://www.beaxy.com/contact-us/
//Найти все селекторы для формы:

       //Your Name
//div[@class="rendered form"]/div[1]/div[2]/input/div[@type="text"]

      //Email
//div[@class='rendered-form']/div[1]/div[2]//input/input[@class='form-control' and @type='email']

    //Code Phone (Bolivia)
//span[@class='countriesselect-block']/input[last()]/input[@type='tel',@name='phone-countries-1657528703195-0'
    //Text
//div/textarea[@class="form-control"]/textarea
    //Send
//div/button[text()="Send"]')