<?php 

if (!isset($_GET)) die;

$num = (int)$_GET["num"];

$xml = simplexml_load_file("db.xml");

$xml->addChild('num', $num);

file_put_contents("db.xml", $xml->saveXML());

$json = json_encode($xml);

echo $json;

?>