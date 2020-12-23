<?php

if (!isset($_POST) || !isset($_POST["confirm"])) die;
if ($_POST["confirm"] != 'true') die;

$doc = new DOMDocument;
$doc->load('db.xml');

$numbers = $doc->documentElement;

// находим главу (chapter) и удалям из книги (book)
while ($numbers->getElementsByTagName('num')->item(0)) {
    $chapter = $numbers->getElementsByTagName('num')->item(0);
    $oldchapter = $numbers->removeChild($chapter);
}

file_put_contents("db.xml", $doc->saveXML());

$file = 'logs.txt';
$fin = substr(date(DATE_RFC822, time()), 0, 23) . ": " . "Data cleared" . "\n";
file_put_contents($file, $fin, FILE_APPEND | LOCK_EX);

?>