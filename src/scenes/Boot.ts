export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot"
    });
  }

  preload() {
    this.load.bitmapFont(
      "commodore",
      "assets/fonts/carrier_command.png",
      "assets/fonts/carrier_command.xml"
    );
  }

  create() {
    //console.log('Boot:create!')
    this.scene.start("Preloader");
  }
}
