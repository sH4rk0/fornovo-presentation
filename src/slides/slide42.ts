export default class Slide42 extends Phaser.Scene {
  private _timer: Phaser.Time.TimerEvent;
  private _text: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "Slide42"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    this._text = this.add
      .text(this.game.canvas.width / 2, 500, "ATTENDO")
      .setOrigin(0.5);

    this._timer = this.time.addEvent({
      delay: 2000,
      callback: this.miaFunzione,
      callbackScope: this
    });
    console.log(this.scene.key + ":create");
  }

  miaFunzione(): void {
    this._text
      .setText("EVENTO COMPLETATO")
      .setColor("#00ff00")
      .setFontSize(40);
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
