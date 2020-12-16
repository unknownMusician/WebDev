<?php

$conn = new mysqli("127.0.0.1", "root", "12345", "calendar");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_GET["username"];
$password = $_GET["password"];

if (
    strlen($username) == 0 || 
    strlen($password) == 0
) { die; }

$query = "SELECT
events.title as 'title',
events.description as 'description', 
events.dateTimeStart as 'dateTimeStart', 
events.dateTimeEnd as 'dateTimeEnd'
FROM events, users";
// WHERE 
// events.idUser = (SELECT ID FROM users WHERE Name = '$username')";

$result = $conn->query($query);

if ($result != null && $result->num_rows > 0) {
    echo '{ "events": [ ';
    // output data of each row
    $row = $result->fetch_assoc();
    
    while($row) {
        echo " { ";
        //
        echo ' "title" : "' . $row["title"] . '", ';
        echo ' "description" : "' .  $row["description"] . '", ';
        echo ' "dateTimeStart" : "' .  $row["dateTimeStart"] . '", ';
        echo ' "dateTimeEnd" : "' .  $row["dateTimeEnd"] . '"';
        //
        echo " } ";
        $row = $result->fetch_assoc();
        if($row) { echo " , "; }
    }
    echo " ] }";
} else {
    echo " {} ";
}
$conn->close();

?>