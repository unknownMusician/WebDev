<?php

$conn = new mysqli("127.0.0.1", "root", "12345", "pharmacy");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$clientName = $_POST["clientName"];
$clientSurname = $_POST["clientSurname"];
$clientMiddlename = $_POST["clientMiddlename"];
    
$workerName = $_POST["workerName"];
$workerSurname = $_POST["workerSurname"];
$workerMiddlename = $_POST["workerMiddlename"];
    
$productName = $_POST["productName"];
$productDescription = $_POST["productDescription"];
$productPrice = $_POST["productPrice"];

$query = "SELECT
products.id as 'ID',
products.name as 'Назва продукту', 
products.description as 'Опис продукту', 
products.price as 'Ціна продукту',
clients.name as 'Ім`я клієнта',
clients.surname as 'Прізвище клієнта',
clients.middlename as 'По-батькові клієнта',
workers.name as 'Ім`я працівника',
workers.surname as 'Прізвище працівника',
workers.middlename as 'По-батькові працівника'
FROM products, clients, workers, deals
WHERE 
deals.idclient = clients.id AND
deals.idworker = workers.id AND
deals.idproduct = products.id";

if ($clientName != ""){
    $query = $query . " AND clients.name = '$clientName'";
} if ($clientSurname != ""){
    $query = $query . " AND clients.surname = '$clientSurname'";
} if ($clientMiddlename != ""){
    $query = $query . " AND clients.middlename = '$clientMiddlename'";
} if ($workerName != ""){
    $query = $query . " AND worker.name = '$workerName'";
} if ($workerSurname != ""){
    $query = $query . " AND worker.surname = '$workerSurname'";
} if ($workerMiddlename != ""){
    $query = $query . " AND worker.middlename = '$workerMiddlename'";
} if ($productName != ""){
    $query = $query . " AND products.name = '$productName'";
} if ($productDescription != ""){
    $query = $query . " AND products.description = '$productDescription'";
} if ($productPrice != ""){
    $query = $query . " AND products.price = $productPrice";
}

$result = $conn->query($query);

if ($result->num_rows > 0) {
    echo "<style>td {padding: 10px}</style>";
    echo "<table border='1px'>";
    echo "<tr>";
    echo "<td>ID</td><td>Назва продукту</td><td>Опис продукту</td>
    <td>Ціна продукту</td><td>Ім`я клієнта</td><td>Прізвище клієнта</td>
    <td>По-батькові клієнта</td><td>Ім`я працівника</td>
    <td>Прізвище працівника</td><td>По-батькові працівника</td>";
    echo "</tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        //
        foreach($row as $part){
            echo "<td>";
            echo $part;
            echo "</td>";
        }
        //
        echo "</tr>";
    }
    echo "</tr>";
} else {
    echo "0 results";
}
$conn->close();

?>