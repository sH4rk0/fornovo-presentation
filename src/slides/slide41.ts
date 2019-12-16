export default class Slide41 extends Phaser.Scene {
  private _text: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "Slide41"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    this._text = this.add.text(0, 0, "");
    console.log(this.scene.key + ":create");
  }

  update(): void {
    this._text.setText(" " + this.time.now);
    //console.log(this.scene.key + ":update");
  }
}
