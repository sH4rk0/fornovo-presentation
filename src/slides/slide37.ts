export default class Slide37 extends Phaser.Scene {
  private _bg: Phaser.GameObjects.TileSprite;
  constructor() {
    super({
      key: "Slide37"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.image("bg", "/assets/images/backgrounds/2/1.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._bg = this.add.tileSprite(640, 450, 800, 400, "bg");

    this.events.on("shutdown", () => {
      this._bg.destroy();
    });
  }

  update(): void {
    this._bg.tilePositionX += 0.2;
  }
}
