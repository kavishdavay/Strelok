// Extending Preload class
class Preload extends Phaser.Scene {
    constructor() {
        super("preloadGame");
    }

    // Loads assets before game starts
    preload() {

        // Loading titlescreen images
        this.load.image('logo', 'Images/assets/sprites/logo.png');
        this.load.image('gameOver', 'Images/assets/sprites/game-over.png');
        this.load.image('winText', 'Images/assets/sprites/win-text.png');
        this.load.image('timeText', 'Images/assets/sprites/time-text.png');
        this.load.image('pressEnter', 'Images/assets/sprites/pressEnter.png');

        // Loading mode selector images
        this.load.image('easyMode', './Images/assets/sprites/easy-mode.png');
        this.load.image('normalMode', './Images/assets/sprites/normal-mode.png');
        this.load.image('hardMode', './Images/assets/sprites/hard-mode.png');

        // Loading background images
        this.load.image('background', './Images/assets/environment/background.png');
        this.load.image('background2', './Images/assets/environment/background2.png');

        // Loading world tilesets and JSON tilemap for world 
        this.load.image('tileset', './Images/assets/environment/tilesets.png');
        this.load.image('walls', './Images/assets/environment/walls.png');
        this.load.tilemapTiledJSON('map', './Images/assets/maps/map.json');

        // Loading atlas for player and enemy animations
        this.load.atlas('atlas1', './Images/assets/atlas/atlas.png', './Images/assets/atlas/atlas.json');
        this.load.atlas('atlas-props', './Images/assets/atlas/atlas-props.png', './Images/assets/atlas/atlas-props.json');

        // Loading audio file
        this.load.audio('music', ['./Images/assets/sound/platformer_level04_loop.ogg']);

    }

    // Starts titlescreen scene
    create() {
        this.game.scene.start("titleScreen");
    }
}