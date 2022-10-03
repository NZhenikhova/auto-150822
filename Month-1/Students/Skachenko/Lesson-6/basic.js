/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/


//div[@class='entry-contents']/div

//CSS - search in Console DevTools
document.querySelector('');
document.querySelectorAll('');
document.querySelectorAll('').click();

//XPath - search in Console DevTools
$x('');
$x('//div[@class="searchform"]/label/input')
$x('//ul[@class="glossary__list"]/li[17]/a')
$x('//p[@class="info-date"].text()."December 24, 2021"');



//li[@class='page-item']
//ul[@class='glossary__list']/li[1]
//ul[@class='glossary__list']/li[last()]
//ul[@class='glossary__list']/li[last()-1] // -2,-3 порядок выбираете сами


Practical task: Сформируйте локаторы:
 Заголовка страницы https://www.beaxy.com/blog/ //$x('//div/h1[@class="title"]')
 Раздела Podcasts - ссылку  //$x('//ul[@class="blog-pagination"]/li[3]/a')
 Найдите селектор даты и автора первого поста (локатор с использованием ‘text(), contains’  и без.)  
//$x('//div[@class="blog-item"][1]//p[text()]')      $x('//div[@class="blog-item"][1]//a[text()="James Messi"]')
//$x('//div[@class="blog-item"][1]//p[contains(text(),"April")]')  $x('//div[@class="blog-item"][1]//a[contains(text(),"James Messi")]')
//$x('//div[@class="blog-item"][1]//p')    ($x('//div[@class="blog-item"][1]/div/div/a')).click()


Home task: https://www.beaxy.com/contact-us/

Найти все селекторы для формы:
 Your Name  //$x('//div[@class="formbuilder-text form-group field-text-1657528653164-0"]/input')   //$x('//div/input[@type="text"]')
 Email  //$x('//div[@id="wrapper-1"]//input[@type="email"]')
 Code Phone (Bolivia)  //$x('//*/img[@title="BO"]')
 Phone  //$x('//span/input[@type="tel"]')
 Text  //$x('//div/textarea[@class="form-control"]')
 Send  //$x('//div/button[text()="Send"]')

 /*
 1)  Text  //$x('//div/textarea[@class="form-control"]') - можно сократить, подумай
 2)  Send  //$x('//div/button[text()="Send"]') - можно сократить

  Отлично, хорошие варианты!
 */