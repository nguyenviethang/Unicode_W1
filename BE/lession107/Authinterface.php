<?php
interface AuthInterface extends AccessArray
{
    public const MSG = 'unicode Academy';
    public function login();
    public function logout();
    public function register();
}
