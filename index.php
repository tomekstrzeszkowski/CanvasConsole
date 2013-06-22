<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="./assets/style/Css/Console.css">
        <title>Canvas Console</title>
        <style>

        </style>
    </head>
    <body>
    <div class="console">
        <div id="container"></div>
        <!-- LIBS -->
        <script src="./assets/script/Js/Lib/kinetic-v4.5.1.min.js"></script>
        <script src="./assets/script/Js/Lib/three.min.js"></script>
        <!-- CLASSES -->
        <script src="assets/script/Js/Class/Base64.js"></script>
        <script src="assets/script/Js/Class/Convert.class.js"></script>
        <script src="assets/script/Js/Class/Console.class.js"></script>
        <script src="assets/script/Js/Class/VisualizationController.class.js"></script>
        <script src="assets/script/Js/Class/Visualization.class.js"></script>
  
        <script src="assets/script/Js/Class/WelcomeVis.class.js"></script>
        <script src="assets/script/Js/Class/BinaryTextVis.class.js"></script>
        <script src="assets/script/Js/Class/MathVis/MathVis.class.js"></script>
        <script src="assets/script/Js/Class/3dVis/3dVis.class.js"></script>
         
        
        <script src="assets/script/Js/Class/CanvasConsole/Lib/Core.js"></script>
        <script src="assets/script/Js/Class/CanvasConsole/Class/Stage.class.js"></script>
      
        <!-- ACTION -->
        <script src="./assets/script/Js/Main.js">   
        </script>
    </div>
        
 <!-- avalible to put command in the console line to play music. notice
        that Poison.mp3 file is not avalible in the resource.
    <audio  controls >
        <source src="./Poison.mp3" type="audio/mpeg">
        <source src="./Poison.ogg" type="audio/ogg">
        <embed height="50" width="100" src="horse.mp3">
    </audio> -->
    </body>
</html>