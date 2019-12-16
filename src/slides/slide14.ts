export default class Slide14 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide14"
    });
    //console.log(this.scene.key + ":constructor");
  }
  preload() {
    this.load.image("sprite", "/assets/images/sprite.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this.add
      .image(this.game.canvas.width / 2 - 200, 600, "sprite")
      .setScale(2)
      .setAlpha(0.1);
    this.add
      .image(this.game.canvas.width / 2, 600, "sprite")
      .setScale(2)
      .setAlpha(0.5);
    this.add
      .image(this.game.canvas.width / 2 + 200, 600, "sprite")
      .setScale(2)
      .setAlpha(1);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
