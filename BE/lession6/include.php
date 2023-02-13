<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';
    $errors = []; //mang loi

}
//kiem tra cac loi
if (empty($_POST['email'])) {
    $errors['email']['required'] = 'vui long nhap lai email';
} else {
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email']['email'] = 'vui long nhap email';
    }
}
