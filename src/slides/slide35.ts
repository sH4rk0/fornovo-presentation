export default class Slide35 extends Phaser.Scene {
  private _depth: boolean;
  private _sprite: Phaser.GameObjects.Sprite;
  constructor() {
    super({
      key: "Slide35"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    let graphics = this.add.graphics();
    //square
    graphics.fillStyle(0xff0000, 1);
    graphics.fillRect(0, 0, 256, 256);
    graphics.generateTexture("rect", 256, 256);
    graphics.destroy();

    this.add
      .sprite(640, 530, "rect")
      .setScale(1)
      .setDepth(2);

    this._sprite = this.add
      .sprite(100, 600, "sprite")
      .setScale(2)
      .setDepth(1);

    this.tweens.add({
      targets: this._sprite,
      x: 1200,
      ease: "Sine.easeInOut",
      duration: 2000,
      delay: 0,
      yoyo: true,
      repeat: -1,
      onYoyo: () => {
        if (this._depth) {
          this._sprite.setDepth(1);
        } else {
          this._sprite.setDepth(3);
        }
        this._depth = !this._depth;
      },
      onRepeat: () => {
        if (this._depth) {
          this._sprite.setDepth(1);
        } else {
          this._sprite.setDepth(3);
        }
        this._depth = !this._depth;
      }
    });

    this.events.on("shutdown", () => {
      this._sprite.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
