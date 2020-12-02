<?php
if (isset($_POST)) {
    $connection = mysqli_connect("127.0.0.1", "root", "12345", "library") or die ("Could not connect:");

    $author = $_POST["author"];
    $title = $_POST["title"];
    $publisher = $_POST["publisher"];
    $city = $_POST["city"];
    $year = $_POST["year"];
    $page_qty = $_POST["page_qty"];
    $annotation = $_POST["annotation"];

    $len_author = strlen($author);
    $len_title = strlen($title);

    if($len_author > 0 & $len_title > 0){
        $query = "INSERT IGNORE INTO author (id, name) VALUES (NULL, '$author')";
        mysqli_query($connection, $query) or die (mysqli_error($connection));
        $query = "INSERT IGNORE INTO city (id, name) VALUES (NULL, '$city')";
        mysqli_query($connection, $query) or die (mysqli_error($connection));
        $query = "INSERT IGNORE INTO publisher (id, name, city) VALUES (NULL, '$publisher', (SELECT id FROM city WHERE name = '$city'))"; // двойное равно?
        mysqli_query($connection, $query) or die (mysqli_error($connection));
        $query = "INSERT IGNORE INTO book (id, title, year, page, annotation, publisher) VALUES (NULL, '$title', '$year', '$page_qty', '$annotation', (SELECT id FROM publisher WHERE name = '$publisher'))";
        mysqli_query($connection, $query) or die (mysqli_error($connection));
        $query = "INSERT IGNORE INTO book_author (book, author) VALUES ((SELECT id FROM book WHERE title = '$title'), (SELECT id FROM author WHERE name = '$author'))";
        mysqli_query($connection, $query) or die (mysqli_error($connection));
    }
    echo "Дані про книгу $title автора $author успішно добавлено до БД<br>";
}
?>