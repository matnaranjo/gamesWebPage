<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./snake_style.css">
    <script src="./snake.js" ></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- Log in and register account buttons div -->
    <div id="user">
        <button class="button" onclick="register()" id="regisbut">register</button>
        <button class="button" onclick="log_in()" id="logbut">log in</button>
    </div>

    <!-- Log in div  -->
    <div id="access">
        <div class="close"  onclick="log_in_close()">
            X
        </div>
        <form action="">
            <div class="usertext">
                <input id="username"type="text" placeholder="Username" name="log_user">
            </div>
            <div class="usertext">
                <input type="password" placeholder="Password" name="log_password">
            </div>
            <input class="pop_button" id="next" type="submit" value="next" name="next"></button>  
        </form>
    </div>

    <!-- Register div -->
    <div id="registration">
        <div class="close" onclick="register_close()" >
            X
        </div>
        <form action="reg.php" method="POST">
            <div class="usertext">
                <input id="username"type="text" placeholder="Username" name="reg_username">
            </div>
            <div class="usertext">
                <input type="password" placeholder="Password" name="reg_password">
            </div>
            <div class="usertext">
                <input type="password" placeholder="Confirm password" name="reg_password_conf">
            </div>
            <input class="pop_button" id="submit" type="submit" value="create" name="create"></button>  
        </form>
    </div>

    <!-- Game window -->
    <div id="canvassnake">
        <!-- Upper margin -->
        <div class="margen"></div>
        <!-- Text bar -->
        <div id="barratexto">
            <!-- Speed options -->
            <div id="opciones">  
                <div id="texto"><b>Velocidad:</b></div>
                <button type="button" onclick="decremento()">&#9660;</button>
                <div id="velocidad">08</div>
                <button type="button" onclick="incremento()">&#9650;</button>

            </div>
            <!-- Start button with score -->
            <div >
                <button type="button" id="start" onclick="inicio()"><b>START</b></button>
                <div id="marcador">0</div>
            </div>
        </div>
        <!-- Lower margin -->
        <div class="margen"></div>
        <!-- Game canvas -->
        <canvas id="snakecanvas" width="500" height="500" style="border:solid 1px black" ></canvas>
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

</body>
</html>