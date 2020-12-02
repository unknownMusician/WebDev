<?php

$conn = new mysqli("127.0.0.1", "root", "12345", "pharmacy");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$chapterName = $_POST["chapter-name"];
$chapterAmountPages = $_POST["chapter-amountPages"];
$chapterEpigraph = $_POST["chapter-epigraph"];



$paragraphName = $_POST["paragraph-name"];
$paragraphEpigraph = $_POST["paragraph-epigraph"];
$paragraphAmountPages =$_POST["paragraph-amountPages"];

$radioEngineeringName = $_POST["radioEngineering-name"];
$radioEngineeringDescription = $_POST["radioEngineering-description"];
$radioEngineeringPrice = $_POST["radioEngineering-price"];


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
deals.idproduct = products.id"; // todo add search;

if ($clientName != ""){
    $query = $query . " AND clients.name = '$clientName'";
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