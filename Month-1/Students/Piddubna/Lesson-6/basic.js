/*
Class about selectors
*/

//div[@class='entry-contents'] - xpath elements search
//div - all div elements search
//*[class='popUp-form-title'] - search using class
//document.queryselectorAll('.entry-header'); - searching for query selector

//Xpath
//$x("//div@class")

//Class task
$x('//page-title[@class="title"]')
$x('//page-menu/ul/li[@class="page-menu__header--item"]')

//podkast page
$x("//p[contains(. ,'August')]")
$x("//p[contains(. ,'James')]")
$x("//p[@class='info-date']")
$x("//p[@class='info-date']/a[@href='https://www.beaxy.com/author/james-messi/']")

//Home task
$x('//div[@class="formbuilder-text form-group field-text-1657528683863-0"]/input[@type="email"]')
$x('//div[@class="formbuilder-text form-group field-text-1657528683863-0"]/input[@type="text"]')
$x('//span[@class="countriesselect-block"]/input[@class="phone_code_input"]')
$x('//span[@class="countriesselect__selected"]')
$x('//span[@class="countriesselect-wrap"]/input[@type="tel"]') // не работает
$x('//div[@class="formbuilder-textarea form-group field-textarea-1657528725179-0"]/textarea[@class="form-control"]')
/*Comments:
1) $x('//span[@class="countriesselect-wrap"]/input[@type="tel"]') // не работает

*/