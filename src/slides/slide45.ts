export default class Slide45 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide45"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    let mioarr: Array<number | string> = [0, 1, 2];
    console.log(this.scene.key + ":create");
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
