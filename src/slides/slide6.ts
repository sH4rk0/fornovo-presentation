export default class Slide6 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide6"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this.add
      .text(this.game.canvas.width / 2, 600, "Hello World!")
      .setOrigin(0.5);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
