// Declaring regex variables
var email_regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var strong_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var medium_regex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
var name_regex = /^[a-zA-Z0-9].{3,12}$/;
var phone_regex = /^[0-9]{6,20}$/;
var usernameArray = [];

// Gets user information from form and assigns them to their own variable
// If all validation is valid the user information gets stored in local storage as an object with the key being the username
function registrationSubmit() {

    // Cancels the event of submit
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let birthdate = document.getElementById('birthdate').value;

    //  User object
    let user = {
        username: username,
        password: password,
        email: email,
        phone: phone,
        birthdate: birthdate,
        score: 0,
    };

    // Checking whether all validation is correct and storing object in local storage by converting it to string
    // Stores username in array to be used for validation 
    // Changes to login page
    if (usernameValidation() && passwordValidation() && emailValidation() && phoneValidation() == true) {
        let json = JSON.stringify(user);
        localStorage.setItem(username, json);
        usernameArray.push(username);
        window.location.replace("login.php");
    }
    else {
        console.log("Error")
    }

}

// Gets user information from form, performs validation and stores information in session storage
function loginSubmit() {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Gets user object from local storage using username as key
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);

    // Checks whether login information is invalid and displays appropriate error message
    // If login information is valid session storage is cleared and new user is stored, page is changed to home.php 
    if (username == "") {
        document.getElementById("loginUsernameError").innerHTML = "Username required";
        document.getElementById("loginUsernameError").style.color = '#c43333'
    } else if (user == null) {
        document.getElementById("loginUsernameError").innerHTML = "Username not found";
        document.getElementById("loginUsernameError").style.color = '#c43333'
    } else if (username == data.username && password == data.password) {
        console.log(data.username + " logged in");
        sessionStorage.clear()
        sessionStorage.setItem('logged', user)
        window.location.replace("game.php");
    } else if (password == "") {
        document.getElementById("loginPasswordError").innerHTML = "Password required";
        document.getElementById("loginPasswordError").style.color = '#c43333'
    } else {
        document.getElementById("loginPasswordError").innerHTML = "Incorrect password";
        document.getElementById("loginPasswordError").style.color = '#c43333'
    }

}

// Username validation
function usernameValidation() {

    // Gets username from form
    let username = document.getElementById('username').value;

    // Checks if username already exists
    let usernameCheck = usernameArray.includes(username);

    // Checks if username satisfies requirements and returns true
    // Otherwise error messages are displayed
    if (usernameCheck == false) {
        if (username != "" && name_regex.test(username) == true) {
            document.getElementById("usernameError").innerHTML = "Valid Username";
            document.getElementById("usernameError").style.color = '#26ed6c'
            return true;
        } else if (username != "" && name_regex.test(username) == false) {
            document.getElementById("usernameError").innerHTML = "Invalid Username";
            document.getElementById("usernameError").style.color = '#c43333'
        } else if (username == "") {
            document.getElementById("usernameError").innerHTML = "Username required";
            document.getElementById("usernameError").style.color = '#c43333'
        }
    } else {
        document.getElementById("usernameError").innerHTML = "User already exists";
        document.getElementById("usernameError").style.color = '#c43333'
    }

}

// Password validation
function passwordValidation() {

    // Gets password from form
    let password = document.getElementById('password').value;

    // Checks if password satisfies requirements and returns true
    // Otherwise error messages are displayed
    if (password != "" && password.length <= 8 && medium_regex.test(password) == true) {
        document.getElementById("passwordError").innerHTML = "Weak password";
        document.getElementById("passwordError").style.color = '#cc802f'
        return true;
    } else if (password != "" && password.length >= 8 && strong_regex.test(password) == true) {
        document.getElementById("passwordError").innerHTML = "Strong password";
        document.getElementById("passwordError").style.color = '#26ed6c'
        return true;
    } else if (password != "" && medium_regex.test(password) == false) {
        document.getElementById("passwordError").innerHTML = "Invalid password";
        document.getElementById("passwordError").style.color = '#c43333'
    } else if (password == "") {
        document.getElementById("passwordError").innerHTML = "Password required";
        document.getElementById("passwordError").style.color = '#c43333'
    }
}

