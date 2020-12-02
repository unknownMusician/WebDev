<?php
if (isset($_POST)) {
    $connection = mysqli_connect("127.0.0.1", "root", "12345", "pharmacy") or die ("Could not connect:");

    $clientName = $_POST["clientName"];
    $clientSurname = $_POST["clientSurname"];
    $clientMiddlename = $_POST["clientMiddlename"];
    
    $workerName = $_POST["workerName"];
    $workerSurname = $_POST["workerSurname"];
    $workerMiddlename = $_POST["workerMiddlename"];
    
    $productName = $_POST["productName"];
    $productDescription = $_POST["productDescription"];
    $productPrice = $_POST["productPrice"];

    if(
        strlen($clientName) == 0 || 
        strlen($clientSurname) == 0 || 
        strlen($workerName) == 0 || 
        strlen($workerSurname) == 0 || 
        strlen($productName) == 0 || 
        strlen($productDescription) == 0 || 
        strlen($productPrice) == 0)
    { die; }

    $query = "INSERT IGNORE INTO clients (ID, Name, Surname, Middlename) VALUES (
        NULL, 
        '$clientName', 
        '$clientSurname', 
        '$clientMiddlename')";
    mysqli_query($connection, $query) or die (mysqli_error($connection));

    $query = "INSERT IGNORE INTO workers (ID, Name, Surname, Middlename) VALUES (
        NULL, 
        '$workerName', 
        '$workerSurname', 
        '$workerMiddlename')";
    mysqli_query($connection, $query) or die (mysqli_error($connection));

    $query = "INSERT IGNORE INTO products (ID, name, description, price) VALUES (
        NULL, 
        '$productName', 
        '$productDescription', 
        '$productPrice')";
    mysqli_query($connection, $query) or die (mysqli_error($connection));

    $query = "INSERT IGNORE INTO deals (ID, IDClient, IDWorker, IDProduct) VALUES (
        NULL, 
        (SELECT ID FROM clients WHERE Name = '$clientName'), 
        (SELECT ID FROM workers WHERE Name = '$workerName'),
        (SELECT ID FROM products WHERE name = '$productName'))";
    mysqli_query($connection, $query) or die (mysqli_error($connection));

    echo "Дані про купівлю товару \"$productName\" клієнтом \"$clientSurname $clientName\" у працівника аптеки \"$workerSurname $workerName\" успішно додано до БД";
}
?>