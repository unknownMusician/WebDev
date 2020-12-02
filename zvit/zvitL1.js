import * as z from "./zvit.js";

const lab1DescTextContent =
    `<h1 style="font-weight: normal"><b>Тема: </b>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ.
РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, ФОРМАМИ в HTML-ДОКУМЕНТІ.
</h1>` +
    "На першій лабораторній роботі наша задача була ознайомитись з основами HTML та треба було обрати" +
    " певну предметну галузь, якої буде розроблятися веб-застосунок. Створити " +
    "декілька сторінок з різними HTML документами. В одному документі потрібно було описати предметну галузь за допомогою " +
    "HTML. У другому документі треба було створити макет своєї майбутньої сторінки з таблицею, формою, картинкою і тд." +
    " У третьому HTML документі потрібно було зробити сторінку зі звітами з лабораторних робіт. "

const lab1LabTaskTextContent =
    "<>1. На свій розсуд вибрати любу предметну галузь і виконати опис цієї галузі, а саме:  опис бізнес-логіки системи (функціонал майбутньої програми)  , сценарій, об’екти взаимодії." +
    "<p><p>2.	На Гугл-Диску створити папку. Відкрити доступ для викладача. У даній папці будуть зберігатись всі зроблені студентом роботи." +
    "<p><p>3.	У даній папці створити папку Лабораторна робота №1.Розмістити всі зроблені  документи  у дану папку." +
    "<p><p>4.	У любому текстовому редакторі (наприклад Notepad++, або звичайний Блокнот)написати HTML-код документа, у якому розмістити опис предметної галузі. Зберігти з розширення .html." +
    "<p><p>5.	Запустити даний документ у  любому браузері для перевірки" +
    "<p><p>6.	У любому текстовому редакторі (наприклад Notepad++, або звичайний Блокнот) написати HTML-код  головної сторінки майбутньої програми. Зберігти з розширення .html. (Ця сторінка може змінюватись під час виконання наступних лабораторних робіт)." +
    "<p><p>7.	Запустити даний документ у  любому браузері для перевірки" +
    "<p><p>8.	На головній сторінці створеного документу розмістити на свій розсуд:" +
    "<p>•	 посилання на сторінку с описом предметної галузі" +
    "<p>•	таблицю" +
    "<p>•	форму." +
    "<p>•	зображеня (або декілька зображень)." +
    "<p><p>9.	Запустити у любому браузері для перевірки.<p><p>10.	Записати у новому файлі всі html-коди документів, які наведені вище." +
    "<p><p>11.	Три документа (головну сторінку, опис предметної гаузі та файл з кодами) розмістити у папці Лабораторна робота №1";

const lab1WorkTaskTextContent =
    "Програма створена для полегшення процессу організації робочого процесу користувача: організації розкладу, запису " +
    "важливих речей, взаємодії з розкладом та майбутнім календарем.";
