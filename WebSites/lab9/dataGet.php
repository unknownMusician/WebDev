<?php 

echo json_encode(
    simplexml_load_string(
        file_get_contents("db.xml")
    )
);

?>