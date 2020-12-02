<?php
if (isset($_POST)) {
    $connection = mysqli_connect("127.0.0.1", "root", "12345", "radiodirectory") or die ("Could not connect:");

    $chapterName = $_POST["chapter-name"];
    $chapterAmountPages = $_POST["chapter-amountPages"];
    $chapterEpigraph = $_POST["chapter-epigraph"];


    $len_chapterName = strlen($chapterName);
    $len_chapterEpigraph = strlen($chapterEpigraph);

    $paragraphName = $_POST["paragraph-name"];
    $paragraphEpigraph = $_POST["paragraph-epigraph"];
    $paragraphAmountPages =$_POST["paragraph-amountPages"];

    $len_paragraphName = strlen($paragraphName);
    $len_paragraphEpigraph = strlen($paragraphEpigraph);

    $radioEngineeringName = $_POST["radioEngineering-name"];
    $radioEngineeringDescription = $_POST["radioEngineering-description"];
    $radioEngineeringPrice = $_POST["radioEngineering-price"];

    $len_radioEngineeringName = strlen($radioEngineeringName);
    $len_radioEngineeringDescription = strlen($radioEngineeringDescription);

    if(
        $len_chapterName == 0 ||
        !is_numeric($chapterAmountPages) ||
        intval($chapterAmountPages) <= 0 ||
        $len_chapterEpigraph == 0 ||
        $len_paragraphName == 0 ||
        !is_numeric($paragraphAmountPages) ||
        intval($paragraphAmountPages) <= 0 ||
        $len_paragraphEpigraph == 0 ||
        $len_radioEngineeringName == 0 ||
        $len_radioEngineeringDescription == 0 ||
        !is_numeric($radioEngineeringPrice) ||
        intval($radioEngineeringPrice) <= 0
    )
    {
        die();
    }


        $query = "INSERT IGNORE INTO chapters (id, name,amountPages,epigraph) VALUES (NULL, '$chapterName','$chapterAmountPages','$chapterEpigraph')";
        mysqli_query($connection, $query) or die (mysqli_error($connection));

        $query = "INSERT IGNORE INTO paragraphs (id, name,idChapter,epigraph,amountPages) VALUES (NULL, '$paragraphName',
            (SELECT ID FROM chapters WHERE NAME = '$chapterName'),' $paragraphEpigraph','  $paragraphAmountPages')";
        mysqli_query($connection, $query) or die (mysqli_error($connection));

        $query = "INSERT IGNORE INTO radioengineering (id, name,description,price) VALUES (NULL, '$radioEngineeringName','$radioEngineeringDescription','$radioEngineeringPrice')";
        mysqli_query($connection, $query) or die (mysqli_error($connection));

        $query = "INSERT IGNORE INTO paragraphradio (id,idParagraph,idRadioEngr) VALUES (NULL,(SELECT ID FROM paragraphs WHERE NAME = '$paragraphName'),
        (SELECT ID FROM radioengineering WHERE NAME =  '$radioEngineeringName') )";
        mysqli_query($connection, $query) or die (mysqli_error($connection));

        echo "Дані про главу: Ім'я - $chapterName, Параграф - $paragraphName, Радіотехніку - $radioEngineeringName успішно додано до БД<br>";
}
?>