 <?
  class User{
    private $name;
    private $lastname;
    private $email;
    private $id;
    function __construct($id,$name,$lastname,$email){
      $this->id = $id;
      $this->name = $name;
      $this->lastname = $lastname;
      $this->email = $email;
    }
    function getId(){return $this->id;}
    function getName(){return $this->name;}
    function getLastname(){return $this->lastname;}
    function getEmail(){return $this->email;}
    // Статический метод добавления пользователя
    static function addUser($name,$lastname,$email,$pass){
      global $mysqli;
      $email = mb_strtolower(trim($email)); //убираем пробелы, делаем маленькие буквы в емейле
      $pass = trim($pass);//убираем пробелы в пароле
      $pass = password_hash($pass, PASSWORD_DEFAULT);//шифруем пароль
      $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");//проверяем наличие в бд пользователя по емейл
      if ($result->num_rows != 0) return json_encode(["result"=>"exist"]);//ответ если пользователь есть
      $mysqli->query("INSERT INTO `users`(`name`, `email`, `pass`) VALUES ('$name','$email','$pass')");//добавляем пользователя
      return json_encode(["result"=>"success"]);//ответ успешно
    }
    // Статический метод авторизации пользователя
    static function authUser($email,$pass){
      global $mysqli;
      $email = mb_strtolower(trim($email)); //убираем пробелы, делаем маленькие буквы в емейле
      $pass = trim($pass);//убираем пробелы в пароле
      $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");//выбираем пользователя из бд по емейл
      $row = $result->fetch_assoc();//получаем данные из бд
      if (password_verify($pass,$row['pass'])){ //пороль введён верный
        $_SESSION["id"] = $row["id"];//запускаем сессию с ID пользователя
        return json_encode(["result"=>"success"]);//получаем ответ
      }else{
        return json_encode(["result"=>"error"]);
      }
    }
?>
