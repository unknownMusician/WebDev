import * as z from "./zvit.js";


const _descTextContent = `<h1 style="font-weight: normal"><b>Тема: </b>ІНТЕРФЕЙСИ ВЗАЄМОДІЇ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗ ДАНИХ (СКБД). SQL-ЗАПИТИ У PHP-СЦЕНАРІЯХ. ІНТЕРФЕЙСИ WEB-ЗАСТОСУВАНЬ з СКБД. ВИКОРИСТАННЯ СЕСІЙ І COOKIES  В СЦЕНАРІЯХ АВТОРИЗАЦІЇ. РОЗРОБКА СЦЕНАРІЇВ ОБРОБКИ ДАНИХ З ФАЙЛІВ.</h1>У 8 Лабораторній роботі ми повинні були придбати практичні навички роботи взаємодії WEB- застосувань з СКБД, використання сесій і cookies  в сценаріях авторизації, розробки сценаріїв обробки даних з файлів. Для ціх цілей ми використоували Apage Server, php, html ,css ,MySql, WebStorm, Visual Studio`;
const  _infologicalModel = `<p>Для розробки нашого сайту, де користувач буде записувати всі його події, їх дату, назву та опис нам потрібно всьго дві сутонсті - Події та Користувачі.</p><p style="font-weight: bold;text-align: center">Інфологічна модель</p><p style="text-align: center;"><img src="../img/lab8/infological_p1.png" /></p><p style="text-align: center;"><img src="../img/lab8/infological_p2.png" /></p><p style="text-align: center;"><img src="../img/lab8/infological_p3.png" /></p>`;
const _datalogicalModel = `<p>Після створення даталогічної моделі можемо приступити до даталогічної.</p><p style="font-weight: bold; text-align: center">Даталогічна модель</p><p>Так як наша інфологічна модель немає транзитивних залежностей між атрибутами сутностей,  кожен атрибут має тільки одне значення (немає складених атрибутів) та кожна сутність має свій ідентифіктор (ID), отже наша модель приведена до 3НФ, а отже ми можемо зробити даталогічну модель:</p><p style="text-align: center;"><img src="../img/lab8/datalogical_p1.png" /></p><p style="text-align: center;">Обмження ціліснотсі для таблиці Events:</p><p style="text-align: center;"><img src="../img/lab8/datalogical_p2.png" /></p><p style="text-align: center;">Обмження ціліснотсі для таблиці Users:</p><p style="text-align: center;"><img src="../img/lab8/datalogical_p3.png" /></p>`;
const _sql =  `<p style="text-align: center;">SQL запити на створення бази данних з таблицями</p><p style="text-align: center;"><img src="../img/lab8/sql_p1.png" /></p><p style="text-align: center;">SQL запити на створення подій</p><p style="text-align: center;"><img src="../img/lab8/sql_p2.png" /></p><p style="text-align: center;"><img src="../img/lab8/sql_p1.png" /></p><p style="text-align: center;">SQL запити на створення користувачів</p><p style="text-align: center;"><img src="../img/lab8/sql_p3.png" /></p>`;
const _authorization =  `<p>Коли користувач заходить на сайт, якщо в сесії немає користувач, отже він не авторизований, тому користувача відправить на сторінку авторизації</p><p>HTML код сторінки авторзації</p><p style="text-align: center;"><img src="../img/lab8/au_html_p1.png" /></p><p style="text-align: center;"><img src="../img/lab8/au_html_p2.png" /></p><p>Перевірка введених даних користувачем за допомогою php та sql запиту</p><p style="text-align: center;"><img src="../img/lab8/au_php_p1.png" /></p><p>Сама сторінка</p><p style="text-align: center;"><img src="../img/lab8/au_p1.png" /></p>`;
const _lang =  `<p>Коли користувач заходить на сторінку він може обрати одну з трьох мов</p><p style="text-align: center;"><img src="../img/lab8/lang_p1.png" /></p><p>HTML code</p><p style="text-align: center;"><img src="../img/lab8/lang_html_p1.png" /></p><p>При виборі однієї з мов, значення мови записується в кукі змінну lang, яка зберігає вибір користувача</p><p style="font-weight: bold;text-align: center">Реалізація:</p><p>Перевірка наявності кукі змінної та переданих параметрів. Встановлення кукі змінної в залежності від параметрів</p><p style="text-align: center;"><img src="../img/lab8/lang_php_p1.png"/></p><p>Зміна html в залежності від параметру мови</p><p style="text-align: center;"><img src="../img/lab8/lang_php_p2.png"/></p><p style="text-align: center;"><img src="../img/lab8/lang_php_p3.png"/></p><p>Приклад:</p><p style="text-align: center;"><img src="../img/lab8/lan_rel_p1.png"/></p><p style="text-align: center;"><img src="../img/lab8/lan_rel_p2.png"/></p>`;
const _conclusions =  `На цій лабораторній роботі, ми набули практичні навички роботи взаємодії WEB- застосувань з СКБД, використання сесій і cookies  в сценаріях авторизації, розробки сценаріїв обробки даних з файлів. `;








export default function showLab8(leftButtons){
    z.createLeftInfoBtn(leftButtons, "Тема та постановка задачі Лабораторної роботи №8", _descTextContent);
    z.createLeftInfoBtn(leftButtons, "Інфологічна модель", _infologicalModel);
    z.createLeftInfoBtn(leftButtons, "Даталогічна модель", _datalogicalModel);
    z.createLeftInfoBtn(leftButtons, "SQL запити до БД", _sql);
    z.createLeftInfoBtn(leftButtons, "Авторизація", _authorization);
    z.createLeftInfoBtn(leftButtons, "Вибір мов", _lang);
    z.createLeftInfoBtn(leftButtons, "Висновки", _conclusions);

}