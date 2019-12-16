export default class Slide38 extends Phaser.Scene {
  private _bg: Phaser.GameObjects.TileSprite;
  private _bg2: Phaser.GameObjects.TileSprite;
  constructor() {
    super({
      key: "Slide38"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.image("bg_1", "/assets/images/backgrounds/2/1.png");
    this.load.image("bg_2", "/assets/images/backgrounds/2/2.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._bg = this.add.tileSprite(640, 450, 800, 400, "bg_1");
    this._bg2 = this.add.tileSprite(640, 450, 800, 400, "bg_2");

    this.events.on("shutdown", () => {
      this._bg.destroy();
      this._bg2.destroy();
    });
  }

  update(): void {
    this._bg.tilePositionX += 0.2;
    this._bg2.tilePositionX += 0.5;
  }
}
