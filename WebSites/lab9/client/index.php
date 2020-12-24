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

if(!isset($_SESSION["username"])) {
    header('Location: ' . "html/login.php?lang=".$lang);
}

$conn = new mysqli("127.0.0.1", "root", "12345", "calendar");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_SESSION["username"];
$password = $_SESSION["password"];

$ukranian = ["Головна","Додати подію","Вийти","Ваші події","Починається","Закінчується","Погода"];
$russian = ["Главная","Добавить событие","Выйти","Ваши события","Начало","Конец","Погода"];
$english = ["Home","Add event","Exit","Your events","Start","End","Weather"];

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

if(isset($_POST["evTitle"]) && isset($_POST["evDesc"])) {
    $evTitle = $_POST["evTitle"];
    $evDesc = $_POST["evDesc"];

    $query = "DELETE FROM events WHERE 
    title = '$evTitle' AND description = '$evDesc'";

    $conn->query($query);

    writeLog("Deleted note with title '" . $evTitle . "' and descrition '" . $evDesc . "'");
}

if(isset($_POST["editTitle"]) && isset($_POST["editDesc"]) && isset($_POST["editTitleNew"]) && isset($_POST["editDescNew"])) {
    $editTitle = $_POST["editTitle"];
    $editDesc = $_POST["editDesc"];
    $editTitleNew = $_POST["editTitleNew"];
    $editDescNew = $_POST["editDescNew"];

    $query = "UPDATE events
    SET title = '$editTitleNew' AND description = '$editDescNew'
    WHERE title = '$editTitle' AND description = '$editDesc'";

    $conn->query($query);

    writeLog("Updated note with title '" . $evTitle . "' and descrition '" . $evDesc . "' (now = '" . $evTitle . "'/'" . $evDesc . "')");
}

$query = "SELECT
events.title as 'title',
events.description as 'description', 
events.dateTimeStart as 'dateTimeStart', 
events.dateTimeEnd as 'dateTimeEnd'
FROM events, users
WHERE 
events.idUser = (SELECT ID FROM users WHERE title = '$username' AND password = '$password')";

$result = $conn->query($query);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <title>Project</title>
</head>
<?php
    echo '
<body>
    <div class="wrapper">
        <header>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <div class="header__wrapper">
                <nav class="header__navigation">
                    <a href="./index.php?lang='.$lang.'" style="color: whitesmoke">
                        <div class="nav__home">'.$language[0]. '</div>
                    </a>
                    <a href="html/addEvent.php?lang='.$lang.'" style="color: whitesmoke">
                        <div class="nav__add-event">'.$language[1]. '</div>
                    </a>
                    <a href="html/login.php?lang='.$lang.'"style="color: whitesmoke">
                        <div class="nav__about">'.$language[2]. '</div>
                    </a>
                    <a href="html/weather.php?lang='.$lang.'"style="color: whitesmoke">
                        <div class="nav__weather">'.$language[6]. '</div>
                    </a>
                </nav>
            <div class="header__icons">
             <div class="header__icon"><form action="" method="get"><input name="lang" value="ua" type="hidden"><button style="background: transparent"><img src="./img/ukraine_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="ru" type="hidden"><button style="background: transparent"><img src="./img/russia_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="eng" type="hidden"><button style="background: transparent"><img src="./img/united_kingdom_round_icon_64.png"></button></form></div>
            </div>
            </div>
        </header>
        <main>
            <div class="main__wrapper">
                <div class="first-row">
                <div class="first-row__search"><input placeholder="Search..." id="search"></div>
                    <div class="first-row__title">
                        <h2>'.$language[3]. '</h2>
                    </div>
                    <a href="html/addEvent.php">
                        <div class="first-row__add-btn">+</div>
                    </a>
                </div>
                <div class="second-row">';
                while ($row = $result->fetch_assoc()) {
                echo  '
                        <div class="event__wrapper">
                            <div class="event__title">
                                <div class="event__delete">
                                    <form action="" method="POST">
                                        <input type="hidden" value="' . $row["title"] . '" name="evTitle">
                                        <input type="hidden" value="' . $row["description"] . '" name="evDesc">
                                        <button type="submit" style="background: transparent">
                                            <img src="./img/delete-button.svg">
                                        </button>
                                    </form>
                                </div>
                                <div class="event__name">' . $row["title"] . '</div>
                                <div class="event__date">
                                    <div class="event__date-start">'.$language[4]. ': ' . $row["dateTimeStart"] . '</div>
                                    <div class="event__date-end">'.$language[5]. ': ' . $row["dateTimeEnd"] . '</div>
                                </div>
                            </div>
                            <div class="event__description">
                                ' . $row["description"] . '
      
                            </div>
                        </div>
                        ';}
                    ?>
                </div>
            </div>
        </main>
        <footer>
            <div class="footer__wrapper">
                <div class="footer__author">@nekt2111.github.io</div>
                <div class="footer__author">@unknownMusician.github.io</div>
            </div>
        </footer>
    </div>
</body>
<script src="js/script.js"></script>

</html>