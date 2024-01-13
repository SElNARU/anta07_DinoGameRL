
import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";

//render grafiky
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 340,
  pixelArt: true,
  transparent: true,

  //enginy pro fyziku
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },

  //separatni sceny, zalezi na poradi
  scene: [PreloadScene, PlayScene]
};

new Phaser.Game(config);




