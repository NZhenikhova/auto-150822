//css
document.querySelector('');
document.querySelectorAll('');
//xPath
$x('');


// Practical task: Сформируйте локаторы:
// Заголовка страницы https://www.beaxy.com/blog/

//div[@class="page-title"]/h1[@class="title"] - вариант 1
//div/h1[@class="title"] - вариант 2

// Раздела Podcasts - ссылку

//ul[@class="blog-pagination"]/li[@class="page-menu__header--item"]/a[contains(. ,'Podcasts')]

// Найдите селектор даты и автора первого поста (локатор с использованием ‘text(), contains’  и без.)

document.querySelector('.item-body__info') //селектор css элементов первого поста

$x('//div[@class="entry-contents"]/div[1]/div/div/p[@class="info-date"]|//div[@class="entry-contents"]/div[1]/div/div/a[@rel="author"]') //вариант 1 - без использования поиска по тексту
$x('//div[@class="entry-contents"]/div[1]/div/div/p|//div[@class="entry-contents"]/div[1]/div/div/a]') //вариант 2 - без использования поиска по тексту


$x('//div[@class="entry-contents"]/div[1]//p[contains(. ,"April 11, 2022")]|//div[@class="entry-contents"]/div[1]//a[contains(. ,"James Messi")]') //с использованием поиска по тексту


=============


// Home task: https://www.beaxy.com/contact-us/
// Найти все селекторы для формы:
// Your Name

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[1]/input')

//Email

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[2]/input')

//Code Phone (Bolivia)

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[3]/span//img[@data-country="BO"]')

//Phone

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[3]/span/input[2]')

//Text

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[4]/textarea')

//Send

$x('//div[@class="form-send contact-us__form-send"]/form/div/div/div[5]/button')