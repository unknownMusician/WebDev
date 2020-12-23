<?php 

$xml = simplexml_load_string(
    file_get_contents("db.xml")
);

//

//

file_put_contents("db.xml", $xml);
$json = json_encode($xml);

echo $json;

?>