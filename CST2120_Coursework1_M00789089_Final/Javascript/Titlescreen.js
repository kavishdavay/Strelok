// Extending Titlescreen class
class Titlescreen extends Phaser.Scene {
    constructor() {
        super("titleScreen");
    }

    // Building scene
    create() {

        // Adding and positioning background images to scene
        this.background = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background');
        this.background2 = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background2');

        // Changing where background images display from to top left
        // Otherwise images load from the center of the scene
        this.background.setOrigin(0, 0);
        this.background2.setOrigin(0, 0);
        
        // Adding and positioning logo image to scene
        this.logo = this.add.image(25, 40, 'logo');
        this.logo.setOrigin(0, 0);
        
        // Adding and positioning enter image to scene
        this.enter = this.add.image(gameWidth / 2, gameHeight - 45, 'pressEnter');
        
        // Assigning ENTER key to variable
        var startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        // Performs function when ENTER key is pressed
        startKey.on('down', this.startGame, this);

        // Event performs function after a delay of 700ms
        this.time.addEvent({ delay: 700, callback: this.enterAnimation, callbackScope: this, loop: true });

    }

    // Function hides or displays enter image depending on its state
    enterAnimation() {
        if (this.enter.alpha) {
            this.enter.alpha = 0;
          } else {
            this.enter.alpha = 1;
          }
    }

    // Function calls another function
    startGame() {
        this.modeSelection();
    }

    // Function to select difficulty level
    modeSelection() {

        // Adding and positioning images to act as buttons by making them interactive
        this.easyMode = this.add.image(0, 70, 'easyMode').setInteractive();
        this.easyMode.setOrigin(0, 0);
        this.easyMode.setDisplaySize(200 * 0.4, 80 * 0.4);

        this.normalMode = this.add.image(80, 70, 'normalMode').setInteractive();
        this.normalMode.setOrigin(0, 0);
        this.normalMode.setDisplaySize(200 * 0.4, 80 * 0.4);

        this.hardMode = this.add.image(160, 70, 'hardMode').setInteractive();
        this.hardMode.setOrigin(0, 0);
        this.hardMode.setDisplaySize(200 * 0.4, 80 * 0.4);

        // Removing logo and enter images
        this.logo.destroy();
        this.enter.destroy();

        // Checks whether user has clicked on image and performs function
        this.easyMode.on('pointerdown', function(){
            // Assigning difficulty, resets gameRunTime variable and starts playGame scene 
            difficulty = 3;
            gameRuntime = 0;
            game.scene.start('playGame');
        });

        this.normalMode.on('pointerdown', function(){
            difficulty = 2;
            gameRuntime = 0;
            game.scene.start('playGame');
        });

        this.hardMode.on('pointerdown', function(){
            difficulty = 1;
            gameRuntime = 0;
            game.scene.start('playGame');
        });
    }
    


    update() {
        this.background2.tilePositionY += 0.1;
    }
}