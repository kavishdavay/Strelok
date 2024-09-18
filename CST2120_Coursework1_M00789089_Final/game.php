<?php
require('common.php');  # Links common.php to game page
outputheader("Game"); # Calls outputheader function to pass Game as the title
outputnav("game") # Calls outputnav function to set active page on the navigation bar
    ?>

<div class="background-container">
    <!-- Creating game area  -->
    <div class="game_background">
        <div class="game_area" id="phaser_div">
            <script type="text/javascript" src="./Javascript/phaser.min3.js"></script>
            <script type="text/javascript" src="./Javascript/Boot.js"></script>
            <script type="text/javascript" src="./Javascript/Preload.js"></script>
            <script type="text/javascript" src="./Javascript/Titlescreen.js"></script>
            <script type="text/javascript" src="./Javascript/PlayGame.js"></script>
            <script type="text/javascript" src="./Javascript/GameOver.js"></script>
            <script type="text/javascript" src="./Javascript/WinScreen.js"></script>
            <script type="text/javascript" src="./Javascript/game.js"></script>
        </div>
    </div>
</div>

<script src="./Javascript/register.js"></script>
<script src="./Javascript/game.js"></script>
<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>