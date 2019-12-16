export default class Slide46 extends Phaser.Scene {
  constructor() {
    super({
      key: "Slide46"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this.time.addEvent({
      delay: 2000,
      callback: () => {
        alert(this.miafunzione());
        alert(this.miafunzione2());
      },
      callbackScope: this
    });
  }

  miafunzione(): void {
    let _numero = 3 + 4;
  }

  miafunzione2(): number {
    return 3 * 2;
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
