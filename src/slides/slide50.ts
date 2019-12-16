export default class Slide50 extends Phaser.Scene {
  private _image: Phaser.GameObjects.Image;
  private _ground: Phaser.GameObjects.Image;
  private _isCollide: boolean;

  constructor() {
    super({
      key: "Slide50"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._isCollide = false;
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
      .setAlpha(10)
      .setImmovable(true);

    //@ts-ignore
    this._ground.body.allowGravity = false;

    this._image = this.physics.add
      .image(640, 400, "sprite")
      .setScale(2)
      .setGravityY(1600);

    this.input.on("pointerdown", () => {
      //@ts-ignore
      this._image.body.velocity.y = -600;
    });

    this.physics.add.collider(
      this._image,
      this._ground,
      () => {},
      undefined,
      this
    );
  }

  update(): void {}
}
