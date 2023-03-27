<?php  
class  Person {
    public $name = 'hoang an';
    public $email = 'contact@gmail.com';
    public  const MSG = 'hoc php';
    public function getName()
    {
        return 'Hoang An';
    }
}
$person = new Person();
echo $person->name.'<br/>';
echo $person->email.'<br/>';
echo $person->getName().'<br/>';
echo $person::MSG.'<br/>';
echo Person::MSG.'<br/>';