<?php

$sname= "localhost";

$unmae= "root";

$password = "Rachit@30";

$db_name = "amazon";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {

    echo "Connection failed!";

}
else{
    echo "Connection established!";
}