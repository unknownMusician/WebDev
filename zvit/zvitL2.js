import * as z from "./zvit.js";

const lab2DescTextContent = `<h1 style=\"font-weight: normal\"><b>Тема: </b>КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</h1> На другій лабораторній роботі наша задача була ознайомитись з основами CSS, навчитися користуватися селекторами класу та тегу. Також метою було навчитися використовувати в роботі ідентифікатори та їх особливості в роботі зі стилями. Також нам було необхідно використати сосідні, дочірні селектори, селектори атрибута та універсальний селектор. Також слід показати оформлення списків, властивостей кольору та фону, зовнішніх та внутрішніх відступів та плаваючих елементів`
const lab2lists = "<div style='text-align: center'><p>Списки в html реалізуються за допомогою тегів ul та li</p><p>Використання в HTML</p><p><img src=\"../img/list.png\"/></p><p>Оформлення в css</p><p><img src=\"../img/listSelectorCode.png\"/></p><p>Результат</p><p><img src=\"../img/listSelector.png\"/></p></div>";
const lab2identificators = "<div style='text-align: center'><p>Ідентифікатор - це унікальна назва, яка присвоюється  певному елементу, для того, щоб відрізнити його від інших<p><p>Використання ідентифікатора в HTML(id=ідентифікатор)</p><p><img src=\"../img/ident.png\"/></p><p>Оформлення в css</p><p><img src='../img/identCss.png\'></p><p>Результат: саме елемент з id note block буде приймати правила css, які ми описали вище</p><p><img src='../img/identResult.png\'></p></div>";
const lab2tabs = "<div style='text-align: center'><p>Форматування відступів<p><p>Для того, щоб вказати внутрішній відступ ми використовуємо padding. Для зовнішнього - margin</p><p>Наведемо приклад з тегом caption(заголовок таблиці)</p><p>HTML</p><p><img src='../img/marginPadding.png\'></p><p>Визначення відступів в css</p><p><img src='../img/captionCss.png\'></p><p>Тепер у заголовка є внутрішній отступ в 10 пікселві з усіх сторін та зовнішній знизу</p><p><img src='../img/captionResult.png\'></p></div>";
const lab2floats = "<div style='text-align: center'><p>Форматування за допомогою Плаваючих елементів</p><p>Використовуємо плаваючі елементи для того, щоб прив'язати  блок до певної сторони сторінки, за допомогою float.</p><p>Використання в HTML</p><p><img src='../img/float.png\'></p><p>Правила сss</p><p><img src='../img/floatCss.png\'></p><p>Результат</p><p>Блок findGroup тепер прив'язаний до правої сторони сторінки</p><p><img src='../img/floatResult.png\'></p></div>";
const lab2selectorsTagsClass = "<div style='text-align: center'><p>Селектор тегу - це звернення до всіх тегів в html.</p><p>За допомогою селекторів тега ми можемо визначити стиль для всіх кпопок, полів і тд</p><p>Для прикладу використаємо тег th</p><p>HTML</p><p><img src=\"../img/tagHtml.png\"/></p><p>Правила css</p><p><img src=\"../img/tag.png\"/></p><p>Результат: текст, який знаходиться в тегах th приймає однаковий стиль</p><p><img src='../img/tagResult.png\'></p><p></p><p>Селектор класу - це звернення до усіх тегів, які мають певний клас. </p> <p> За допомогою селектора класу ми можемо групувати певні елементи html</p><p>Для прикладу використаємо тег tr</p><p>HTML</p><p><img src=\"../img/class.png\"/></p><p>Правила css</p><p><img src=\"../img/classCss.png\"/></p><p>Результат: елементи з класом practice мають червоний колір тексту, з класом lecture синій </p><p><img src=\"../img/classResult.png\"/></p></div>";
const lab2seletorsOther = "<div style='text-align: center;line-height: 17px'><p>Cусідні селектори - це селектори, які йдуть один за одним</p><p> </p><p>HTML</p><p><img src='../img/neibrHtml.png\'></p><p>Правила css</p><p><img src='../img/neibr.png\'></p><p>Результат: якщо тег span та тег b сусдні, то текст в тезі b стає червоним  </p><p><img src='../img/neibrResult.png\'></p><p></p><p>Дочірні селектори - це селктори, які відносяться до дочірніх елементів певного тегу</p><p></p><p>HTML</p><p><img src='../img/dojirniHtml.png\'></p><p>Правила css</p><p><img src='../img/dojirni.png\'></p><p>Результат: всі дочірні елементи (li), елемента з id noteContent, будуть мати однаковий стиль</p><p><img src='../img/dojirniResult.png\'></p><p></p><p>Універсальний селектор - це селектор, який звертається до всіх елементів сторінки</p><p></p><p>HTML</p><p><img src='../img/universalHtml.png\'></p><p>Правила css</p><p><img src='../img/universal.png\'></p><p>Результат: всі елемнти на сторінці будуть мати зовнішній відступ в 10 пікселві та внутрішній в нуль пікселів</p><p><img src='../img/universalResult.png\'></p><p> </p><p>Селектор атрибуту - це селектор певного атрибуту певного елемента</p><p>HTML</p><p><img src='../img/atribHtml.png\'></p><p>Правила css</p><p><img src='../img/atrib.png\'></p><p>Результат: атрибут текст тегу інпут буде мати стиль, який вказано в css</p><p><img src='../img/atribResutl.png'></p></div>";
const lab2selectorGroup = "<div style='text-align: center'>Групування тегів - це визначенням багатьом тегам одних і тих самих стилів<p>HTML</p><p><img src=\"../img/trTh.png\"/></p><p>Css</p><p><img src=\"../img/trThCss.png\"/></p><p>Результат: теги tr та th приймають однаковий стиль, який ми описали в css.</p> <p><img src=\"../img/trThResult.png\"/></p> <p> Звичайно, що ми кожен з тегів має ще свої певні стилі, але за допомогою групування ми зазначили загальний стиль</p></div>";
const lab2Conclusion = "На другій лабораторній роботі ми ознайомились с осонвами css, а саме с селекторами, ідентифікаторами, стильовим оформленням текстових елементів в html-Документах. Розрлбили певний стиль нашого сайту. Використали різні види селекторів, ідентифікатори."

//

export default function showLab2() {
    let leftButtons = document.getElementById("leftButtons");
    leftButtons.innerHTML = "";


    z.createLeftInfoBtn(leftButtons, "Постановка задачі Лабораторної роботи №2", lab2DescTextContent);
    z.createLeftInfoBtn(leftButtons, "Списки", lab2lists);
    z.createLeftInfoBtn(leftButtons, "Ідентифікатори", lab2identificators);
    z.createLeftInfoBtn(leftButtons, "Відступи", lab2tabs);
    z.createLeftInfoBtn(leftButtons, "Плаваючі елементи", lab2floats);
    z.createLeftGroupBtn(leftButtons, "Структура документа", () => showSmallButtons2(leftButtons));
    z.createLeftInfoBtn(leftButtons, "Висновки", lab2Conclusion);
}

function showSmallButtons2(parent) {
    if (document.getElementById("smallButtons") != null) {
        document.getElementById("smallButtons").remove()
    }
    let div = document.createElement("div");
    div.style = "padding-left: 70px";

    div.id = "smallButtons";
    z.createLeftInfoBtn(div, "Селектори тегу і класу", lab2selectorsTagsClass, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "Інші селектори", lab2seletorsOther, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "Групування селекторів", lab2selectorGroup, z.fontSizeHeightLineHTML);
    parent.appendChild(div);
}