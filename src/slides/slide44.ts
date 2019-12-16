export default class Slide44 extends Phaser.Scene {
  private _timer: Phaser.Time.TimerEvent;
  private _textLevel: Phaser.GameObjects.Text;
  private _text: Phaser.GameObjects.Text;
  private _level: number;
  private _spawn: number;
  private _enemy: number;

  constructor() {
    super({
      key: "Slide44"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    this._spawn = this.time.now;
    this._enemy = 0;
    this._level = 0;
    this._textLevel = this.add
      .text(this.game.canvas.width / 2, 250, "livello:0")
      .setOrigin(0.5)
      .setFontSize(50)
      .setColor("#ff0000");

    this._text = this.add
      .text(this.game.canvas.width / 2, 350, "enemy:0")
      .setOrigin(0.5)
      .setFontSize(40)
      .setColor("#00ff00");

    this._timer = this.time.addEvent({
      delay: 2000,
      callback: this.incrementaLivello,
      callbackScope: this,
      loop: true
    });
    console.log(this.scene.key + ":create");
  }

  incrementaLivello(): void {
    this._level++;
    this._textLevel.setText("livello:" + this._level);
  }

  controllaSpawn(): void {
    if (this._spawn < this.time.now) {
      this._enemy++;
      this._spawn = this.time.now + (2000 - 100 * this._level);
      this._text.setText("nuovo nemico: " + this._enemy);
    }
  }

  update(): void {
    this.controllaSpawn();
    //console.log(this.scene.key + ":update");
  }
}
