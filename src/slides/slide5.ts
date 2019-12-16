export default class Slide5 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide5"
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
