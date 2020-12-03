import * as z from "./zvit.js";

const _descTextContent = `<h1 style="font-weight: normal"><b>Тема: </b>ВЗАЄМОДІЯ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗАМИ ДАНИХ (СКБД). ОБРОБКА РЕЗУЛЬТАТІВ SQL-ЗАПИТІВ У PHP-СЦЕНАРІЇ.</h1>У 7 Лабораторній роботі ми повинні були придбати практичні навички підключення до СКБД, вибора бази даних, виконання запиту, отримання результатів, відключення від СКБД`;
const _conclusion = `На цій лабораторній роботі ми навчилися користуватися додатком phpMyAdmin, закріпили знання і навички мови php. Ми навчилися будувати повний цикл обробки даних від клієнта до БД і назад за допомогою мов SQL, php, JavaScript та HTML, POST запитів. Ми навчилися налаштовувати phpMyAdmin та краще розібралися в роботі серверу Apache24. Висновуючи все це, ми спробували на практиці проєктувати та програмувати додаток, що написаний багатьма мовами, адже кожна з них корисна і доцільна у своїй сфері роботи.`;
const _2classes = `<h1>Предметна область «Аптека»</h1><p style="text-align: center;"><img src="../img/lab7/_2classes.png" /></p>`;
const _2infoModel = `<p style="text-align: center;"><img src="../img/lab7/_2infoModel.png" /></p>`;
const _2dataModel = `<p style="text-align: center;"><img src="../img/lab7/_2dataModel.png" /></p>`;
const _2attributeTable = `<p style="text-align: center;"><img src="../img/lab7/_2attributeTable1.png" /><img src="../img/lab7/_2attributeTable2.png" /><img src="../img/lab7/_2attributeTable3.png" /><img src="../img/lab7/_2attributeTable4.png" /></p>`;
const _2sql = `<p style="text-align: center;"><img src="../img/lab7/_2sql.png" /></p>`;
const _2form = `<h1>Вигляд</h1><p style="text-align: center;"><img src="../img/lab7/_2form.png" /></p><h1>HTML</h1>&lt;!DOCTYPE html&gt; <p>&lt;html lang="en"&gt; <p> <p>&lt;head&gt; <p> &lt;meta charset="UTF-8"&gt; <p> &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; <p> &lt;title&gt;Document&lt;/title&gt; <p>&lt;/head&gt; <p>&lt;style&gt; <p> form { <p> display: flex; <p> flex-direction: row; <p> align-items: center; <p> justify-content: space-around; <p> } <p> <p> input { <p> margin: 10px; <p> height: 30px; <p> } <p> <p> input[type="submit"] { <p> height: 50px; <p> font-weight: bolder; <p> } <p> <p> * div { <p> display: flex; <p> } <p>&lt;/style&gt; <p> <p>&lt;body&gt; <p> &lt;form action="http://127.0.0.1/pharmacyFind.php" method="POST" id="form"&gt; <p> &lt;section&gt; <p> &lt;h2&gt;Продукт&lt;/h2&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Назва&lt;/h3&gt; <p> &lt;input name='productName' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Опис&lt;/h3&gt; <p> &lt;input name='productDescription' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Ціна&lt;/h3&gt; <p> &lt;input name='productPrice' /&gt; <p> &lt;/div&gt; <p> &lt;/section&gt; <p> &lt;section&gt; <p> &lt;h2&gt;Клієнт&lt;/h2&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Ім'я&lt;/h3&gt; <p> &lt;input name='clientName' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Прізвище&lt;/h3&gt; <p> &lt;input name='clientSurname' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;По-батькові&lt;/h3&gt; <p> &lt;input name='clientMiddlename' /&gt; <p> &lt;/div&gt; <p> &lt;/section&gt; <p> &lt;section&gt; <p> &lt;h2&gt;Працівник&lt;/h2&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Ім'я&lt;/h3&gt; <p> &lt;input name='workerName' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;Прізвище&lt;/h3&gt; <p> &lt;input name='workerSurname' /&gt; <p> &lt;/div&gt; <p> &lt;div&gt; <p> &lt;h3&gt;По-батькові&lt;/h3&gt; <p> &lt;input name='workerMiddlename' /&gt; <p> &lt;/div&gt; <p> &lt;/section&gt; <p> &lt;div&gt; <p> &lt;input onclick="onCheckBox(true)" type="radio" /&gt; Write <p> &lt;input onclick="onCheckBox(false)" type="radio" checked /&gt; Find <p> &lt;/div&gt; <p> &lt;input type="submit"&gt; <p> &lt;/form&gt; <p> &lt;script&gt; <p> function onCheckBox(isWriting) { <p> let checks = document.querySelectorAll('input[type="radio"]'); <p> checks[isWriting ? 1 : 0].checked = false; <p> <p> let action = "http://127.0.0.1/" + <p> (isWriting ? 'pharmacyEnter' : 'pharmacyFind') + <p> ".php"; <p> <p> console.log(action); <p> <p> document.getElementById('form').action = action; <p> <p> let boolValue = true; <p> let ifTrue = 5; <p> let ifFalse = 10; <p> <p> let result = boolValue ? ifTrue : ifFalse; <p> } <p> &lt;/script&gt; <p>&lt;/body&gt; <p> <p>&lt;/html&gt;`;
const _2phpEnter = `&lt;?php<p>if (isset($_POST)) { <p> $connection = mysqli_connect("127.0.0.1", "root", "12345", "pharmacy") or die ("Could not connect:"); <p> <p> $clientName = $_POST["clientName"]; <p> $clientSurname = $_POST["clientSurname"]; <p> $clientMiddlename = $_POST["clientMiddlename"]; <p> <p> $workerName = $_POST["workerName"]; <p> $workerSurname = $_POST["workerSurname"]; <p> $workerMiddlename = $_POST["workerMiddlename"]; <p> <p> $productName = $_POST["productName"]; <p> $productDescription = $_POST["productDescription"]; <p> $productPrice = $_POST["productPrice"]; <p> <p> if( <p> strlen($clientName) == 0 || <p> strlen($clientSurname) == 0 || <p> strlen($workerName) == 0 || <p> strlen($workerSurname) == 0 || <p> strlen($productName) == 0 || <p> strlen($productDescription) == 0 || <p> strlen($productPrice) == 0) <p> { die; } <p> <p> $query = "INSERT IGNORE INTO clients (ID, Name, Surname, Middlename) VALUES ( <p> NULL, <p> '$clientName', <p> '$clientSurname', <p> '$clientMiddlename')"; <p> mysqli_query($connection, $query) or die (mysqli_error($connection)); <p> <p> $query = "INSERT IGNORE INTO workers (ID, Name, Surname, Middlename) VALUES ( <p> NULL, <p> '$workerName', <p> '$workerSurname', <p> '$workerMiddlename')"; <p> mysqli_query($connection, $query) or die (mysqli_error($connection)); <p> <p> $query = "INSERT IGNORE INTO products (ID, name, description, price) VALUES ( <p> NULL, <p> '$productName', <p> '$productDescription', <p> '$productPrice')"; <p> mysqli_query($connection, $query) or die (mysqli_error($connection)); <p> <p> $query = "INSERT IGNORE INTO deals (ID, IDClient, IDWorker, IDProduct) VALUES ( <p> NULL, <p> (SELECT ID FROM clients WHERE Name = '$clientName'), <p> (SELECT ID FROM workers WHERE Name = '$workerName'), <p> (SELECT ID FROM products WHERE name = '$productName'))"; <p> mysqli_query($connection, $query) or die (mysqli_error($connection)); <p> <p> echo "Дані про купівлю товару \"$productName\" клієнтом \"$clientSurname $clientName\" у працівника аптеки \"$workerSurname $workerName\" успішно додано до БД"; <p>}<p>?&gt;`;
const _2phpFind = `&lt;?php<p>$conn = new mysqli("127.0.0.1", "root", "12345", "pharmacy"); <p>if ($conn->connect_error) { <p> die("Connection failed: " . $conn->connect_error); <p>} <p> <p>$clientName = $_POST["clientName"]; <p>$clientSurname = $_POST["clientSurname"]; <p>$clientMiddlename = $_POST["clientMiddlename"]; <p> <p>$workerName = $_POST["workerName"]; <p>$workerSurname = $_POST["workerSurname"]; <p>$workerMiddlename = $_POST["workerMiddlename"]; <p> <p>$productName = $_POST["productName"]; <p>$productDescription = $_POST["productDescription"]; <p>$productPrice = $_POST["productPrice"]; <p> <p>$query = "SELECT <p>products.id as 'ID', <p>products.name as 'Назва продукту', <p>products.description as 'Опис продукту', <p>products.price as 'Ціна продукту', <p>clients.name as 'Ім*я клієнта', <p>clients.surname as 'Прізвище клієнта', <p>clients.middlename as 'По-батькові клієнта', <p>workers.name as 'Ім*я працівника', <p>workers.surname as 'Прізвище працівника', <p>workers.middlename as 'По-батькові працівника' <p>FROM products, clients, workers, deals <p>WHERE <p>deals.idclient = clients.id AND <p>deals.idworker = workers.id AND <p>deals.idproduct = products.id"; <p> <p>if ($clientName != ""){ <p> $query = $query . " AND clients.name = '$clientName'"; <p>} if ($clientSurname != ""){ <p> $query = $query . " AND clients.surname = '$clientSurname'"; <p>} if ($clientMiddlename != ""){ <p> $query = $query . " AND clients.middlename = '$clientMiddlename'"; <p>} if ($workerName != ""){ <p> $query = $query . " AND worker.name = '$workerName'"; <p>} if ($workerSurname != ""){ <p> $query = $query . " AND worker.surname = '$workerSurname'"; <p>} if ($workerMiddlename != ""){ <p> $query = $query . " AND worker.middlename = '$workerMiddlename'"; <p>} if ($productName != ""){ <p> $query = $query . " AND products.name = '$productName'"; <p>} if ($productDescription != ""){ <p> $query = $query . " AND products.description = '$productDescription'"; <p>} if ($productPrice != ""){ <p> $query = $query . " AND products.price = $productPrice"; <p>} <p> <p>$result = $conn->query($query); <p> <p>if ($result->num_rows > 0) { <p> echo "&lt;style&gt;td {padding: 10px}&lt;/style&gt;"; <p> echo "&lt;table border='1px'&gt;"; <p> echo "&lt;tr&gt;"; <p> echo "&lt;td&gt;ID&lt;/td&gt;&lt;td&gt;Назва продукту&lt;/td&gt;&lt;td&gt;Опис продукту&lt;/td&gt; <p> &lt;td&gt;Ціна продукту&lt;/td&gt;&lt;td&gt;Ім*я клієнта&lt;/td&gt;&lt;td&gt;Прізвище клієнта&lt;/td&gt; <p> &lt;td&gt;По-батькові клієнта&lt;/td&gt;&lt;td&gt;Ім*я працівника&lt;/td&gt; <p> &lt;td&gt;Прізвище працівника&lt;/td&gt;&lt;td&gt;По-батькові працівника&lt;/td&gt;"; <p> echo "&lt;/tr&gt;"; <p> // output data of each row <p> while($row = $result->fetch_assoc()) { <p> echo "&lt;tr&gt;"; <p> // <p> foreach($row as $part){ <p> echo "&lt;td&gt;"; <p> echo $part; <p> echo "&lt;/td&gt;"; <p> } <p> // <p> echo "&lt;/tr&gt;"; <p> } <p> echo "&lt;/tr&gt;"; <p>} else { <p> echo "0 results"; <p>} <p>$conn->close();<p>?&gt;`;

