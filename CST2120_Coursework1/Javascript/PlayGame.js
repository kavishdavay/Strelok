// Extending PlayGame class
class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }


    // Create function to add and position objects in scene
    create() {
        // Event performs function every 1000ms
        timer = this.time.addEvent({
            delay: 1000,
            callback: this.countOneSecond,
            callbackScope: this,
            loop: true
        });  

        // Calling function to add and position backgrounds
        this.createBackground();

        // Calling function to create world using JSON tilemap
        this.createTilemap();

        // Calling function to add and position decoration objects
        this.decorations();

        // Calling function to create and position player
        this.createPlayer(6, 7);
       
        // Calling function to create and position monsters
        this.createCrab1(8, 7);
        this.createCrab2(53, 18);
        this.createCrab3(69, 11);

        // Calling function to create and position orb item
        this.createOrb(62, 7);

        // Configuration properties for music
        this.musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        // Adding music using loaded music key
        music = this.sound.add('music', this.musicConfig);

        // Plays music
        music.play();

        // Assigning camera to variable
        this.myCam = this.cameras.main;

        // Defining camera bounds
        this.myCam.setBounds(0, 0, 2240, 368);

        // Function for camera to follow player and defining offset
        this.myCam.startFollow(this.player, true, 0.95, 0.05, 20, 20);

        // Function to create keys for input
        this.bindKeys();

        // Playing animation for player
        this.player.play('idle');

        // Function to define collision between tiles, player, monsters
        this.defineCollisions();

        // Text to display timer
        var timeTextStyle = {font: "10px Roboto", fill: '#E43AA4', stroke: '#000', strokeThickness: 4};
        timerText = this.add.text(9, 8, "Time: ", timeTextStyle).setScrollFactor(0);

        // Text to display lives
        livesText = this.add.text(200, 8, "Lives: ", timeTextStyle).setScrollFactor(0);
    }

    // Function increments variable and updates timer text
    countOneSecond() {
        gameRuntime += 1; 
        timerText.setText("Time: " + gameRuntime + " seconds");
    }


    // Function adds, positions and defines dimensions of background images
    // setOrigin changes the point at which the image will display from
    // setScrollFactor set to zero to fix background at the same position
    createBackground() {
        this.background = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background').setOrigin(0, 0).setScrollFactor(0);
        this.background2 = this.add.tileSprite(0, 0, gameWidth, gameHeight, 'background2').setOrigin(0, 0).setScrollFactor(0);
    }

    // Assigning variables and creating world
    createTilemap() {
        // Tilemap used to create world and defining tile dimensions
        this.globalMap = this.make.tilemap({key: 'map', tileWidth: 16, tileHeight: 16});

        // Adding tileset images to display tiles
        const tileset = this.globalMap.addTilesetImage('tileset', 'tileset');
        const walls = this.globalMap.addTilesetImage('walls', 'walls');

        // Assigning tilemap layers 
        this.layer2 = this.globalMap.createLayer('Tile Layer 2', walls, 0, 0);
        this.layer = this.globalMap.createLayer('Tile Layer 1', tileset, 0, 0);

    }

    // Function to define collision between objects in scene
    defineCollisions() {

        // Adding collider between player and first tilemap layer
        this.physics.add.collider(this.player, this.layer);

        // Defining which tiles will have collsion using the tile ID
        this.layer.setCollisionBetween(27, 31);
        this.layer.setCollision(33);
        this.layer.setCollisionBetween(182, 185);
        this.layer.setCollisionBetween(182, 185);
        this.layer.setCollision(81);
        this.layer.setCollision(83);
        this.layer.setCollision(85);
        this.layer.setCollision(87);
        this.layer.setCollision(89);
        this.layer.setCollision(114);
        this.layer.setCollision(116);
        this.layer.setCollision(93);
        this.layer.setCollision(170);
        this.layer.setCollisionBetween(172, 173);
        this.layer.setCollision(175);
        this.layer.setCollision(177);
        this.layer.setCollisionBetween(179, 180);
        this.layer.setCollision(166);
        this.layer.setCollision(214);
        this.layer.setCollision(215);
        this.layer.setCollision(238);
        this.layer.setCollision(239);
        this.layer.setCollisionBetween(254, 257);
        this.layer.setCollision(76);
        this.layer.setCollision(100);
        this.layer.setCollision(78);
        this.layer.setCollision(102);
        this.layer.setCollision(248);
        this.layer.setCollision(249);
        this.layer.setCollision(251);
        this.layer.setCollision(252);
        this.layer.setCollision(259);
        this.layer.setCollision(260);
        this.layer.setCollision(119);
        this.layer.setCollision(206);
        this.layer.setCollision(230);
        this.layer.setCollision(209);
        this.layer.setCollision(233);
        this.layer.setCollisionBetween(242, 244);
        this.layer.setCollisionBetween(242, 246);
        this.layer.setCollisionBetween(246, 249);
        this.layer.setCollisionBetween(185, 188);
        this.layer.setCollisionBetween(211, 212);
        this.layer.setCollisionBetween(233, 236);
        this.layer.setCollisionBetween(257, 260);

        // Calling function to define collision side of tile
        this.setOneWayCollision(38);
        this.setOneWayCollision(42);
        this.setOneWayCollision(187);
        this.setOneWayCollision(188);

    }

    // Function searches tilemap using co-ordinates x and y to find tiles that will have collision only on the top using the tile ID 
    setOneWayCollision(tileID) {
        var x, y, tile;
        for (x = 0; x < this.globalMap.width; x++) {
          for (y = 1; y < this.globalMap.height; y++) {
            tile = this.globalMap.getTileAt(x, y);
            if (tile != null) {
              if (tile.index == tileID) {
                tile.setCollision(false, false, true, false);
              }
            }
          }
        }
    }

    // Calling function to add and position sprites from atlas
    decorations() {
        this.addDecoration(0, 6, 'gate-01');

        this.addDecoration(3, 8, 'plant-big');

        this.addDecoration(19, 20, 'plant-small');

        this.addDecoration(20, 20, 'stone');
        this.addDecoration(51, 8, 'stone-head');

        this.addDecoration(54, 3, 'stalactite');
        this.addDecoration(27, 14, 'stalactite');
    }

    // Function takes co-ordinates x and y which are multiplied by 16 
    // This is done to position the sprite using the tile number instead of pixel position
    // item argument refers to item key in atlas-1
    addDecoration(x, y, item) {
        this.add.image(x * 16, y * 16, 'atlas-props', item);
    }

    // Adding player to scene
    createPlayer(x, y) {
        x *= 16;
        y *= 16;

        // Assigning number of player lives based on difficulty selected
        lives = difficulty;

        // Adding player sprite to scene
        this.player = this.physics.add.sprite(x, y, 'atlas1', 'player-idle-1');

        // Defining player gravity and size
        this.player.setGravityY(500);
        this.player.body.setSize(11, 40, 35, 24);


        // Creating player idle animation
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-idle-',
                start: 1,
                end: 4,
                zeroPad: 0
            }),
            frameRate: 6,
            repeat: -1
        });

        // Creating player run animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-run-',
                start: 1,
                end: 10,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });

        // Creating player duck animation
        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-duck-',
                start: 1,
                end: 2,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });

        // Creating player jump animation
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-jump-',
                start: 1,
                end: 6,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });

        // Creating player fall animation
        this.anims.create({
            key: 'fall',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-jump-',
                start: 3,
                end: 6,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });

        // Creating player hurt animation
        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'player-hurt-',
                start: 1,
                end: 2,
                zeroPad: 0
            }),
            frameRate: 4,
        });


    }

    // Assigning keyboard arrow keys 
    bindKeys() {
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    // Update function performs operations in cycles based on the game time elapsed
    update() {

        // Calling function for player movement
        this.movePlayer();

        // Calling function for player animations
        this.playerAnimations();

        // Calling function for parallax effect on background
        this.parallaxBackground();

        // Calling function for enemy movement
        this.moveEnemy(this.crab1);
        this.moveEnemy(this.crab2);
        this.moveEnemy(this.crab3);

        // Adding collider between enemy and tilemap layer 
        // Performs function if enemy touches layer
        this.physics.add.collider(this.crab1, this.layer, this.enemyCollider, null, this);
        this.physics.add.collider(this.crab2, this.layer, this.enemyCollider, null, this);
        this.physics.add.collider(this.crab3, this.layer, this.enemyCollider, null, this);

        // Adding overlap function between player and enemy
        // Performs function when overlap occurs
        this.physics.add.overlap(this.player, this.crab1, this.playerHurt, null, this);
        this.physics.add.overlap(this.player, this.crab2, this.playerHurt, null, this);
        this.physics.add.overlap(this.player, this.crab3, this.playerHurt, null, this);

        // Adding collider between player and item orb
        // Performs function if player touches orb
        this.physics.add.collider(this.player, this.orb, this.playerWin, null, this);

        // Updating lives text
        livesText.setText("Lives: " + lives);

        // Calling function to reset player when hurt
        this.hurtInit();

    }

    // Changes scene class to winScreen and stops music
    playerWin() {
        this.scene.start('winScreen');
        music.stop();
    }

    // Checks if enemy has collided with map on left or right side and changes direction 
    enemyCollider(enemy) {
        if(enemy.body.blocked.left) {
            enemy.setVelocityX(60);
        } else if(enemy.body.blocked.right) {
            enemy.setVelocityX(-60);
        }
    }

    // Plays animation if player is hurt and checks lives number
    playerHurt(player) {
        // Prevents player from losing all lives instantly by using a buffer
        // Player can be hurt every 2 seconds
        if (deathBuffer > this.time.now) {
            return;
        }

        deathBuffer = this.time.now + 2000;

        // Checks if player has lives left
        // If player still has lives and gets hurt their lives will be decremented by 1
        // The player hurt animation plays
        // The velocity of the player is changed to bounce away from enemy
        // The player is then sent back to the start
        if (lives > 1) {
            if (hurtCheck) {
                return;
            }
            lives -= 1;
            console.log(lives);
            hurtCheck = true;
            player.play('hurt', true);
            player.body.setVelocityY(-150);
            player.body.setVelocityX((player.scale.x == 1) ? -100 : 100);
            player.x = 6 * 16;
            player.y = 7 * 16;
        } else {
            // Calling function if no lives are left
            this.playerDie();
        }
    }

    // Changes scene class to gameOver
    // Stops music
    playerDie() {
        this.scene.start('gameOver');
        music.stop();
    }

    // Changes velocity of player depending on the arrow key being pressed
    movePlayer() {
        var speed = 100;

        // Moving player from left to right
        if(this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.flipX = true;
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.flipX = false;
        }
        else {
            this.player.setVelocityX(0);
        }

        // If up arrow key is pressed and player is touching the ground player moves up
        if(this.cursorKeys.up.isDown && this.player.body.onFloor()) {
            this.player.setVelocityY(-200);
        }

    }

    // Checks whether player is hurt and is on ground
    // Resets hurtCheck variable back to false to prevent animation from playing forever
    hurtInit() {
        if (hurtCheck && this.player.body.onFloor()) {
            hurtCheck = false;
        }
    }

    // Checks whether player is hurt
    // If player is not hurt and x velocity is not zero plays animation depending on button pressed
    // If x velocity is zero player idle animation plays
    // If y velocity is greater than zero player jump animation plays
    // If y velocity is less than zero player fall animation plays
    playerAnimations() {

        if (hurtCheck) {
            return;
        }

        if (this.player.body.onFloor()) {
            if(this.player.body.velocity.x != 0) {
                this.player.play('run', true);
            } else {
                if(this.cursorKeys.down.isDown) {
                    this.player.play('duck', true);
                    crouchCheck = true;
                } else {
                    crouchCheck = false;
                    this.player.play('idle', true);
                }
            }
        } else {
            if(this.player.body.velocity.y > 0) {
                this.player.play('fall', true);
            } else if (this.player.body.velocity.y < 0) {
                this.player.play('jump', true);
            }
        }
    }

    // Parallax effect of background by making background move based on camera movement
    parallaxBackground() {
        this.background2.tilePositionX = this.myCam.scrollX * 0.5;
        this.background2.tilePositionY = this.myCam.scrollY * 0.5;
    }

    // Creating enemies
    createCrab1(x, y) {
        x *= 16;
        y *= 16;
        this.crab1 = this.physics.add.sprite(x * 2, y, 'atlas1', 'crab-idle-1');

        // Setting speed of enemy
        this.crab1.body.setVelocityX(60);
        
        // Setting gravity of enemy
        this.crab1.setGravityY(1000);

        // Setting size of enemy
        this.crab1.body.setSize(16, 25, 16, 7);
        
        // creating enemy idle animation
        this.anims.create({
            key: 'crab-idle',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'crab-idle-',
                start: 1,
                end: 4,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });

        // Creating enemy walk animation
        this.anims.create({
            key: 'crab-walk',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'crab-walk-',
                start: 1,
                end: 4,
                zeroPad: 0
            }),
            frameRate: 10,
            repeat: -1
        });
    
        // Playing enemy idle animation
        this.crab1.play('crab-walk');

    }

    createCrab2(x, y) {
        x *= 16;
        y *= 16;
        this.crab2 = this.physics.add.sprite(x, y, 'atlas1', 'crab-idle-1');
    
        this.crab2.setGravityY(1000);
        this.crab2.body.setSize(16, 25, 16, 7);
        this.crab2.body.setVelocityX(60);
    
    
        this.crab2.play('crab-walk');

    }

    createCrab3(x, y) {
        x *= 16;
        y *= 16;
        this.crab3 = this.physics.add.sprite(x, y, 'atlas1', 'crab-idle-1');
    
        this.crab3.setGravityY(1000);
        this.crab3.body.setSize(16, 25, 16, 7);
        this.crab3.body.setVelocityX(60);
    
        this.crab3.play('crab-walk');

    }

    // Flips enemy based on its velocity
    moveEnemy(enemy) {

        if(enemy.body.velocity.x > 0) {
            enemy.flipX = true;
        } else if (enemy.body.velocity.x < 0) {
            enemy.flipX = false;
        } else {
            enemy.play('crab-idle');
        }

        enemy.body.setVelocityY(0);
    }

    // Creating orb item
    createOrb(x, y) {
        x *= 16;
        y *= 16;
        this.orb = this.physics.add.sprite(x, y, 'atlas1', 'power-up-1');

        // Creating orb animation
        this.anims.create({
            key: 'item',
            frames: this.anims.generateFrameNames('atlas1', {
                prefix: 'power-up-',
                start: 1,
                end: 7,
                zeroPad: 0
            }),
            frameRate: 20,
            repeat: -1
        });

        // Playing orb animation
        this.orb.play('item');

    }


}
