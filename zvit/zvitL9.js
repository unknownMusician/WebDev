import * as z from "./zvit.js";


const _descTextContent = `<h1 style="font-weight: normal"><b>Тема: </b>ІНТЕРФЕЙСИ ВЗАЄМОДІЇ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗ ДАНИХ (СКБД). SQL-ЗАПИТИ У PHP-СЦЕНАРІЯХ. ІНТЕРФЕЙСИ WEB-ЗАСТОСУВАНЬ з СКБД. ВИКОРИСТАННЯ СЕСІЙ І COOKIES  В СЦЕНАРІЯХ АВТОРИЗАЦІЇ. РОЗРОБКА СЦЕНАРІЇВ ОБРОБКИ ДАНИХ З ФАЙЛІВ.</h1>У 8 Лабораторній роботі ми повинні були придбати практичні навички роботи взаємодії WEB- застосувань з СКБД, використання сесій і cookies  в сценаріях авторизації, розробки сценаріїв обробки даних з файлів. Для ціх цілей ми використоували Apage Server, php, html ,css ,MySql, WebStorm, Visual Studio`;
const _tableTask = ``;
const _ajaxOur = ``;
const _programFunctional = ``;
const _compareFunctional = ``;
const _conclusions =  `На цій лабораторній роботі, ми набули практичні навички роботи взаємодії WEB- застосувань з СКБД, використання сесій і cookies  в сценаріях авторизації, розробки сценаріїв обробки даних з файлів. `;

export default function showLab9(leftButtons){
    z.createLeftInfoBtn(leftButtons, "Тема та постановка задачі Лабораторної роботи №9", _descTextContent);
    z.createBtnWithRedirect(leftButtons, "Виконання другого пункту (Аjax-запит, Таблиця)", "../lab9/");
    z.createLeftInfoBtn(leftButtons, "Опис другого пункту (Аjax-запит, Таблиця)", _tableTask);
    z.createBtnWithRedirect(leftButtons, "Власний сайт", "../WebSites/lab9/client/index.php");
    z.createLeftInfoBtn(leftButtons, "Аjax-запити у власному сайті", _ajaxOur);
    z.createLeftInfoBtn(leftButtons, "Повний список функціоналу програми", _programFunctional);
    z.createLeftInfoBtn(leftButtons, "Порівняння функціоналу першої та девятої лабораторних", _compareFunctional);
    z.createLeftInfoBtn(leftButtons, "Висновки", _conclusions);

}