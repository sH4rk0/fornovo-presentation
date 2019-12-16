export default class Slide32 extends Phaser.Scene {
  private _sprite: Phaser.GameObjects.Sprite;
  constructor() {
    super({
      key: "Slide32"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.image("sprite", "/assets/images/sprite.png");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._sprite = this.add.sprite(0, 500, "sprite").setScale(2);

    this.tweens.add({
      targets: this._sprite,
      x: 600,
      ease: "Linear",
      duration: 3000,
      delay: 2000,
      yoyo: true,
      repeat: 2
    });

    this.events.on("shutdown", () => {
      this._sprite.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
