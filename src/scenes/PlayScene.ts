//import Phaser from "phaser";


class PlayScene extends Phaser.Scene {

    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    get gameHeight(){
       return this.game.config.height as number;
    }
    constructor() {
        super("PlayScene");
    }

    create(){
        this.createEnvironment();
        this.createPlayer();
        this.registerPlayerControl();


    }

    createPlayer() {
        this.player = this.physics.add.sprite(0, this.gameHeight, "dino-player").setOrigin(0,1);
    }

    createEnvironment() {
        this.add
            .tileSprite(0,this.gameHeight, 88, 26, "ground") //this.game.config.height vraci formou stringu proto je to hozene as number, bacha na to
            .setOrigin(0,1);
    }

    registerPlayerControl(){
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        spaceBar.on("down", () => {
            this.player.setVelocity(-200);
        })
    }

}

export default PlayScene;
