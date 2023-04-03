<?php
abstract class Model
{
    protected $message = null;
    public function getMessage()
    {
        return $this->message;
    }
    abstract public function get();
    abstract public function first();
    abstract public function setMessage($message);
}
