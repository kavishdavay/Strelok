<?php

// Function outputs page title and duplicated HTML code
function outputheader($title)
{
  echo '<!DOCTYPE html>  
  <html lang="en-UK">
  <head>
    <title>' . $title . ' Page</title>
    <link rel="stylesheet" href="Styles/style.css?v=' . time() . '">
    <link href="http://fonts.cdnfonts.com/css/arcade-classic" rel="stylesheet">
  </head>
  <body>';
}

// Function using an associative array outputs the navigation bar and checks whether the active page is equal to the selected page name
function outputnav($active_page)
{
  echo '<nav>
  <a href="home.php">
      <img src="Images/logo2.png" class="logo">
  </a>';

  // Each page name is assigned to its corresponding file path
  $page_location = [
    "home" => "home.php",
    "register" => "register.php",
    "leaderboard" => "leaderboard.php",
    "controls" => "controls.php",
  ];
  echo '<ul>';
  foreach ($page_location as $page_name => $page_path) {
    echo '<li>';

    // Using if else to compare selected page to page name which decides whether to remain on the page or change page
    if ($page_name == $active_page)
      echo '<a class="active" href="' . $page_path . '">' . $page_name . '</a>';
    else
      echo '<a href="' . $page_path . '">' . $page_name . '</a>';
  }

  echo '</li>';
  echo '</ul>';


  // Displays play now button in navigation bar
  echo
    '<a href="game.php" class="playNowBtn">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Play Now
  </a>';
  echo '</nav>';
}

// Function to display the footer on page
function outputfooter()
{
  echo '<footer>
    <a href="https://www.instagram.com">
        <img alt="Instagram" src="Images/instagram.png">
    </a>
    <a href="https://twitter.com">
        <img alt="Twitter" src="Images/twitter.png">
    </a>
    <a href="https://facebook.com">
        <img alt="Facebook" src="Images/facebook.png">
    </a>
    <p>© Copyright Kavish Davay</p>
    </footer>
    </body>
    </html>';
}