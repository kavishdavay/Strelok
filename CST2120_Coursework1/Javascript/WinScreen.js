// Extending scene class WinScreen
class WinScreen extends Phaser.Scene {
    constructor() {
        super("winScreen");
    }

    // Adding and positioning sprites and images
    create() {
        this.background = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background');
        this.background2 = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background2');

        this.background.setOrigin(0, 0);
        this.background2.setOrigin(0, 0);
    
        this.winImage = this.add.image(25, 40, 'winText');
        this.winImage.setOrigin(0, 0);

        this.timeImage = this.add.image(30, 90, 'timeText');
        this.timeImage.setOrigin(0, 0);

        // Assigning text to variable for time taken
        var timeTextStyle = {font: "12px Roboto", fill: '#fcb824', stroke: '#000', strokeThickness: 4};
        var timeCountText = this.add.text(110, 90, gameRuntime + ' seconds', timeTextStyle);
        timeCountText.setOrigin(0, 0);

        // Checks if highscore has been achieved
        // Stores time taken in local and session storage of user logged in
        if (userData.score < gameRuntime) {
            userData.score = gameRuntime;
            localStorage.setItem(userData.username, JSON.stringify(userData));
            sessionStorage.setItem('logged', JSON.stringify(userData));
        }

        this.timeImage.setDisplaySize(110,20)
    
        this.enter = this.add.image(gameWidth / 2, gameHeight - 45, 'pressEnter');
        
        // Assigning ENTER key to variable and checking if it is pressed
        // If pressed performs function
        var startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        startKey.on('down', this.startGame, this);

        // Time event for blinking of enter image
        this.time.addEvent({ delay: 700, callback: this.enterAnimation, callbackScope: this, loop: true })
    
    }

    enterAnimation() {
        if (this.enter.alpha) {
            this.enter.alpha = 0;
          } else {
            this.enter.alpha = 1;
          }
    }

    // Changes scene to titleScreen
    startGame() {
        this.scene.start('titleScreen');

    }

    // Moves background down
    update() {
        this.background2.tilePositionY += 0.1;
    }
}