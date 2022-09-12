/*
Practical task: Сформировать селекторы
https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event
Сформировать селекторы на форму отправки комментария к посту
emoji - svg[viewBox="-2 -2 19 19"]
Фото - //div[@class='QbD0Gl']/label
GIF - //div[@class='QbD0Gl']/button
video //div[@class='QbD0Gl']/button[2]
textArea //div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']/span/span
cancel //div[@class='mhU2oc']/div/button
publish //div[@class='mhU2oc']/div[2]/button
*/

/*2. Home task:
Повторить всю тему селекторов.
Используя Xpath построить селекторы для формы обратной связи https://yevheniiahlovatska.editorx.io/web-practice/contact
Используя CSS построить селекторы для страницы товара
	https://yevheniiahlovatska.editorx.io/web-practice/product-page/red-clutch
Вся информация о товаре + кнопка добавить товар
Xpath
first-name//div[@class='nK06J _65cjg _3TyBu']/div/input
last name 
email - //form[@class='_2FOa5 comp-kdr40wlx-container']/div[3]/div/input
texy - //form[@class='_2FOa5 comp-kdr40wlx-container']/div[4]/textarea
submit - //form[@class='_2FOa5 comp-kdr40wlx-container']/div[5]/button

CSS
Вся информация о товаре
картинка - div[data-hook='responsive-gallery-media-container']
код div[data-'hook=sku']
цена div[data-hook='product-price']
цвет section[data-hook="product-colors-title-section"] :last-child или ._1FreV :nth-child(6) :nth-child(2)
кол-во input[data-hook="number-input-spinner-input"] 
инфор о товаре ._1FreV :nth-child(8)

Дополнительно если вы еще захотите, еще пару задач:
https://www.ctrs.com.ua/smartfony/    использовать аттрибуты css : * ^ ~ $ 
1. Написать локатор на поисковое поле - [placeholder*="Пошук"]
2. Найти каталог продуктов  и сделать клин на первый продукт
После как сделали клик https://www.ctrs.com.ua/smartfony/g990b-zaf-gray-samsung-s21fe-6128-gb-new-707505.html
3. надо нажать на кнопку купить 
4. Найти все кнопки с шарингом 
-картинка - [class="preview-0-2-338"] :first-child
-название - [class="content-0-2-339"]
- Товарів в кошику [class="content-0-2-339"] :nth-child(2)
-Перейти до кошика [class="link link-dashed"] 
Купити в кредит кнопка - [class="df jcc bd0 cup on aic uppercase medium root-0-2-141 root-d13-0-2-359 medium-0-2-150 stroke-0-2-147 full-width"]
Оформити замовлення- [href="https://me.ctrs.com.ua/uk/checkout?resourceType=99&basketId=267714701"] :first-child
*/