// Extending Boot class 
class Boot extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    // Starts preloadGame scene
    create() {
        this.game.scene.start("preloadGame");
    }
}
