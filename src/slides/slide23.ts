export default class Slide23 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide23"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    let graphics = this.add.graphics();
    //square
    graphics.fillStyle(0xff0000, 0.8);
    graphics.fillRect(100, 400, 256, 256);
    //circle
    graphics.fillStyle(0xff0000, 0.8);
    graphics.fillCircle(600, 530, 120);

    this.events.on("shutdown", () => {
      graphics.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
