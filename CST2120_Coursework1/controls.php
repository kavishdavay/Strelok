<?php
require('common.php');  # Links common.php to controls page
outputheader("Controls"); # Calls outputheader function to pass Controls as the title
outputnav("controls") # Calls outputnav function to set active page on the navigation bar
    ?>

<div class="background-container">
    <!-- Inserting header title -->
    <h1 class="controls_title">Controls</h1>

    <!-- Inserting background image -->
    <div class="control_background"></div>

    <!-- Inserting image and gif for movement using arrow keys -->
    <img class="arrow_keys" src="Images/arrow_keys.png">
    <img class="running_animation" src="Images/running_animation.gif">
    <p class="arrow_text">Use the arrow keys to move</p>

</div>

<script src="./Javascript/register.js"></script>

<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>