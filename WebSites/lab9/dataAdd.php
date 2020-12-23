<?php 

if (!isset($_POST) || !isset($_POST["num"])) die;

$num = (int)$_POST["num"];

$xml = simplexml_load_file("db.xml");

$xml->addChild('num', $num);

file_put_contents("db.xml", $xml->saveXML());

$json = json_encode($xml);

echo $json;

$file = 'logs.txt';
$fin = substr(date(DATE_RFC822, time()), 0, 23) . ": " . "New entry written" . "\n";
file_put_contents($file, $fin, FILE_APPEND | LOCK_EX);

?>