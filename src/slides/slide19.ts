export default class Slide19 extends Phaser.Scene {
  private _sprite1: Phaser.GameObjects.Sprite;
  private _runAnimation: Array<number> = [8, 9, 10, 11, 12, 13];

  constructor() {
    super({
      key: "Slide19"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.spritesheet("sprite1", "assets/images/players.png", {
      frameWidth: 52,
      frameHeight: 70,
      endFrame: 84
    });
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._sprite1 = this.add
      .sprite(this.game.canvas.width / 2, 600, "sprite1")
      .setScale(2);

    this.anims.create({
      key: "run-x",
      frames: this.anims.generateFrameNumbers("sprite1", {
        frames: this._runAnimation
      }),
      frameRate: 5,
      yoyo: false,
      repeat: -1
    });

    this._sprite1.play("run-x", true);

    this.events.on("shutdown", () => {
      this._sprite1.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
