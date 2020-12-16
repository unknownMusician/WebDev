<?php 

session_start();
unset($_SESSION["username"]);
unset($_SESSION["password"]);

if(isset($_POST) && isset($_POST['username'])) {

    $username = $_POST["username"];
    $password = $_POST["password"];

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
            header('Location: ' . "../index.php");
        }
    }
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
<div class="wrapper">
    <header>
        <div class="header__wrapper">
            <nav class="header__navigation">
                <a href="../index.php"style="color: whitesmoke" ><div class="nav__home">Home</div></a>
                <a href="addEvent.php" style="color: whitesmoke"><div class="nav__add-event">Add Event</div></a>
                <a href="login.php" style="color: whitesmoke"><div class="nav__about">About</div></a>
            </nav>
        </div>
    </header>
    <main>
        <form class="login-form" action="" method="POST">
            <div class="login">
                <h2 class="login-title">Login:</h2>
                <input type="text" class="login-input input" name="username">
            </div>
            <div class="password">
                <h2 class="password-tilte">Password:</h2>
                <input type="password" class="password-input input" name="password">
            </div>
            <div class="submit-btn">
                <button class="submit-btn">Log in</button>
            </div>
        </form>
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