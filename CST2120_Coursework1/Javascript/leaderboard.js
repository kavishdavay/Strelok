// Declaring constant variable for table body ID in leaderboard.php
const tableID = document.getElementById('leaderboardData');

// Gets each user's username, index and score in local storage and adds it to the table on the leaderboard page
function create_table_body() {

    // Assigning number of users in local storage to count variable
    var count = localStorage.length;

    // Assigning variable to null so as to store html code
    let tableData = '';

    // For loop gets username and score of each user object in local storage and adds it to an html statement which gets stored in a varaible
    // The html statement is the pushed to the leadboard page in order to fill up the table
    for(let i = 0; i < count; i++) {
        let objectKey = window.localStorage.key(i);

        let userData = localStorage.getItem(objectKey);

        userDataObject = JSON.parse(userData);
        // var count2 = Object.keys(userDataObject).length;

        let userTime = userDataObject.score;
        let userNumber = i + 1;
        let userName = userDataObject.username;
        
        tableData += `<tr><td>${userNumber}</td><td>${userName}</td><td>${userTime}</td></tr>`;;
        tableID.innerHTML = tableData;
    }
}

// Performs function when page is loaded
window.onload = () => {
    create_table_body();
  };