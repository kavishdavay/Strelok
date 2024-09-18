// Extending scene class GameOver
class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    // Adding and positioning sprites and images
    create() {
        this.background = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background');
        this.background2 = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background2');

        this.background.setOrigin(0, 0);
        this.background2.setOrigin(0, 0);
    
        this.gameOverImage = this.add.image(25, 40, 'gameOver');
        this.gameOverImage.setOrigin(0, 0);
    
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