// Email validation
function emailValidation() {

    // Gets email from form
    let email = document.getElementById('email').value;

    // Checks if email satisfies requirements and returns true
    // Otherwise error messages are displayed
    if (email != "" && email_regex.test(email) == true) {
        document.getElementById("emailError").innerHTML = "Valid Email";
        document.getElementById("emailError").style.color = '#26ed6c'
        return true;
    } else if (email != "" && email_regex.test(email) == false) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        document.getElementById("emailError").style.color = '#c43333'
    } else if (email == "") {
        document.getElementById("emailError").innerHTML = "Email required";
        document.getElementById("emailError").style.color = '#c43333'
    }
}

// Phone validation
function phoneValidation() {

    // Gets phone number from form
    let phone = document.getElementById('phone').value;

    // Checks if number satisfies requirements and returns true
    // Otherwise error messages are displayed
    if (phone != "" && phone_regex.test(phone) == true) {
        document.getElementById("phoneError").innerHTML = "Valid phone number";
        document.getElementById("phoneError").style.color = '#26ed6c'
        return true;
    } else if (phone != "" && phone_regex.test(phone) == false) {
        document.getElementById("phoneError").innerHTML = "Invalid phone number";
        document.getElementById("phoneError").style.color = '#c43333'
    } else if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Phone number required";
        document.getElementById("phoneError").style.color = '#c43333'
    }
}

// Login username validation
function usernameLoginValidation() {

    // Gets username from form
    let username = document.getElementById('username').value;

    // Checks if username is not empty and returns true
    // Otherwise error messages are displayed
    if (username == "") {
        document.getElementById("loginUsernameError").innerHTML = "Username required";
        document.getElementById("loginUsernameError").style.color = '#c43333'
        return true
    } else if (username != "") {
        document.getElementById("loginUsernameError").innerHTML = "";
    }
}

// Login password validation
function passwordLoginValidation() {

    // Gets password from form
    let password = document.getElementById('password').value;

    // Checks if password is not empty and returns true
    // Otherwise error messages are displayed
    if (password == "") {
        document.getElementById("loginPasswordError").innerHTML = "Password required";
        document.getElementById("loginPasswordError").style.color = '#c43333'
        return true
    } else if (password != "") {
        document.getElementById("loginPasswordError").innerHTML = "";
    }
}

// Adding dummy users to local storage
function checkArray() {
    let dummyUsernames = ["Mario", "Luigi", "Michael", "Trevor", "Franklin", "Boswer", "Niko"];
    let dummyPasswords = ["Mario12345#", "Luigi12345#", "Michael12345#", "Trevor12345#", "Franklin12345#", "Boswer12345#", "Niko12345#"];
    let dummyEmail = ["m@g.com", "l@g.com", "i@g.com", "t@g.com", "f@g.com", "b@g.com", "n@g.com"];
    let dummyPhone = ["12345678", "12345678", "12345678", "12345678", "12345678", "12345678", "12345678"];
    let dummyScore = [54, 75, 35, 765, 32, 30, 23];

    let counter = dummyUsernames.length;
    let arrayCheck = usernameArray.length;

    if (arrayCheck == 0) {
        for (let i = 0; i < counter; i++) {
            let user = {
                username: dummyUsernames[i],
                password: dummyPasswords[i],
                email: dummyEmail[i],
                phone: dummyPhone[i],
                birthdate: "",
                score: dummyScore[i],
            };

            let json = JSON.stringify(user);
            localStorage.setItem(dummyUsernames[i], json);
            usernameArray.push(dummyUsernames[i]);
        }
    }

}

// Performs function onpage load
window.onload = () => {
    checkArray();
};