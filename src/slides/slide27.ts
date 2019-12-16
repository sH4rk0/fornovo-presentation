export default class Slide27 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide27"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    let _style = {
      fontFamily: "Arial",
      fontSize: 64,
      color: "#ff0000",
      stroke: "#ffffff",
      strokeThickness: 4
    };
    this.add
      .text(this.game.canvas.width / 2, 400, "Hello World!", _style)
      .setOrigin(0.5);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