const lab1HtmlTable = '<img src="../img/table.png" height="20%" width="100%"/>' + "<p>&lt;table border=\"1\"&gt;" + "<p>&lt;caption&gt;Наш розклад&lt;/caption&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;th&gt;&lt;/th&gt;" + "<p>&lt;th&gt;Понеділок&lt;/th&gt;" + "<p>&lt;th&gt;Вівторок&lt;/th&gt;" + "<p>&lt;th&gt;Середа&lt;/th&gt;" + "<p>&lt;th&gt;Четвер&lt;/th&gt;" + "<p>&lt;th&gt;П'ятниця&lt;/th&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;td&gt;1. 8:30&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;Розробка веб-застосувань&lt;/td&gt;" + "<p>&lt;td&gt;Основи клієнтської розробки&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;Вступ до філософії&lt;/td&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;td&gt;2. 10:25&lt;/td&gt;" + "<p>&lt;td&gt;Комп. мережі&lt;/td&gt;" + "<p>&lt;td&gt;Комп. мережі&lt;/td&gt;" + "<p>&lt;td&gt;Основи клієнтської розробки&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;td&gt;3. 12:20&lt;/td&gt;" + "<p>&lt;td&gt;ВМ-3&lt;/td&gt;" + "<p>&lt;td&gt;Англ&lt;/td&gt;" + "<p>&lt;td&gt;ВМ-3&lt;/td&gt;" + "<p>&lt;td&gt;Бази даних&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;td&gt;4. 14:15&lt;/td&gt;" + "<p>&lt;td&gt;ФВ&lt;/td&gt;" + "<p>&lt;td&gt;Бази даних&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;Розроблення веб-застосувань&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;tr&gt;" + "<p>&lt;td&gt;5. 16:10&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;&lt;/td&gt;" + "<p>&lt;td&gt;Психологія конфлікту&lt;/td&gt;" + "<p>&lt;/tr&gt;" + "<p>&lt;/table&gt;";
const lab1HtmlIndex = "&lt;!DOCTYPE html&gt;<p>" + "&lt;html lang=&quot;en&quot;&gt;<p>" + "&lt;head&gt;<p>" + "    &lt;meta charset=&quot;UTF-8&quot;&gt;<p>" + "    &lt;title&gt;Опис предменої галузі&lt;/title&gt;<p>" + "&lt;/head&gt;<p>" + "&lt;body style=&quot;background-color: #eeeeee;&quot;&gt;<p>" + "&lt;style&gt;<p>" + "    h1,h2{<p>" + "        font-family: 'Century Gothic';<p>" + "        font-weight: bold<p>" + "    }<p>" + "    h1 {<p>" + "        text-align: center;<p>" + "    }<p>" + "    div {<p>" + "        float: top;<p>" + "    }<p>" + "&lt;/style&gt;<p>" + "&lt;h1 style=&quot;text-align: center;<p>" + "    font-family: 'Century Gothic';<p>" + "    font-weight: bold ;<p>" + "    font-size: 64px&quot;&gt;<p>" + "    Інтерактивний календар<p>" + "&lt;/h1&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;h1&gt;Предмента галузь&lt;/h1&gt;<p>" + "&lt;/div&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;h2 style=&quot;line-height: 50px;&quot;&gt;<p>" + "        Ми, Нікіта Ліновицький та Овчинніков Сергій, вирішили обрати предметну галузь &quot;Інтерактивний календар&quot;.<p>" + "        Кожен, хто працює або навчається, завжди прагне зберегти свій час. Для цього ми зазвичай використвоуємо<p>" + "        розклад або нотатки, але іноді нам цього не вистачає. Саме для цього ми створимо Інтерактивний календар.<p>" + "        Інтерактивний календар - це аналог звичайного календеря, але з розширеним функціоналом.<p>" + "        &lt;/br&gt;ІDE, які ми використовуємо: WebStorm, VS Code.<p>" + "    &lt;/h2&gt;<p>" + "&lt;/div&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h1&gt;Перелік функцій Інтерактивного календаря&lt;/h1&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Ідентифікувати користувача;&lt;/h2&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Зберігати дані користувача;&lt;/h2&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Можливість створити, змінити та видалити свій розклад;&lt;/h2&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Можливість створити, змінити та видалити нотатки;&lt;/h2&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Можливість змінити зовнішній вигляд календаря задля зручного використання;&lt;/h2&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h2&gt;&bull; Пошук нотатки за ключовим словом;&lt;/h2&gt;<p>" + "&lt;/div&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h1&gt;Можливий сценарій&lt;/h1&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;1. Користувач ідентифікує себе;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;2. Користувач переглядає актуальний розклад;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;3. Користувач створює нову нотатку;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;4. Користувач редагує нотатку;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;5. Користувач шукає нотатку;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;6. Користувач видаляє нотатку;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;7. Користувач редагує розклад;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;8. Користувач зберігає розклад;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;9. Користувач виходить з веб-сторінки;&lt;/h2&gt;<p>" + "&lt;/div&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;p&gt;<p>" + "    &lt;h1&gt;Об'єкти&lt;/h1&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;1. Користувач;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;2. Розклад;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;3. Нотатка;&lt;/h2&gt;<p>" + "    &lt;p&gt;&lt;h2&gt;4. Дата;&lt;/h2&gt;<p>" + "<p>" + "&lt;/div&gt;<p>" + "&lt;div&gt;<p>" + "    &lt;h1&gt;UML-діаграма прецендентів&lt;/h1&gt;<p>" + "<p>" + "    &lt;img src=&quot;img/UML Diagram.png&quot; height=&quot;2000px&quot; width=&quot;100%&quot;/&gt;&lt;/div&gt;<p>" + "&lt;/body&gt;<p>" + "&lt;/html&gt;";

