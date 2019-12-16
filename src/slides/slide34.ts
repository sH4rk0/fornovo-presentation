export default class Slide34 extends Phaser.Scene {
  private _text: Phaser.GameObjects.Text;
  private _repeat: number;
  private _yoyo: number;
  private _sprite: Phaser.GameObjects.Sprite;
  constructor() {
    super({
      key: "Slide34"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._repeat = 0;
    this._yoyo = 0;
    this._text = this.add
      .text(this.game.canvas.width / 2, 500, "")
      .setOrigin(0.5);
    this._sprite = this.add.sprite(100, 600, "sprite").setScale(2);

    this.tweens.add({
      targets: this._sprite,
      x: 1200,
      ease: "Sine.easeInOut",
      duration: 2000,
      delay: 0,
      yoyo: true,
      repeat: 2,
      onRepeat: () => {
        this._repeat++;
        this._text.setText("repeat " + this._repeat);
      },
      onYoyo: () => {
        this._yoyo++;
        this._text.setText("yoyo " + this._yoyo);
      },
      onComplete: () => {
        this._text.setText("completato");
      }
    });

    this.events.on("shutdown", () => {
      this._sprite.destroy();
      this._text.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
