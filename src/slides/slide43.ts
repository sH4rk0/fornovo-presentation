export default class Slide43 extends Phaser.Scene {
  private _timer: Phaser.Time.TimerEvent;
  private _text: Phaser.GameObjects.Text;
  private _level: number;

  constructor() {
    super({
      key: "Slide43"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    this._level = 0;
    this._text = this.add
      .text(this.game.canvas.width / 2, 500, "livello:0")
      .setOrigin(0.5);

    this._timer = this.time.addEvent({
      delay: 2000,
      callback: this.miaFunzione,
      callbackScope: this,
      loop: true
    });
    console.log(this.scene.key + ":create");
  }

  miaFunzione(): void {
    this._level++;

    this._text
      .setText("livello:" + this._level)
      .setColor("#00ff00")
      .setFontSize(40);
    if (this._level == 5) {
      this._timer.destroy();
    }
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
