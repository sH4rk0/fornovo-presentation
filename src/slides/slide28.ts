export default class Slide28 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide28"
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
