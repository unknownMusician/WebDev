<?php
header("Access-Control-Allow-Origin: *");

if (isset($_POST)) {

    date_default_timezone_set('UTC');
    print("<h1>" . date('l jS \of F Y h:i:s A') . "</h1>");
    print('<h1>Message received:<h3>'. $_POST['message']);
}
?>