export default class Slide22 extends Phaser.Scene {
  private _sprite3: Phaser.GameObjects.Sprite;
  private _runAnimation: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  private _idleAnimation: Array<number> = [8, 9, 10, 11, 12, 13];
  private _isRunning: Boolean;
  constructor() {
    super({
      key: "Slide22"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.spritesheet("sprite3", "assets/images/players.png", {
      frameWidth: 52,
      frameHeight: 70,
      endFrame: 84
    });
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._sprite3 = this.add
      .sprite(this.game.canvas.width / 2, 600, "sprite3")
      .setScale(2)
      .setInteractive();

    let _animation: any = {
      key: "run-c",
      frames: this.anims.generateFrameNumbers("sprite3", {
        frames: this._runAnimation
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    _animation = {
      key: "idle-c",
      frames: this.anims.generateFrameNumbers("sprite3", {
        frames: this._idleAnimation
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    this._sprite3.play("idle-c");

    this._sprite3.on("pointerdown", () => {
      if (this._isRunning) {
        this._sprite3.play("idle-c", true);
      } else {
        this._sprite3.play("run-c", true);
      }
      this._isRunning = !this._isRunning;
    });

    this.events.on("shutdown", () => {
      this._sprite3.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
