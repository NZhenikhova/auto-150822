// select   "XPath"   / "CSS"


//div[@class='entry-contents']
//*[@class="popUp-form-title"]

//css
/*
document.querySelector("");
document.querySelectorAll("");
*/
//Xpath

//$x

// Practical task
/*
    1. Заголовка страницы https://www.beaxy.com/blog/

Xpath:
//div[@class="header-main-logo"]/a/img
CSS:
$x('//div[@class="header-main-logo"]/a/img')

    2. Раздела Podcasts - ссылку

Xpath:
//div[@class="page-menu"]/ul/li [3]/a
CSS:
$x('//div[@class="page-menu"]/lu/li[3]/a')

    3. Найдите селектор даты и автора первого поста 
    (локатор с использованием ‘text(), contains’  и без.)

Xpath:
//*[contains(text(),'April 11, 2022 | ')]            // дата
//*[contains(text(),'James Messi')]                  // автор
CSS:
$x('//*[contains(text(),"April 11, 2022 | ")]   ')   // дата
$x('//*[contains(text(),"James Messi")]   ')        // автор



Xpath:

CSS:




// Home Task

        //Найти все селекторы для формы:


      //  Your Name
Xpath:
//div[@class="formbuilder-text form-group field-text-1657528653164-0"]/input
CSS:
$x('//div[@class="formbuilder-text form-group field-text-1657528653164-0"]/input')

    //Email

Xpath:
//div[@class="formbuilder-text form-group field-text-1657528683863-0"]/input
CSS:
$x("//div[@class='formbuilder-text form-group field-text-1657528683863-0']/input")

    //Code Phone (Bolivia)

Xpath:
//div[@class='formbuilder-phone-countries form-group field-phone-countries-1657528703195-0']/span/span/img
CSS:
$x("//div[@class='formbuilder-phone-countries form-group field-phone-countries-1657528703195-0']/span/span/img")

    //Phone

Xpath:
//div[@class='formbuilder-phone-countries form-group field-phone-countries-1657528703195-0']/span/input[2]
CSS:
$x("//div[@class='formbuilder-phone-countries form-group field-phone-countries-1657528703195-0']/span/input[2]")


    //Text

Xpath:
//div[@class="formbuilder-textarea form-group field-textarea-1657528725179-0"]/textarea
CSS:
$x('//div[@class="formbuilder-textarea form-group field-textarea-1657528725179-0"]/textarea')

    //Send

Xpath:
//div[@class="formbuilder-button form-group field-button-1657528739667-0"]/button
CSS:
$x('//div[@class="formbuilder-button form-group field-button-1657528739667-0"]/button')

*/

/*Comments:
1) //div[@class='formbuilder-phone-countries form-group field-phone-countries-1657528703195-0']/span/span/img
находит на код страны,
2) Не совсем поняла, что значит вот эта запись - CSS:
$x('//div[@class="formbuilder-button form-group field-button-1657528739667-0"]/button')

*/