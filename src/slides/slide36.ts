export default class Slide36 extends Phaser.Scene {
  private _tile: Phaser.GameObjects.TileSprite;
  constructor() {
    super({
      key: "Slide36"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.image("bg", "/assets/images/backgrounds/2/1.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._tile = this.add.tileSprite(640, 450, 800, 400, "bg");

    this.events.on("shutdown", () => {
      this._tile.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
