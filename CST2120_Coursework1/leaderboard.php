<?php
require('common.php');  # Links common.php to leaderboard page
outputheader("Leaderboard"); # Calls outputheader function to pass Leaderboard as the title
outputnav("leaderboard") # Calls outputnav function to set active page on the navigation bar
  ?>



<div class="background-container">

  <!-- Color block for linear gradient background -->
  <div class="leaderboard_background"></div>

  <!-- Inserting header title for leaderboard -->
  <h1 class="leaderboard_title">Leaderboard</h1>

  <!-- Creating table for leaderboard which has been hardcoded with dummy data -->
  <table class="leaderboard-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Time (Seconds)</th>
      </tr>
    </thead>
    <tbody id='leaderboardData'>
    </tbody>
  </table>

  <!-- Inserting gifs to be displayed on page -->
  <img src="./Images/insect_monster.gif" id="insect_monster">
  <img src="./Images/lightning.gif" id="lightning">

</div>

<script src="./Javascript/register.js"></script>
<script src="./Javascript/leaderboard.js"></script>

<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>