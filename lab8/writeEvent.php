<?php
if (isset($_POST)) {
    $connection = mysqli_connect("127.0.0.1", "root", "12345", "calendar") or die ("Could not connect:");

    $username = $_POST["username"];
    $password = $_POST["password"];

    $title = $_POST["title"];
    $description = $_POST["description"];
    $dateTimeStart = $_POST["dateTimeStart"];
    $dateTimeEnd = $_POST["dateTimeEnd"];

    if (
        strlen($username) == 0 || 
        strlen($password) == 0 || 
        strlen($title) == 0 || 
        strlen($description) == 0 || 
        strlen($dateTimeStart) == 0 || 
        strlen($dateTimeEnd) == 0
    ) { die; }

    $query = "INSERT IGNORE INTO events (ID, idUser, title, description, dateTimeStart, dateTimeEnd) VALUES (
        NULL,
        (SELECT ID FROM users WHERE Name = '$username'),
        '$title', 
        '$description', 
        '$dateTimeStart', 
        '$dateTimeEnd')";
    mysqli_query($connection, $query) or die (mysqli_error($connection));

    echo "true";
}
?>