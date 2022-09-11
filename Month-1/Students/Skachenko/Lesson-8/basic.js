/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

//a[@href='https://www.beaxy.com/author/james-messi/']/preceding-sibling::p 
//a[@href='https://www.beaxy.com/author/james-messi/']/ancestor::article. - родитель родителя
//div[@class='item-body__info']/child::a

//div:first-child

ul:first-of-type
 :last-of-type
 :only-of-type
 :nth-of-type
 :nth-last-of-type



/*
1. :first-child – первый потомок своего родителя.

2. :last-child – последний потомок своего родителя.

3. :only-child – единственный потомок своего родителя, соседних элементов нет.

4.:nth-child(a) – потомок номер a своего родителя, например :nth-child(2) – второй потомок. Нумерация начинается с 1.

5. :nth-child(an+b) – расширение предыдущего селектора через указание номера потомка формулой, где a,b – константы, а под n подразумевается любое целое число.
*/

//$$('[data-hook="colorGroup"] li label input')[4].click()

/*
https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event

Сформировать селекторы на форму отправки комментария к посту
 emoji  //button[@aria-label="Add an emoji"]    button[aria-label="Add an emoji"]
 Фото   //div[@aria-label="Add an image"]       #file_input_196
 GIF    //button[@aria-label="Add a GIF"]/ancestor::div[@data-content-hook="popover-content--undefined"]    button[aria-label="Add a GIF"]
 video  //button[@aria-label="Add a video"] button[aria-label="Add a video"]
 textArea   div[data-hook="comment-box-rce-wrapper"]
 cancel 
 publish    

2. Home task: 
Повторить всю тему селекторов.
 Используя Xpath построить селекторы для формы обратной связи https://yevheniiahlovatska.editorx.io/web-practice/contact
 Используя CSS построить селекторы для страницы товара
    https://yevheniiahlovatska.editorx.io/web-practice/product-page/red-clutch
 Вся информация о товаре + кнопка добавить товар
*/