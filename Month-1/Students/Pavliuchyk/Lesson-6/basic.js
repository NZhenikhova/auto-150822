// 
//div[@class='page-menu-responsiv']/div

//css
document.querySelector('');
document.querySelectorAll('');

//xPath
$x('');

$x('//div@[class="searchform"]');
$x("//li[@class='page-item']")/li[16];


/* Practical task: Сформируйте локаторы:

Заголовка страницы https://www.beaxy.com/blog/
//h1[@class='title'] 
//*[@class='title']

Раздела Podcasts - ссылку
//ul[@class='blog-pagination']/li[last()]/a
//*[@href='https://www.beaxy.com/tag/podcast/']


Найдите селектор даты и автора первого поста 
(локатор с использованием ‘text(), contains’  и без.)

делала на странице https://www.beaxy.com/blog/page/30/ - там первый пост 

даты: 
//div[@class='blog-item'][last()]//p
(//p[@class = 'info-date'])[last()]      
//div[@class='blog-item'][last()]//p[contains(. ,  'February 09, 2020')]
//div[@class='blog-item'][last()]//p[text() = 'February 09, 2020')]  - не работает, не смогла разобраться почему


автора: 
//div[@class='blog-item'][last()]/div/div/a
(//a[@rel= 'author'])[last()]
//div[@class='blog-item'][last()]//a[contains(. ,  'James Messi')]
//div[@class='blog-item'][last()]//a[text()  = 'James Messi')] - то же самое, как с датой 


Home task: https://www.beaxy.com/contact-us/
Найти все селекторы для формы:

Your Name
//div[@class='rendered-form']/div[1]/div[1]/input - сложный вариант, будет тяжело поддерживать
//input[@class='form-control' and @type='text']

Email
//div[@class='rendered-form']/div[1]/div[2]/input - сложный вариант, будет тяжело поддерживать
//input[@class='form-control' and @type='email']

Code Phone (Bolivia)
//span[@class='countriesselect-block']/input[1] (поле для кода) 
//div[@class='ss-content']/img[32] - не ту картирнку находит
//img[@data-country="BO" and @data-phonecode="591"] 

Phone
//span[@class='countriesselect-block']/input[last()]
//input[@type='tel' and @name='phone-countries-1657528703195-0']

Text
//textarea[@class='form-control']
//div[@class='rendered-form']/div[1]/div[4]/textarea - сложный вариант, будет тяжело поддерживать

Send
//button[@class='btn-default btn']
//div[@class='rendered-form']/div[1]/div[5]/button

*/

