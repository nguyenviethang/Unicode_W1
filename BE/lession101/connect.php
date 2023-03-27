<?php
require_once 'databaseconnect.php';
$sql = "select * from users where id= :id and email like :email";
$sql = "INSERT INTO users (id, name, email, password, group_id, status, created_at, updated_at)
VALUES ('5', 'Tom B. Erichsen', 'Skagen@gmail.com', 'Stavanger', '4006', 'Norway')";
$statement = $conn->prepare($sql);
$data = [
    'id' => 1,
    'email' => '%thang%'
];
$status = $statement->execute($data);

$users = $statement->fetchAll(PDO::FETCH_ASSOC);
echo '<pre/>';
print_r($users);
echo '</pre>';
