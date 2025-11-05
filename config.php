<?php
$DB_HOST = 'localhost';
$DB_USER = 'magazine_user';
$DB_PASS = 'StrongPassword123';
$DB_NAME = 'mountainmagazine';

$link = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if (!$link) {
    die("DB connection failed: " . mysqli_connect_error());
}
?>