<?php 

function writeLog($text) {
    $file = '../logs.txt';
    $fin = substr(date(DATE_RFC822, time()), 0, 23) . ": " . $text . "\n";
    file_put_contents($file, $fin, FILE_APPEND | LOCK_EX);
}

session_start();
if(isset($_SESSION["username"])) { writeLog("User log out: " . $_SESSION["username"]); }
unset($_SESSION["username"]);
unset($_SESSION["password"]);

$lang = "";

if(isset($_COOKIE["language"])){
    $lang = $_COOKIE["language"];
}

if(isset($_GET["lang"])) {
    $lang = $_GET["lang"];
}



$ukranian = ["Головна","Додати подію","Вийти","Логін","Пароль","Увійти","Погода"];
$russian = ["Главная","Добавить событие","Выйти","Логин","Пароль","Войти","Погода"];
$english = ["Home","Add event","Exit","Login","Password","Log in","Weather"];

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


if(isset($_POST) && isset($_POST['username'])) {

    $username = $_POST["username"];
    $password = $_POST["password"];
    
    writeLog("Log in try: " . $username);

    if (strlen($username) > 0 && strlen($password) > 0) {
        $conn = new mysqli("127.0.0.1", "root", "12345", "calendar");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $query = "SELECT * FROM users WHERE users.title = '$username' AND users.password = '$password'";
        
        $result = $conn->query($query);

        if ($result != null && $result->num_rows > 0) {
            session_start();
            $_SESSION["username"] = $username;
            $_SESSION["password"] = $password;
            writeLog("Log in succesful: " . $username);
            header('Location: ' . "../index.php?lang=".$lang);
        } else { writeLog("Log in error: " . $username); }
    } else { writeLog("Log in error: " . $username); }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/login.css">
    <link rel="stylesheet" type="text/css" href="../css/addEvent.css">

</head>
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
            </nav>
              <div class="header__icons">
             <div class="header__icon"><form action="" method="get"><input name="lang" value="ua" type="hidden"><button style="background: transparent; border: none"><img src="../img/ukraine_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="ru" type="hidden"><button style="background: transparent; border: none"><img src="../img/russia_round_icon_64.png"></button></form></div>
                    <div class="header__icon"><form action="" method="get"><input name="lang" value="eng" type="hidden"><button style="background: transparent; border: none"><img src="../img/united_kingdom_round_icon_64.png"></button></form></div>
            </div>
        </div>
    </header>
    <main>
        <form class="login-form" action="" method="POST">
            <div class="login">
                <h2 class="login-title">'.$language [3].':</h2>
                <input type="text" class="login-input input" name="username">
            </div>
            <div class="password">
                <h2 class="password-tilte">'.$language[4].':</h2>
                <input type="password" class="password-input input" name="password">
            </div>
            <div class="submit-btn">
                <button class="submit-btn">'.$language[5].'</button>
            </div>
        </form>
            '; ?>
    </main>
    <footer>
        <div class="footer__wrapper">
            <div class="footer__author">@nekt2111.github.io</div>
            <div class="footer__author">@unknownMusician.github.io</div>
        </div>
    </footer>

</div>

</body>
</html>