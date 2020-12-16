<?php

session_start();
if(!isset($_SESSION["username"])) {
    header('Location: ' . "html/login.php");
}

$conn = new mysqli("127.0.0.1", "root", "12345", "calendar");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_SESSION["username"];
$password = $_SESSION["password"];

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

<body>
    <div class="wrapper">
        <header>
            <div class="header__wrapper">
                <nav class="header__navigation">
                    <a href="./index.php" style="color: whitesmoke">
                        <div class="nav__home">Home</div>
                    </a>
                    <a href="html/addEvent.php" style="color: whitesmoke">
                        <div class="nav__add-event">Add Event</div>
                    </a>
                    <a href="html/login.php" style="color: whitesmoke">
                        <div class="nav__about">About</div>
                    </a>
                </nav>
            </div>
        </header>
        <main>
            <div class="main__wrapper">
                <div class="first-row">
                    <div class="first-row__title">
                        <h2>Your events</h2>
                    </div>
                    <a href="html/addEvent.php">
                        <div class="first-row__add-btn">+</div>
                    </a>
                </div>
                <div class="second-row">
                    <?php 
                    while ($row = $result->fetch_assoc()) {
                        echo '
                        <div class="event__wrapper">
                            <div class="event__title">
                                <div class="event__name">' . $row["title"] . '</div>
                                <div class="event__date">
                                    <div class="event__date-start">Starts: ' . $row["dateTimeStart"] . '</div>
                                    <div class="event__date-end">Ends: ' . $row["dateTimeEnd"] . '</div>
                                </div>
                            </div>
                            <div class="event__description">
                                ' . $row["description"] . '
                            </div>
                        </div>
                        ';
                        }
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

</html>