export default class Slide15 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide15"
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
      .image(this.game.canvas.width / 2 - 10 - 200, 600, "sprite")
      .setScale(2);

    this.add
      .image(this.game.canvas.width / 2 + 10 - 200, 600, "sprite")
      .setScale(2);

    this.add
      .image(this.game.canvas.width / 2 - 10 + 200, 600, "sprite")
      .setScale(2)
      .setDepth(2);
    this.add
      .image(this.game.canvas.width / 2 + 10 + 200, 600, "sprite")
      .setScale(2)
      .setDepth(1);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
