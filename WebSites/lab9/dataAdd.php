<?php 

if (!isset($_GET)) die;

$num = $_GET["num"];

$entries = simplexml_load_string(
    file_get_contents("db.xml")
);

//
$entries->addChild("num", $num);
//

echo $entries;

file_put_contents("db.xml", $entries);
$json = json_encode($entries);

echo $json;

?>