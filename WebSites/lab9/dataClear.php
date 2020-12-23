<?php 

if (!isset($_POST) || !isset($_GET["confirm"])) die;
if ($_GET["confirm"] != 'true') die;

$confirm = $_GET["confirm"];

$xml = simplexml_load_file("db.xml");

$xml->addChild('num', $num);

file_put_contents("db.xml", $xml->saveXML());

$json = json_encode($xml);

echo $json;

?>