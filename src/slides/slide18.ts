export default class Slide18 extends Phaser.Scene {
  private _image: Phaser.GameObjects.Image;
  private _text: Phaser.GameObjects.Text;
  private _clicks: number;

  constructor() {
    super({
      key: "Slide18"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._clicks = 0;
    this._text = this.add.text(this.game.canvas.width / 2 + 200, 550, "0");
    this._image = this.add
      .image(this.game.canvas.width / 2 + 200, 650, "sprite")
      .setScale(2)
      .setInteractive();

    this._image.on("pointerup", () => {
      this._clicks += 1;
      this._text.setText("" + this._clicks);
    });

    this.events.on("shutdown", () => {
      this._image.destroy();
      this._text.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
