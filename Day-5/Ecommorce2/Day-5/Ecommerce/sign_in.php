<?php 

session_start(); 

include "db_conn.php";

if(isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && isset($_POST['password'])){
    function validate($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
 
     }
     $first_name = validate($_POST['first_name']);
     $last_name = validate($_POST['last_name']);
     $email = validate($_POST['email']);
     $pass = validate($_POST['password']);
 
     if (empty($first_name)) {
 
        header("Location: index.php?error=First Name is required");

        exit();
     }
    if (empty($last_name)) {

        header("Location: index.php?error=Last Name is required");

        exit();
    }
     if (empty($email)) {
 
         header("Location: index.php?error=Email is required");
 
         exit();
 
     }else if(empty($pass)){
 
         header("Location: index.php?error=Password is required");
 
         exit();
 
     }else{

         $sql = "INSERT INTO `users`(first_name,last_name,email,password) VALUES ('$first_name', '$last_name','$email','$pass')";
 
         $result = mysqli_query($conn, $sql);
         echo $result;
         if ($result == 1) {

                 header("Location: index.php?error=Please login with credentials!");
 
                 exit();
         }else{
             header("Location: index.php?error=Something went wrong!");
             exit();
 
         }
 
     }
}

else{
    header("Location: index.php");

    exit();

}