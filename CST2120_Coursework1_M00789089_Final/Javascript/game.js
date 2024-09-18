// Initialising global variables
var user;
var game;
var player;
var background;
var background2;
var gameWidth = 240;
var gameHeight = 176;
var globalMap;
var crouchCheck;
var lives;
var deathBuffer;
var hurtCheck;
var difficulty;
var timer;
var timerText;
var livesText;
var gameRuntime;
var music;

// Gets user information from session storage using key and checks whether user is logged in
// If user key is undefined displays alert to login and replaces game page with registration page 
user = sessionStorage.getItem('logged');

if (user == undefined){
    alert('Please register/login to play!');
    window.location.replace("register.php");
}

// Variable stores javascript object converted from string obtained from session storage
var userData = JSON.parse(user);

// Variable stores configuration properties for phaser game
var config = {
    // Setting width and height of game
    width: gameWidth,
    height: gameHeight,

    // Assigning parent using div id from game.php
    parent: 'phaser_div', 

    // Using arcade physics
    physics: {
        default: 'arcade',
        arcade:{
            debug: false
        }
    },

    // Fills parent element in game.php
    scale: {
        mode: Phaser.Scale.AUTO,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    // Adding scene classes
    scene: [
        Boot,
        Preload,
        Titlescreen,
        PlayGame,
        GameOver,
        WinScreen
    ],

    // Setting renderer properties
    pixelArt: true,
    roundPixels: true,
    antialias: false
};

// Creates phaser game when game.php is loaded
window.onload = function () {
    game = new Phaser.Game(config);
}