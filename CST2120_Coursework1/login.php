<?php
require('common.php');  # Links common.php to login page
outputheader("Login"); # Calls outputheader function to pass Login as the title
outputnav("login") # Calls outputnav function to set active page on the navigation bar
    ?>

<div class="background-container">
    <img src="./Images/background.jpg" class="login_background">
    <!-- Creating form for user to login -->
    <div class="login_form">
        <h1>Login</h1>
        <form>

            <!-- Input text field for username -->
            <div class="text_field">
                <input type="text" onkeyup="usernameLoginValidation()" id="username" autocomplete="off" required>
                <span></span>
                <label>Username</label>
            </div>
            <label id="loginUsernameError"></label>

            <!-- Input text field for password -->
            <div class="text_field">
                <input type="password" onkeyup="passwordLoginValidation()" id="password" autocomplete="new-password"
                    required>
                <span></span>
                <label>Password</label>
            </div>
            <label id="loginPasswordError"></label>

            <!-- Submit button to login -->
            <input type="submit" onclick="loginSubmit()" value="Login">

            <!-- Link which redirects to register page -->
            <div class="signup_link">
                Create an account? <a href="register.php">Register</a>
            </div>
        </form>
    </div>
</div>


<script src="./Javascript/register.js"></script>

<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>