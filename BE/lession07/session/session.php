<?php
session_save_path('./logs');
session_name('unicode');
if (!session_id()) {
    session_start();
}
//gan session
$_SESSION['name'] = 'viet thang';
$_SESSION['customers'] = [
    'name' =>  'viet thang',
    'email' => 'vietthang@gmail.com',
];
