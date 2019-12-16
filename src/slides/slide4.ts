export default class Slide4 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide4"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    //this.cameras.main.setBackgroundColor("#ff0000");

    console.log(this.scene.key + ":create");
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
