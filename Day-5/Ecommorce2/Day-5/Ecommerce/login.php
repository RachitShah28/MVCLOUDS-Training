<?php 

include "db_conn.php";

if (isset($_POST['email']) && isset($_POST['password']) && empty($_POST['firat_name'])) {

    function validate($data){

       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;

    }

    $email = validate($_POST['email']);

    $pass = validate($_POST['password']);

    if (empty($email)) {

        header("Location: index.php?error=User Name is required");

        exit();

    }else if(empty($pass)){

        header("Location: index.php?error=Password is required");

        exit();

    }else{

        $sql = "SELECT * FROM users WHERE email='$email' AND password='$pass'";

        $result = mysqli_query($conn, $sql);
  
        if (mysqli_num_rows($result) === 1) {

            $row = mysqli_fetch_assoc($result);

            if ($row['email'] === $email && $row['password'] === $pass) {

                echo "Logged in!";

                $_SESSION['email'] = $row['email'];

                $_SESSION['name'] = $row['first_name'];

                $_SESSION['id'] = $row['id'];

                header("Location: main.php");

                exit();

            }else{

                header("Location: index.php?error=Incorect User name or password");

                exit();

            }

        }else{

            header("Location: index.php?error=Incorect User name or password");

            exit();

        }

    }

}
else{
    header("Location: index.php");
    exit();
}