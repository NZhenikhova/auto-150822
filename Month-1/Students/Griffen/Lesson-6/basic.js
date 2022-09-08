// Локаторы

//div[@class='entry-contents;']


// css поиск селектора в консоли
document.querySelector('.entry-header');
document.querySelectorAll('');

//xpath

$x('//div[@class='entry-co']')

//h1[text()='Beaxy Blog']






// Home work

//h1[@class = 'title'] -- Заголовок страницы

//ul[@class="blog-pagination"]/li[3]/a -- ссылка на Podcasts

//*[contains(text(),"April 11, 2022")] -- дата и автор первого поста

//a[contains(. ,'Messi')][1] 


/* Найти все селекторы для формы:

//div[@class="rendered-form"]/div/div/input[@type="text"]  -- Your Name
//div[@class="rendered-form"]/div/div/input[@type="email"]  -- Email
//div[@class="formbuilder-phone-countries form-group field-phone-countries-1657528703195-0"]/span/input  (не получается)  -- Code Phone (Bolivia)
//*[@id="phone-countries-1657528703195-0"] -- Phone
//div[@class="formbuilder-textarea form-group field-textarea-1657528725179-0"]/textarea  -- Text
//div[@class="formbuilder-button form-group field-button-1657528739667-0"]/button  -- Send

