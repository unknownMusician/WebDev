<?php 

echo json_encode(
    simplexml_load_string(
        file_get_contents("db.xml")
    )
);

$file = 'logs.txt';
$fin = substr(date(DATE_RFC822, time()), 0, 23) . ": " . "Data GET request made" . "\n";
file_put_contents($file, $fin, FILE_APPEND | LOCK_EX);

?>