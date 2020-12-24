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

$ukranian = ["Головна", "Додати подію", "Вийти", "Погода"];
$russian = ["Главная", "Добавить событие", "Выйти", "Погода"];
$english = ["Home", "Add event", "Exit", "Weather"];

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

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/login.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<style>
    #weather-holder {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

    .w-info {
        width: 100px;
        padding: 20px 50px;
        font-size: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: #3bb3ce;
        margin: 10px;
        border-radius: 2px;
        border: 1px solid  #2b8da3;
        transition: 0.5s;
        color: white;
    }

    .w-info:hover {
        width: 150px;
        background-color: rgba(100, 150, 100, 0.2);
        color: black;
    }

    #w-icon {
        width: 100px;
        padding: 20px 50px;
        margin: 10px;
        border: 1px dashed transparent;
        transition: 0.5s;

    }

    #w-icon:hover {
        width: 150px;
        border: 1px dashed #2b8da3;
    }
</style>
<body>
    <?php 
    echo '
<div class="wrapper">
    <header>
        <div class="header__wrapper">
            <nav class="header__navigation">
            <a href="../index.php?lang='.$lang.'"style="color: whitesmoke" ><div class="nav__home">'.$language [0].'</div></a>
            <a href="addEvent.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__add-event">'.$language [1].'</div></a>
            <a href="login.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__about">'.$language [2].'</div></a>
            <a href="weather.php?lang='.$lang.'" style="color: whitesmoke"><div class="nav__weather">'.$language [3].'</div></a>
            </nav>
            <div class="header__icons">
                <div class="header__icon">
                    <form action="" method="get"><input name="lang" value="ua" type="hidden"><button style="background: transparent"><img src="../img/ukraine_round_icon_64.png"></button></form>
                </div>
                <div class="header__icon">
                    <form action="" method="get"><input name="lang" value="ru" type="hidden"><button style="background: transparent"><img src="../img/russia_round_icon_64.png"></button></form>
                </div>
                <div class="header__icon">
                    <form action="" method="get"><input name="lang" value="eng" type="hidden"><button style="background: transparent"><img src="../img/united_kingdom_round_icon_64.png"></button></form>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="main__wrapper">
            <div class="first-row">
                <div class="first-row__title">
                    <h2>'.$language [3].'</h2>
                </div>
            </div>
                <!--  -->

                <div id="weather-holder">
                    <div id="w-city" class="w-info"></div>
                    <div id="w-temp" class="w-info"></div>
                    <div id="w-feels" class="w-info"></div>
                    <div id="w-icon">
                        <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
                    </div>
                </div>

                <!--  -->
        </div>
    </main>
    <footer>
        <div class="footer__wrapper">
            <div class="footer__author">@nekt2111.github.io</div>
            <div class="footer__author">@unknownMusician.github.io</div>
        </div>
    </footer>
</div>
    ';
    ?>
</body>
<script src="../js/script.js"></script>

</html>