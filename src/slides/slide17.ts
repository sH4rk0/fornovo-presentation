export default class Slide17 extends Phaser.Scene {
  private _sprite: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "Slide17"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.image("sprite", "/assets/images/sprite.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this._sprite = this.add
      .image(this.game.canvas.width / 2, 550, "sprite")
      .setScale(2)
      .setRotation(0.5);

    this.events.on("shutdown", () => {
      this._sprite.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
    this._sprite.rotation += 0.1;
  }
}
