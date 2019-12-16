export default class Slide39 extends Phaser.Scene {
  private _music: Phaser.Sound.BaseSound;

  constructor() {
    super({
      key: "Slide39"
    });
    //console.log(this.scene.key + ":constructor");
  }

  preload() {
    console.log(this.scene.key + ":preload");
    this.load.audio("intro", [
      "assets/sounds/intro.ogg",
      "assets/sounds/intro.m4a"
    ]);
  }

  create(): void {
    console.log(this.scene.key + ":create");
    this._music = this.sound.add("intro");
    this._music.play(undefined, {
      loop: true,
      volume: 0.1
    });
    this.events.on("shutdown", () => {
      this._music.stop();
      this._music.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}
