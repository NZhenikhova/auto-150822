//a[@href='https://www.beaxy.com/author/james-messi/']/preceding-sibling::p
//a[@href='https://www.beaxy.com/author/james-messi/']/ancestor::article. - родитель родителя
 //div[@class='item-body__info']/child::a
//  ul:first-of-type
//  :last-of-type
//  :only-of-type
//  :nth-of-type
//  :nth-last-of-type
 
/*
1. :first-child – первый потомок своего родителя.

2. :last-child – последний потомок своего родителя.

3. :only-child – единственный потомок своего родителя, соседних элементов нет.

4.:nth-child(a) – потомок номер a своего родителя, например :nth-child(2) – второй потомок. Нумерация начинается с 1.

5. :nth-child(an+b) – расширение предыдущего селектора через указание номера потомка формулой, где a,b – константы, а под n подразумевается любое целое число.
*/
img[alt*='blacktie']

//span[@data-hook="filter-full-title"][contains(., "Collection")]
li[data-hook="filter-type-COLLECTION"]>button>span>span

$$('[data-hook="colorGroup"] li label input')[3].click()
 //button[@data-hook="filter-title-wrapper"]/ancestor::ul/li[2]
 $$('[data-hook="colorGroup"] li label input')[4].click()   



/* Practical task: Сформировать селекторы
https://yevheniiahlovatska.editorx.io/web-practicce/post/what-to-wear-to-a-blacktie-event
Сформировать селекторы на форму отправки комментария к посту

emoji
button[aria-label*='emoji']>div>svg>path или button[aria-label*='emoji'] 
//button[@aria-label='Add an emoji']
div[role='button'][data-hook*='emoji-group']   выбор "группы/вида" эмоджи
//div[@role='button'][@class='gr5te']   

Фото
input[role='button']
//input[@role='button']

GIF
button[aria-label*='GIF'] или button[aria-label*='GIF']>div>svg
input[placeholder*='GIF']
//button[@aria-label='Add a GIF'] а вот //button[@aria-label='Add a GIF']/div/svg - не работает и не понимаю почему
//input[@placeholder='Search for a GIF']

video
button[aria-label*='video']
input[type='url']
//button[@aria-label='Add a video']
//input[@type='url']
[data-hook*='CustomVideo']
//label[@data-hook='videoUploadModalCustomVideo']

textArea
div[id='root-comment-box-start']>div>button
//div[@id='root-comment-box-start']/div/button
div[id='root-comment-box-end']>div>button
//div[@id='root-comment-box-end']/div/button

cancel
button[data-hook='cancel-button']
//button[@data-hook='cancel-button']
div[data-hook='secondary-btn'] button
//div[@data-hook='secondary-btn']/button

publish
div[data-hook='primary-btn'] button
//div[@data-hook='primary-btn']/button
button[data-hook='submit-button']
//button[@data-hook='submit-button']

Comments:
emoji
button[aria-label*='emoji']>div>svg>path - это сложный локатор, его лучше не использовать
//button[@aria-label='Add an emoji'] - отлично
div[role='button'][data-hook*='emoji-group']   выбор "группы/вида" эмоджи
//div[@role='button'][@class='gr5te']  - это автогенерируемый class н не подходит

2. Home task:
Используя Xpath построить селекторы для формы обратной связи 
https://yevheniiahlovatska.editorx.io/web-practice/contact
//input[@name='first-name']
//input[@name='last-name']
//input[@type='email']
//textarea[@placeholder='Your message']
//span[text()='Submit']
Comments: Отлично!


Используя CSS построить селекторы для страницы товара
	https://yevheniiahlovatska.editorx.io/web-practice/product-page/red-clutch
1) svg>title[id='svgcid--fsuaikorvof5']   - иконка   !!! Comment 	не работает

2) p[class='font_5']>span>a[href*='web-practice']   - Highlite сложный вариант надо улучшить,]>span>a[ 
	это уже кажется немного пошло не туда, всегда надо искать оптимальный и лаконичный вариант
Comments: [data-testid="richTextElement"] a[href$='web-practice']

3) button[class='_3omZ_']   - log in
Comments:  и что же вам всем так нравтся автогенерируемые классы,
если значение аттрибута не читаемо и выглядит странно,
значит оно скорее всего автогенерируемо и надо его избегать_3omZ_
Можно было составить вот так - [data-testid="section-container"] button

4) [data-hook='cart-icon-button']  - корзина Отлично

5) svg[role='presentation']>title[id*=nrul]   - список 
Comments: Можно было воспользоваться вот таким вариантом - [data-testid="section-container"] svg[role="presentation"]

6) [data-hook='sku']   - код товара  Отично

7) div[id*='396w']>p   - out of stock - вариант не совсем хороший, тут или брать несколько //main/section/div[@data-testid="richTextElement"] 
и фильтровать нужный уже в коде, или чтобы девы добавили нормальный айди

8) [data-hook='product-title']   - название товара Отлично
   [data-hook='product-colors-title']   - название цвета Отлично
   [data-hook='icon']   - цвет Отлично

9) [data-hook='number-input-spinner-title']   - текст количества Отлично

10) input[type='number']   - инпут количества  можно еще вот так было бы data-hook="number-input-spinner-input"

11) button[class*='buttonnext'] или span[class*='buttonnext'] - кнопка Add to cart (Comments span не считается надежным используй его изредка)
12) wow-image[id*='13']>img   - изображение товара  
Comments: Твой селектор у меня не работат, опробуй вот этот - data-hook="responsive-gallery-media"


13) [data-hook='description']   - описание продукта под кнопкой
14)  Молодец, Отлично!
[data-hook='stacked-info-item']:nth-child(1)   - весь первый блок Product Info
[data-hook='stacked-info-item']:nth-child(1)>div>h2   - title первого блока 
[data-hook='stacked-info-item']:nth-child(1)>div>div   - текст первого блока
[data-hook='stacked-info-item']:nth-child(2)   - весь второй блок Return & Refund policy
[data-hook='stacked-info-item']:nth-child(2)>div>h2   - title второго блока 
[data-hook='stacked-info-item']:nth-child(2)>div>div   - текст второго блока
[data-hook='stacked-info-item']:nth-child(3)   - весь третий блок Shipping Info
[data-hook='stacked-info-item']:nth-child(3)>div>h2   - title третьего блока 
[data-hook='stacked-info-item']:nth-child(3)>div>div   - текст третьего блока


Дополнительно 
https://www.ctrs.com.ua/smartfony/    использовать аттрибуты css : * ^ ~ $ 
1. Написать локатор на поисковое поле
input[class^='search-input']

2. Найти каталог продуктов  и сделать клик на первый продукт
button[class*=menu-trigger]   - выпадающий список меню
[type='button']>img[alt='Каталог']
a[href*='zamovlennya-novinok']   - первый предложенный вариант при клике каталог (ссылка на новинки)

После как сделали клик https://www.ctrs.com.ua/smartfony/g990b-zaf-gray-samsung-s21fe-6128-gb-new-707505.html
3. надо нажать на кнопку купить 
button[class*=buyButton] - тут две кнопки возвращается

4. Найти все кнопки с шарингом ! Отлично
button[class*=share] img[alt~='Facebook']
button[class*=share] img[alt~='Telegram']
button[class*=share] img[alt~='Whatsapp']

Еще обсудим эту задачу завтра

*/






