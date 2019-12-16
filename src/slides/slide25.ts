export default class Slide25 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide25"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
    let graphics = this.add.graphics();

    //circle
    graphics.fillStyle(0xffff00, 1);
    graphics.fillCircle(600, 530, 120);

    graphics.fillStyle(0x000000, 1);
    graphics.fillCircle(550, 500, 20);

    graphics.fillStyle(0x000000, 1);
    graphics.fillCircle(650, 500, 20);

    //arc
    graphics.lineStyle(4, 0x000000, 1);
    //  Without this the arc will appear closed when stroked
    graphics.beginPath();
    // arc (x, y, radius, startAngle, endAngle, anticlockwise)
    graphics.arc(
      600,
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
