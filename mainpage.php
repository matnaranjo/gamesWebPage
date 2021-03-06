<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="./background_animation.js"></script>
    <link rel="stylesheet" href="./mainpage.css">
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Index</title>
</head>
<body>
    <!-- canvas for backgoround -->
    <canvas id="background_animation"></canvas>
    <!-- Log in and register account buttons div -->
    <div id="user">
        <button class="button" id="regisbut" onclick="register()" >register</button>
        <button class="button" id="logbut" onclick="log_in()" >log in</button>
    </div>
    <!-- Log in div  -->
    <div id="access">
        <div class="close"  onclick="log_in_close()">
            X
        </div>
        <form method="post">
            <div class="usertext">
                <input class="username" id="logUsername" name="log_user" placeholder="Username" type="text"  >
            </div>
            <div class="usertext">
                <input id="logPassword" name="log_password" placeholder="Password" type="password" >
            </div>
            <input class="pop_button" id="next" name="next" type="submit" value="next" > 
        </form>
    </div>
    <!-- Register div -->
    <div id="registration">
        <div class="close" onclick="register_close()" >
            X
        </div>
        <form id="registerNewUser" method="post">
            <div class="usertext">
                <input class="username" id="regUsername" name="reg_username" placeholder="Username" type="text" >
            </div>
            <div class="usertext">
                <input id="regPassword" name="reg_password" placeholder="Password" type="password">
            </div>
            <div class="usertext">
                <input id="regPasswordConf" name="reg_password_conf" placeholder="Confirm password" type="password">
            </div>
            <input class="pop_button" id="submit" name="create" type="submit"  value="create" > 
        </form>
    </div>


    <!-- Javascript code for pop-ups -->
    <script>
        var access = document.getElementById("access");
        var reg = document.getElementById("registration");

        function log_in(){
            reg.style.display="none"
            access.style.display="block";
        }
        function log_in_close(){
            access.style.display="none";
        }

        function register(){
            reg.style.display="block"
            access.style.display="none";
        }
        function register_close(){
            reg.style.display="none"
        }
    </script> 

    <script src="./registration.js"></script>
    <script src="./login.js"></script>
</body>
</html>