const _7classes = `<h1>Предметна область «Аптека»</h1><p style="text-align: center;"><img src="../img/lab7/_7calsses.png" /></p>`;
const _7infoModel = `<p style="text-align: center;"><img src="../img/lab7/_7infoModel.png" /></p>`;
const _7dataModel = `<p style="text-align: center;"><img src="../img/lab7/_7dataModel.png" /></p>`;
const _7attributeTable = `<p style="text-align: center;"><img src="../img/lab7/_7attributeTable1.png" /><img src="../img/lab7/_7attributeTable2.png" /><img src="../img/lab7/_7attributeTable3.png" /><img src="../img/lab7/_7attributeTable4.png" /></p>`;
const _7sql = `<p style="text-align: center;"><img src="../img/lab7/_7sql.png" /></p>`;




export default function showLab7(leftButtons) {
    z.createLeftInfoBtn(leftButtons, "Постановка задачі Лабораторної роботи №7", _descTextContent);
    z.createLeftGroupBtn(leftButtons, "2 Варіант (Аптека)", () => showSmallButtons2(leftButtons));
    z.createLeftGroupBtn(leftButtons, "7 Варіант (Довідник радіотехніки)", () => showSmallButtons7(leftButtons));
    z.createLeftInfoBtn(leftButtons, "Висновки", _conclusion);
}

