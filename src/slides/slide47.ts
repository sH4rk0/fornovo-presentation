export default class Slide47 extends Phaser.Scene {
  private _text: Phaser.GameObjects.Text;
  private _image: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "Slide47"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this._image = this.physics.add
      .image(640, 400, "sprite")
      .setScale(2)
      .setGravityY(10);

    this._text = this.add.text(640, 400, "y:" + this._image.y);
  }

  update(): void {
    this._text.setText("y:" + this._image.y);
    //console.log(this.scene.key + ":update");
  }
}
