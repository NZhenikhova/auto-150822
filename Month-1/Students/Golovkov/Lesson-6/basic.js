//div[@class='entry-content]  - обращение по классам
//div[@class='entry-content]/div
``js
1. entry-contents
2. html/head/meta …
3. //div[@class='entry-contents']
4. //div[@class='entry-contents']/div
5. //div[@class='entry-contents']//div
6. //div
7. //a|//img
8. //*[@class="popUp-form-title"] - 

document.querySelector('.ghmgmgh')
document.querySelectorAll('.hvmghm')  поиск в вкладке Consile
document.querySelector('.ghmgmgh').click();  - нажать через вкладке Consile

$x('') -поиск XPash в вкладке Consile


/*Домашка

Заголовка страницы https://www.beaxy.com/blog/
//h1[@class='title']
Раздела Podcasts - ссылку
//a[@href='https://www.beaxy.com/tag/podcast/']
Найдите селектор даты и автора первого поста (локатор с использованием ‘text(), contains’  и без.)
//div[@class='entry-contents']/div[last()]//p - дата первого поста
//div[@class='entry-contents']/div[last()]/div//a -  автор первого поста
//*[text()='December 21, 2021 | &nbsp;'] - дата последнего поста через text()
//div[@class='entry-contents']/div[last()]//*[text()='James Messi'] - автор последнего поста через text() (длинный получился, по-другому не получалось)
//*[contains(text(), 'December 21')] - дата последнего поста через contains
//div[@class='entry-contents']/div[last()]//*[contains(text(), 'James Messi')] - автор последнего поста через contains (длинный получился, по-другому не получалось)
*/

//Найти все селекторы для формы:
//*[@type='text' and @class='form-control']   -  Your Name
//*[@id='text-1657528683863-0']  -  Email
//*[@src='/wp-content/plugins/cfb-contact-form-builder/images/flags/AO.png']  -  Code Phone (Bolivia)
//input[@name='phone-countries-1657528703195-0']  - Number
//div[@class='formbuilder-textarea form-group field-textarea-1657528725179-0']/textarea  -  Text
//textarea[@class='form-control']  - Text
//button[@id='button-1657528739667-0'] -  Send