export default class Slide20 extends Phaser.Scene {
  private _sprite2: Phaser.GameObjects.Sprite;
  private _runAnimation: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];

  constructor() {
    super({
      key: "Slide20"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.spritesheet("sprite2", "assets/images/players.png", {
      frameWidth: 52,
      frameHeight: 70,
      endFrame: 84
    });
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._sprite2 = this.add
      .sprite(this.game.canvas.width / 2, 600, "sprite2")
      .setScale(2);

    let _animation: any = {
      key: "run-b",
      frames: this.anims.generateFrameNumbers("sprite2", {
        frames: this._runAnimation
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    this._sprite2.play("run-b", true);

    this.events.on("shutdown", () => {
      this._sprite2.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
