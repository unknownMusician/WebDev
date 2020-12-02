<?php

$conn = new mysqli("127.0.0.1", "root", "12345", "radiodirectory");
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
chapters.id as 'ID',
chapters.name as 'Назва глави', 
chapters.amountPages as 'Кількість сторінок глави', 
chapters.epigraph as 'Епіграф глави',
paragraphs.name as 'Назва параграфа',
paragraphs.epigraph as 'Епіграф параграфа',
paragraphs.amountPages as 'Кількість сторінок параграфа',
radioengineering.name as 'Назва радіоприладу',
radioengineering.description as 'Опис',
radioengineering.price as 'Ціна'
FROM chapters, paragraphs, radioengineering, paragraphradio
WHERE 

paragraphs.idChapter = chapters.id AND 
paragraphradio.idParagraph = paragraphs.id AND 
paragraphradio.idRadioEngr = radioengineering.id";


if ($chapterName != ""){
    $query = $query . " AND chapters.name = '$chapterName'";
} if ($chapterAmountPages != ""){
    $query = $query . " AND chapters.amountPages = $chapterAmountPages";
} if ($chapterEpigraph != ""){
    $query = $query . " AND chapters.epigraph = '$chapterEpigraph'";
} if ($paragraphName != ""){
    $query = $query . " AND paragraphs.name = '$paragraphName'";
} if ($paragraphEpigraph != ""){
    $query = $query . " AND paragraphs.epigraph = '$paragraphEpigraph'";
} if ($paragraphAmountPages != ""){
    $query = $query . " AND paragraphs.amountPages = $paragraphAmountPages";
} if ($radioEngineeringName != ""){
    $query = $query . " AND radioengineering.name = '$radioEngineeringName'";
} if ($radioEngineeringDescription != ""){
    $query = $query . " AND radioengineering.description = '$radioEngineeringDescription'";
} if ($radioEngineeringPrice != ""){
    $query = $query . " AND radioengineering.price = $radioEngineeringPrice ";
}

$result = $conn->query($query);

if (!$result) {
    trigger_error('Invalid query: ' . $conn->error);
}

if ($result->num_rows > 0) {
    echo "<style>td {padding: 10px}</style>";
    echo "<table border='1px'>";
    echo "<tr>";
    echo "<td>ID</td><td>Назва глави</td><td>Кількість сторінок глави</td>
    <td>Епіграф глави</td><td>Назва параграфа</td><td>Епіграф параграфа</td>
    <td>Кількість сторінок параграфа</td><td>Назва радіоприладу</td>
    <td>Опис</td><td>Ціна</td>";
    echo "</tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        //
        implode($row);
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