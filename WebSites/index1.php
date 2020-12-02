<?php
$connection = mysqli_connect("127.0.0.1", "root", "12345", "radiodirectory") or die ("Could not connect:");

$inputSearch = $_REQUEST['search'];

$sql = "SELECT * FROM chapters WHERE NAME = '$inputSearch' ";

$result = $connection -> query($sql);

function doesItExist(array $arr){

    $date = array(
        'name' => $arr['name'] != false ? $arr['name']: 'Нет данніх'я
    )

}