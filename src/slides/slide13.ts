export default class Slide13 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide13"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    this.load.image("sprite", "/assets/images/sprite.png");
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this.add.image(this.game.canvas.width / 2 - 200, 600, "sprite");
    this.add.image(this.game.canvas.width / 2, 600, "sprite").setScale(2);
    this.add.image(this.game.canvas.width / 2 + 200, 600, "sprite").setScale(4);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
