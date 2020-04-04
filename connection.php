<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'id13071373_pvgcompte');
define('DB_PASSWORD', 'Vaibhav@26598');
define('DB_NAME', 'id13071373_pvgsupport');
 
/* Connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>