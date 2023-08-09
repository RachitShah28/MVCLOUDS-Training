<html>
  <head>
    <meta charset="utf-8">
    <title>Amazon Sign up</title>
    <link rel="stylesheet" href="signIn.css">
  </head>
  <body>
      <form action="sign_in.php" method="POST">
        <div id="signInBorder">
          <p id="SignInTxt">
            Sign up
          </p>
    
          <strong>First Name</strong>
          
            <input type="text" name="first_name" value="" required>
          </label>
          <br>
          <label>
            <strong>Last Name</strong>
          
            <input type="text" name="last_name" value="" required>
          </label>
          <br>
          <label>
            <strong>Email (phone for mobile accounts)</strong>
            <br>
            <input type="email" name="email" value="" required>
          </label>
    
          <br>
    
          <label>
            <strong>Password</strong>
          
            <input type="password" name="password" value="" required>
          </label>
    
          <div>
            <a href="signIn.html"> <input type="submit" value="Sign up" id="amazon"></a>
           
            <!-- <button id="amazon">Sign up</button> -->
          </div>
    
    
        </div>
    
      <!-- <hr id="footer"> -->
    
      <div class="extra">
        <p class="links"><a href="#" id="first">Conditions of Use</a>
        <a href="#">Notice of Use</a>
        <a href="#">Help</a></p>
        <p class="links" id="special">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>

      </form>
    
      <script src="https://www.gstatic.com/firebasejs/10.1.0/firebase-auth-compat.js"></script>
        <script src="firebase.js" type="module"></script>
        <script src="signUp.js"></script>
  </body>
</html>
