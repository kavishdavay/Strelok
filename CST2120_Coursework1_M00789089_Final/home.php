<?php
require('common.php');  # Links common.php to home page
outputheader("Home"); # Calls outputheader function to pass Home as the title
outputnav("home") # Calls outputnav function to set active page on the navigation bar
    ?>

<div class="background-container">
    <!-- Inserting images for background on header-->
    <div class="header">
        <section>
            <img src="./Images/home_background.jpg">
            <img src="./Images/clouds.png" id="clouds">
            <img src="./Images/mountains.png" id="mountains">
            <img src="./Images/planets.png" id="planets">
            <img src="./Images/stars.png" id="stars">
            <img src="./Images/plant_background.png" id="plant_background">
            <img src="./Images/big_logo.png" id="big_logo">
        </section>
    </div>

    <!-- Colour block for linear gradient -->
    <div class="block1">
    </div>

    <!-- Block containing introduction to the game. -->
    <div class="block2">
        <div class="introduction" id="introduction">
            <h1>INTRODUCTION</h1>
            <p>The ancient wizard Noxul finds himself awakened to a world destroyed by the plague. His mission is to
                find a
                time orb to go back in time and bring peace upon the world but he quickly finds out that he is not
                alone.
                The plague has turned most living beings into atrocious monsters who roam the world searching for humans
                to
                consume. Noxul will have to use his powers to combat these beasts and restore the state of the world
                before
                it is too late.
                <br><br>Play now to help Noxul succeed in his mission!
            </p>
        </div>

        <!-- Inserting gif  -->
        <img src="./Images/flying_monster.gif" id="flying_monster">

        <!-- Button redirects user to game page -->
        <a href="game.php" class="big_play_now_button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Play Now
        </a>
    </div>
</div>

<!-- Script for parallax effect on header images -->
<script>
    // Assigning variable to image ID
    let clouds = document.getElementById('clouds');
    let mountains = document.getElementById('mountains');
    let planets = document.getElementById('planets');
    let stars = document.getElementById('stars');
    let plant_background = document.getElementById('plant_background');
    let big_logo = document.getElementById('big_logo');
    let introduction = document.getElementById('introduction');
    let flying_monster = document.getElementById('flying_monster');

    // Event adder has been added to move images when user scrolls
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        stars.style.top = value * 0.5 + 'px';
        planets.style.left = value * 0.5 + 'px';
        clouds.style.top = value * -0.5 + 'px';
        big_logo.style.top = value * 0.5 + 'px';
        introduction.style.marginLeft = value * 0.1 + 'px';
        flying_monster.style.marginLeft = value * 0.2 + 'px';
    })
</script>
<script src="./Javascript/register.js"></script>
<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>