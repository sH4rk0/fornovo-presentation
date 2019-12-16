export default class Slide40 extends Phaser.Scene {
  private _music: Phaser.Sound.BaseSound;

  constructor() {
    super({
      key: "Slide40"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.audio("explosion", [
      "assets/sounds/explosion.ogg",
      "assets/sounds/explosion.m4a"
    ]);
  }

  create(): void {
    console.log(this.scene.key + ":create");

    let graphics = this.add.graphics();
    //square
    graphics.fillStyle(0xff0000, 1);
    graphics.fillRect(0, 0, 256, 256);
    graphics.generateTexture("rect", 256, 256);
    graphics.destroy();

    let _btn = this.add
      .sprite(640, 530, "rect")
      .setScale(1)
      .setDepth(2)
      .setInteractive();

    _btn.on("pointerdown", () => {
      this._music = this.sound.add("explosion");
      this._music.play(undefined, {
        loop: false,
        volume: 0.1
      });
    });

    this.events.on("shutdown", () => {
      if (this._music != undefined && this._music != null) {
        this._music.stop();
        this._music.destroy();
      }
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