function showSmallButtons2(parent) {
    if (document.getElementById("smallButtons") != null) {
        document.getElementById("smallButtons").remove()
    }
    let div = document.createElement("div");
    div.style = "padding-left: 70px";
    div.id = "smallButtons";

    z.createBtnWithRedirect(div, "Результат", "../lab7/index2.html");
    z.createLeftInfoBtn(div, "Класи об’єктів предметної області", _2classes);
    z.createLeftInfoBtn(div, "Інфологічна модель", _2infoModel);
    z.createLeftInfoBtn(div, "Даталогічна модель", _2dataModel);
    z.createLeftInfoBtn(div, "Опис атрибутів таблиць", _2attributeTable);
    z.createLeftInfoBtn(div, "SQL-код для створення бази даних", _2sql);
    z.createLeftInfoBtn(div, "Форма запиту", _2form, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "Серверна частина - Запис", _2phpEnter, z.fontSizeHeightLineHTML);
    z.createLeftInfoBtn(div, "Серверна частина - Пошук", _2phpFind, z.fontSizeHeightLineHTML);

    // todo
    parent.appendChild(div);
}

function showSmallButtons7(parent) { // for Nikita
    if (document.getElementById("smallButtons") != null) {
        document.getElementById("smallButtons").remove()
    }
    let div = document.createElement("div");
    div.style = "padding-left: 70px";
    div.id = "smallButtons";

    // todo
    parent.appendChild(div);
}