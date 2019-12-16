export default class Slide48 extends Phaser.Scene {
  private _text: Phaser.GameObjects.Text;
  private _image: Phaser.GameObjects.Image;
  private _ground: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "Slide48"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    let graphics = this.make
      .graphics({})
      .fillStyle(0x00ff00)
      .fillRect(0, 0, 1280, 100);
    graphics.generateTexture("ground", 1280, 100);
    graphics.destroy();

    this._ground = this.physics.add
      .image(0, 650, "ground")
      .setDepth(10000)
      .setOrigin(0)
      .setAlpha(1)
      .setImmovable(true);

    //@ts-ignore
    this._ground.body.allowGravity = false;

    this._image = this.physics.add
      .image(640, 400, "sprite")
      .setScale(2)
      .setGravityY(10);

    this._text = this.add.text(640, 400, "y:" + this._image.y).setOrigin(0.5);
  }

  update(): void {
    if (this._image.y > 600 && this._image.y <= 1000) {
      this._text
        .setText("NULLAAAAA!!!!")
        .setFontSize(40)
        .setColor("#ff0000");
    } else if (this._image.y > 1000) {
      this._text
        .setText("Manca la collisione!!!!")
        .setFontSize(40)
        .setColor("#ff0000");
    } else {
      this._text.setText("y:" + this._image.y);
    }
    //console.log(this.scene.key + ":update");
  }
}
