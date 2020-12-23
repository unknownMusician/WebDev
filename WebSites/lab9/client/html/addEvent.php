<?php

function writeLog($text) {
    $file = '../logs.txt';
    $fin = substr(date(DATE_RFC822, time()), 0, 23) . ": " . $text . "\n";
    file_put_contents($file, $fin, FILE_APPEND | LOCK_EX);
}

session_start();
$lang = "";


if(isset($_COOKIE["language"])){
    $lang = $_COOKIE["language"];
}
if(isset($_GET["lang"])) {
    $lang = $_GET["lang"];
}


$ukranian = ["Головна","Додати подію","Вийти","Додавання події","Назва події","Дата початку","Час початку","Дата закінчення","Час закінчення","Опис події","Підтвердити","Погода"];
$russian = ["Главная","Добавить событие","Выйти","Добавление события","Имя события","Дата начала","Час начала","Дата окончания","Время окончания","Описание события","Подтвердить","Погода"];
$english = ["Home","Add event","Exit","Adding event","Event name","Date when it starts","Time when it starts","Date when it ends","Time when it ends","Event description","Submit","Weather"];

$language = [];

switch ($lang){

    case "ua":
        $language = $ukranian;
        setcookie("language","ua",mktime(0,0,0,6,16,21));
        break;
    case "ru":
        $language = $russian;
        setcookie("language","ru",mktime(0,0,0,6,16,21));
        break;
    default:
        $language = $english;
        setcookie("language","eng",mktime(0,0,0,6,16,21));
        break;
}
if(!isset($_SESSION["username"])) {
    header('Location: ' . "./login.php");
}
if (isset($_POST) && isset($_POST["title"])) {

    $conn = new mysqli("127.0.0.1", "root", "12345", "calendar");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $username = $_SESSION["username"];
    $password = $_SESSION["password"];

    $title = $_POST["title"];
    $dateStart = $_POST["dateStart"];
    $timeStart = $_POST["timeStart"];
    $dateEnd = $_POST["dateEnd"];
    $timeEnd = $_POST["timeEnd"];
    $description = $_POST["description"];

    writeLog("Add event try: " . $username);

    if (
        strlen($username) > 0 && 
        strlen($password) > 0 && 
        strlen($title) > 0 && 
        strlen($dateStart) > 0 && 
        strlen($timeStart) > 0 && 
        strlen($dateEnd) > 0 && 
        strlen($timeEnd) > 0
    ) {
        $dateTimeStart = $dateStart . " " . $timeStart;
        $dateTimeEnd = $dateEnd . " " . $timeEnd;

        $query = "INSERT IGNORE INTO events (ID, idUser, title, description, dateTimeStart, dateTimeEnd) VALUES (
            NULL,
            (SELECT ID FROM users WHERE title = '$username'),
            '$title', 
            '$description', 
            '$dateTimeStart', 
            '$dateTimeEnd')";

        $conn->query($query);
        writeLog('Added event successfully: username="' . $username . '", title="' . $title . '", description="' . $description . '", dateTimeStart="' . $dateTimeStart . '", dateTimeEnd="' . $dateTimeEnd . '"');
        header('Location: ' . "../index.php?lang=".$lang);
    } else { writeLog('Added event error'); }
}
?>
<?php echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/addEvent.css">
    <title>Title</title>
</head>
<body>
<div class="wrapper">
    <header>
        <div class="header__wrapper">
            <nav class="header__navigation">
                <a href="../index.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__home">'.$language[0].'</div></a>
                <a href="./addEvent.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__add-event">'.$language[1].'</div></a>
                <a href="./login.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__about">'.$language[2].'</div></a>
                <a href="./weather.html?lang='.$lang.'"style="color: whitesmoke"><div class="nav__about">'.$language[11].'</div></a>
            </nav>
             <div class="header__icons">
             <div class="header__icon"><form action="" method="get"><input name="lang" value="ua" type="hidden"><button style="background: transparent; border: none"><img src="../img/ukraine_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="ru" type="hidden"><button style="background: transparent; border: none"><img src="../img/russia_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="eng" type="hidden"><button style="background: transparent; border: none"><img src="../img/united_kingdom_round_icon_64.png"></button></form></div>
            </div>
        </div>
    </header>
    <main>
        <div class="main__wrapper">
            <div class="title">'.$language[3].'</div>
            <form class="event-form" action="" method="POST">
                <div class="event-form__title">
                    <h2 class="event-form__name parag">'.$language[4].'</h2>
                    <input type="text" class="event-form__name-input input" required name="title">
                </div>
                <div class="event-form__starts">
                    <h2 class="event-form__date-starts parag">'.$language[5].'</h2>
                    <input type="date" class="event-form__date-starts-input input" required name="dateStart">
                    <h2 class="event-form__time-starts parag">'.$language[6].'</h2>
                    <input type="time" class="event-form__time-starts-input input" required name="timeStart">
                </div>
                <div class="event-form__ends">
                    <h2 class="event-form__date-ends parag">'.$language[7].'</h2>
                    <input type="date" class="event-form__date-ends-input input" required name="dateEnd">
                    <h2 class="event-form__time-ends parag">'.$language[8].'</h2>
                    <input type="time" class="event-form__time-ends-input input" required name="timeEnd">
                </div>
                <div class="event-form__description">
                    <h2 class="event-form__description-text parag">'.$language[9].'</h2>
                    <textarea name="description" id="area" cols="30" rows="10" class="event-form__description-input" required></textarea>
                </div>
                <div class="event-form__submit-btn">
                    <button>'.$language[10].'</button>
                </div>
            </form>
        </div>
    </main>
    ';?>
    <footer>
        <div class="footer__wrapper">
            <div class="footer__author">@nekt2111.github.io</div>
            <div class="footer__author">@unknownMusician.github.io</div>
        </div>
    </footer>
</div>
</body>
</html>