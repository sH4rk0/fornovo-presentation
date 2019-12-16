export default class Slide24 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide24"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    let graphics = this.add.graphics();
    //arc
    graphics.lineStyle(4, 0xff00ff, 1);
    //  Without this the arc will appear closed when stroked
    graphics.beginPath();
    // arc (x, y, radius, startAngle, endAngle, anticlockwise)
    graphics.arc(
      400,
      500,
      100,
      Phaser.Math.DegToRad(90 - 45),
      Phaser.Math.DegToRad(90 + 45),
      false
    );
    graphics.strokePath();

    this.events.on("shutdown", () => {
      graphics.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