const lab1HtmlForm = '<img src=\"../img/form.png\" height=\"20%\" width=\"40%\"/>' + '</br>' +
    "&lt;div style=&quot;text-align: center;float: left&quot;&gt;<p>" +
    "        &lt;form action=&quot;subject.html&quot;&gt;<p>" +
    "        &lt;button style=&quot;width: 400px;height: 100px&quot;&gt;Предметна область<p>" +
    "        &lt;/button&gt;<p>" +
    "        &lt;/form&gt;<p>" +
    "    &lt;/div&gt;";

const lab1HtmlImg = '<img src="../img/img.png" height="20%" width="30%"/>' + '</br>' +
    "&lt;div style=&quot;text-align: center&quot;&gt;<p>" +
    "    &lt;img src=&quot;https://kpi.ua/files/images/kpi.png&quot; alt=&quot;KPI&quot; style=&quot;width: 200px;height: 200px;margin-bottom: 20px&quot;&gt;<p>" +
    "&lt;/div&gt;";

const lab1HtmlCode = "&lt;!DOCTYPE html&gt;<p>" + "&lt;html lang=&quot;en&quot;&gt;<p>" + "<p>" + "&lt;head&gt;<p>" + "    &lt;meta charset=&quot;UTF-8&quot;&gt;<p>" + "    &lt;title&gt;Інтерактивний календар&lt;/title&gt;<p>" + "&lt;/head&gt;<p>" + "<p>" + "&lt;body&gt;<p>" + "&lt;style&gt;<p>" + "    button {<p>" + "        font-family: 'Century Gothic';<p>" + "        font-weight: bold;<p>" + "        padding: 16px 32px;<p>" + "        text-align: center;<p>" + "        text-decoration: none;<p>" + "        display: inline-block;<p>" + "        font-size: 16px;<p>" + "        margin: 20px 2px;<p>" + "        transition-duration: 0.4s;<p>" + "        cursor: pointer;<p>" + "        background-color: white;<p>" + "        color: black;<p>" + "        border: 2px solid #555555;<p>" + "        width: 40%;<p>" + "<p>" + "<p>" + "    }<p>" + "<p>" + "    button:hover {<p>" + "        background-color: #555555;<p>" + "        color: white;<p>" + "    }<p>" + "<p>" + "    table {<p>" + "        width: 100%;<p>" + "    }<p>" + "<p>" + "    th {<p>" + "        text-align: center;<p>" + "        padding: 15px;<p>" + "        font-family: &quot;Century Gothic&quot;;<p>" + "        font-weight: normal;<p>" + "<p>" + "    }<p>" + "<p>" + "    td {<p>" + "        text-align: center;<p>" + "        padding: 25px;<p>" + "        font-family: 'Century Gothic';<p>" + "        font-weight: bold;<p>" + "    }<p>" + "<p>" + "    caption {<p>" + "        padding: 10px;<p>" + "        font-family: 'Century Gothic';<p>" + "        font-weight: bold;<p>" + "        margin-bottom: 10px;<p>" + "        font-size: 36px;<p>" + "    }<p>" + "<p>" + "    p {<p>" + "        font-family: 'Century Gothic';<p>" + "        font-weight: initial;<p>" + "        font-size: 20px;<p>" + "        font-weight: bold;<p>" + "    }<p>" + "<p>" + "    input[type=text],<p>" + "    [id=content] {<p>" + "        width: 100%;<p>" + "        padding: 12px 20px;<p>" + "        margin: 8px 0;<p>" + "        box-sizing: border-box;<p>" + "        border: 3px solid #ccc;<p>" + "        -webkit-transition: 0.5s;<p>" + "        transition: 0.5s;<p>" + "        outline: none;<p>" + "        font-family: &quot;Century Gothic&quot;;<p>" + "        font-weight: bold;<p>" + "        font-size: 20px;<p>" + "    }<p>" + "<p>" + "    button[id=btnSearchSchedule] {<p>" + "        width: 150px;<p>" + "        height: 60px;<p>" + "        float: bottom;<p>" + "<p>" + "    }<p>" + "<p>" + "    input[id=inputSearchSchedule] {<p>" + "        padding: 12px 20px;<p>" + "        margin: 8px 0;<p>" + "        box-sizing: border-box;<p>" + "        border: 3px solid #ccc;<p>" + "        -webkit-transition: 0.5s;<p>" + "        transition: 0.5s;<p>" + "        outline: none;<p>" + "        font-family: &quot;Century Gothic&quot;;<p>" + "        font-weight: bold;<p>" + "<p>" + "<p>" + "    }<p>" + "<p>" + "    input[type=text],<p>" + "    [id=content],<p>" + "    [id=inputSearchSchedule]:focus {<p>" + "        border: 3px solid #555;<p>" + "    }<p>" + "&lt;/style&gt;<p>" + "&lt;div style=&quot;text-align: center&quot;&gt;<p>" + "    &lt;img src=&quot;https://kpi.ua/files/images/kpi.png&quot; alt=&quot;KPI&quot; style=&quot;width: 200px;height: 200px;margin-bottom: 20px&quot;&gt;<p>" + "&lt;/div&gt;<p>" + "&lt;div style=&quot;height: 100px;width: 100%&quot;&gt;<p>" + "    &lt;div style=&quot;text-align: center;float: left&quot;&gt;<p>" + "        &lt;form action=&quot;subject.html&quot;&gt;<p>" + "        &lt;button style=&quot;width: 400px;height: 100px&quot;&gt;Предметна<p>" + "            область<p>" + "        &lt;/button&gt;<p>" + "        &lt;/form&gt;<p>" + "    &lt;/div&gt;<p>" + "    &lt;div style=&quot;float: right;text-align: center;font-family: 'Century Gothic';font-weight: bold&quot;&gt;Розклад групи<p>" + "        &lt;div&gt;<p>" + "            &lt;input id=&quot;inputSearchSchedule&quot;&gt;<p>" + "        &lt;/div&gt;<p>" + "        &lt;div style=&quot;float: bottom&quot;&gt;<p>" + "            &lt;button id=&quot;btnSearchSchedule&quot; style=&quot;text-align: center&quot; onclick=&quot;search()&quot;&gt;Знайти&lt;/button&gt;<p>" + "        &lt;/div&gt;<p>" + "    &lt;/div&gt;<p>" + "&lt;/div&gt;<p>" + "<p>" + "&lt;table border=&quot;1&quot;&gt;<p>" + "    &lt;caption&gt;Наш розклад&lt;/caption&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;th&gt;&lt;/th&gt;<p>" + "        &lt;th&gt;Понеділок&lt;/th&gt;<p>" + "        &lt;th&gt;Вівторок&lt;/th&gt;<p>" + "        &lt;th&gt;Середа&lt;/th&gt;<p>" + "        &lt;th&gt;Четвер&lt;/th&gt;<p>" + "        &lt;th&gt;П'ятниця&lt;/th&gt;<p>" + "    &lt;/tr&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;td&gt;1. 8:30&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;Розробка веб-застосувань&lt;/td&gt;<p>" + "        &lt;td&gt;Основи клієнтської розробки&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;Вступ до філософії&lt;/td&gt;<p>" + "    &lt;/tr&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;td&gt;2. 10:25&lt;/td&gt;<p>" + "        &lt;td&gt;Комп. мережі&lt;/td&gt;<p>" + "        &lt;td&gt;Комп. мережі&lt;/td&gt;<p>" + "        &lt;td&gt;Основи клієнтської розробки&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "    &lt;/tr&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;td&gt;3. 12:20&lt;/td&gt;<p>" + "        &lt;td&gt;ВМ-3&lt;/td&gt;<p>" + "        &lt;td&gt;Англ&lt;/td&gt;<p>" + "        &lt;td&gt;ВМ-3&lt;/td&gt;<p>" + "        &lt;td&gt;Бази даних&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "    &lt;/tr&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;td&gt;4. 14:15&lt;/td&gt;<p>" + "        &lt;td&gt;ФВ&lt;/td&gt;<p>" + "        &lt;td&gt;Бази даних&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;Розроблення веб-застосувань&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "    &lt;/tr&gt;<p>" + "    &lt;tr&gt;<p>" + "        &lt;td&gt;5. 16:10&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;&lt;/td&gt;<p>" + "        &lt;td&gt;Психологія конфлікту&lt;/td&gt;<p>" + "    &lt;/tr&gt;<p>" + "<p>" + "&lt;/table&gt;<p>" + "&lt;h1 style=&quot;text-align: center&quot;&gt;Нотатки&lt;/h1&gt;<p>" + "<p>" + "&lt;input id=&quot;content&quot;&gt;<p>" + "&lt;div style=&quot;text-align: center&quot;&gt;<p>" + "    &lt;button onclick=&quot;note()&quot;&gt;Занотувати&lt;/button&gt;<p>" + "&lt;/div&gt;<p>" + "<p>" + "&lt;p id=&quot;noteContent&quot;&gt;Третої пари у понеділок не буде&lt;/p&gt;<p>" + "&lt;script&gt;<p>" + "    function note() {<p>" + "        let content = document.getElementById('content').value<p>" + "        let date = new Date();<p>" + "        document.getElementById('noteContent').innerHTML += `&lt;p&gt;[${date.toDateString()}] ${content}&lt;/p&gt;`<p>" + "<p>" + "    }<p>" + "<p>" + "    function search() {<p>" + "        let group = document.getElementById(&quot;inputSearchSchedule&quot;).value<p>" + "        let ref = findURL(group);<p>" + "        if (ref != null)<p>" + "            window.location.href = ref;<p>" + "    }<p>" + "<p>" + "    function findURL(text) {<p>" + "        let xmlHttp = new XMLHttpRequest();<p>" + "        xmlHttp.open(&quot;GET&quot;, &quot;https://api.rozklad.org.ua/v2/groups/&quot; + text, false); // false for synchronous request<p>" + "        xmlHttp.send(null);<p>" + "        let url = xmlHttp.response;<p>" + "<p>" + "        let startIndex = url.indexOf('http');<p>" + "        if (startIndex == -1) {<p>" + "            return null;<p>" + "        }<p>" + "        let lastIndex = url.indexOf(&quot;\\&quot;&quot;, startIndex);<p>" + "        return url.substring(startIndex, lastIndex);<p>" + "    }<p>" + "&lt;/script&gt;<p>" + "&lt;/body&gt;<p>" + "<p>" + "&lt;/html&gt;<p>" + "&lt;/body&gt;<p>" + "<p>" + "&lt;/html&gt;"

const lab1Conclusion = "На цій лабораторній роботі ми ознайомились з осоновами HTML. Обрали певну предменту галузь - Інтерактивний календар. Описали предменту область, розробили макет сайту. Створили use-case діаграму. "

//

export default function showLab1() {
    let leftButtons = document.getElementById("leftButtons");
    leftButtons.innerHTML = "";

    z.createBtnWithRedirect(leftButtons, "Опис предментої області", "../subject.html")
    z.createBtnWithRedirect(leftButtons, "Лабораторна робота", "../lab1.html")
    z.createLeftInfoBtn(leftButtons, "Постановка задачі Лабораторної роботи №1", lab1DescTextContent);
    z.createLeftInfoBtn(leftButtons, "Загальна постановка задачі програми", lab1WorkTaskTextContent);
    z.createLeftGroupBtn(leftButtons, "Структура документа", () => showSmallButtons1(leftButtons));
    z.createLeftInfoBtn(leftButtons, "Висновки", lab1Conclusion);

}

function showSmallButtons1(parent) {
    if (document.getElementById("smallButtons") != null) {
        document.getElementById("smallButtons").remove()
    }
    let div = document.createElement("div");
    div.style = "padding-left: 70px";

    div.id = "smallButtons";
    z.createLeftInfoBtn(div, "HTML-код таблиць", lab1HtmlTable, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "HTML-код форми", lab1HtmlForm, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "HTML-код зображень", lab1HtmlImg, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "HTML-код Лаб-1", lab1HtmlCode, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "index.html", lab1HtmlIndex, z.fontSizeHeightLineHTML);
    parent.appendChild(div);
}