export default class Slide7 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide7"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
