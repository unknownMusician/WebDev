<?php 

if (!isset($_POST) || !isset($_POST["num"])) die;

$num = (int)$_POST["num"];

$xml = simplexml_load_file("db.xml");

$xml->addChild('num', $num);

file_put_contents("db.xml", $xml->saveXML());

$json = json_encode($xml);

echo $json;

?>