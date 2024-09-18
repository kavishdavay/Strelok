<?php
require('common.php');  # Links common.php to register page
outputheader("Register"); # Calls outputheader function to pass Register as the title
outputnav("register") # Calls outputnav function to set active page on the navigation bar
    ?>

<div class="background-container">
    <img src="./Images/background.jpg" class="login_background">
    <!-- Creating a form for registering a user -->
    <div class="login_form">
        <h1>Register</h1>
        <form>

            <!-- Input text field for username -->
            <div class="text_field">
                <input type="text" onkeyup="usernameValidation()" id="username" autocomplete="off" required>
                <span></span>
                <label>Username</label>
            </div>
            <label id="usernameError"></label>

            <!-- Input text field for password -->
            <div class="text_field">
                <input type="password" onkeyup="passwordValidation()" id="password" autocomplete="new-password"
                    required>
                <span></span>
                <label>Password</label>
            </div>
            <label id="passwordError"></label>

            <!-- Input text field for email address -->
            <div class="text_field">
                <input type="text" onkeyup="emailValidation()" id="email" required>
                <span></span>
                <label>Email Address</label>
            </div>
            <label id="emailError"></label>

            <!-- Input text field for phone number -->
            <div class="text_field">
                <input type="tel" onkeyup="phoneValidation()" id="phone" required>
                <span></span>
                <label>Phone Number</label>
            </div>
            <label id="phoneError"></label>

            <!-- Date field for date of birth -->
            <div class="date_field">
                <label>Date of birth (Optional):</label>
                <input type="date" id="birthdate">
            </div>

            <!-- Submit button to register -->
            <input type="submit" onclick="registrationSubmit()" value="Register">

            <!-- Link which redirects to login page -->
            <div class="signup_link">
                Already have an account? <a href="login.php">LogIn</a>
            </div>
        </form>
    </div>
</div>

<script src="./Javascript/register.js"></script>

<?php
outputfooter(); # Calls funtion outputfooter to display the footer
?>