<!DOCTYPE html>

<html>

    <head>

        <meta charset="UTF-8">

        <title>Php edit</title>

    </head>

    <body>

        <section>

    
            <?php

                $fullName = $_GET["fullName"];
               if(empty($fullName)) 
                {
                  $fullname="Gil Davidi";
                }
                $mail = $_GET["mail"];
                if(empty($mail))
                {
                $mail="gildavidi75@gmail.com";
                }
                $phone = $_GET["phone"];
                if(empty($phone))
                {
                $phone="0528146449";
                }
                echo "<h1> Hello " . $fullName .  ", Your updated profile details are: </h1>";
                echo "<h2> mail: " .$mail ."</h2>";
                echo "<h2> phone: "  .$phone  ."</h2>" ;
                $date = date('m/d/Y h:i:s a', time());  
                echo  "Update date is " .  $date ." (local)";

            ?>
               
        </section>

    </body>

</html>