export default class Slide51 extends Phaser.Scene {
  private _logo_: Phaser.GameObjects.Image;
  private _ground_: Phaser.GameObjects.Image;
  private _enemyGroup_: Phaser.GameObjects.Group;
  private _score_: number;
  private _scoreText_: Phaser.GameObjects.Text;
  private _player_: Phaser.GameObjects.Sprite;
  private _isGameStarted_: boolean = false;
  private _enemySpawn_: number;
  private _level_: number;
  private _levelTimer_: Phaser.Time.TimerEvent;

  constructor() {
    super({
      key: "Slide51"
    });
  }

  preload() {
    let graphics = this.make
      .graphics({})
      .fillStyle(0x00ff00)
      .fillRect(0, 0, 1280, 100);
    graphics.generateTexture("ground", 1280, 100);

    graphics = this.make
      .graphics({})
      .fillStyle(0x00ff00)
      .fillRect(0, 0, 52, 70);
    graphics.generateTexture("player", 52, 70);

    graphics = this.make
      .graphics({})
      .fillStyle(0xff6600)
      .fillRect(0, 0, 450, 50);
    graphics.generateTexture("logo", 450, 50);

    graphics = this.make
      .graphics({})
      .fillStyle(0x00ff00)
      .fillRect(0, 0, 33, 31);
    graphics.generateTexture("bomb", 33, 31);

    graphics.destroy();
  }

  create() {
    this._scoreText_ = this.add
      .text(this.game.canvas.width / 2, 300, "0", {
        fontFamily: "Arial",
        fontSize: 200,
        color: "#ffffff",
        stroke: "#333333",
        strokeThickness: 4
      })
      .setDepth(102)
      .setOrigin(0.5)
      .setAlpha(0);

    this._enemyGroup_ = this.add.group();
    this._enemySpawn_ = this.time.now;

    this._ground_ = this.physics.add
      .image(0, 715, "ground")
      .setDepth(10000)
      .setOrigin(0)
      .setAlpha(1)
      .setImmovable(true);

    //@ts-ignore
    this._ground_.body.allowGravity = false;

    this._logo_ = this.add
      .image(this.game.canvas.width / 2, 100, "logo")
      .setOrigin(0.5, 0)
      .setDepth(100)
      .setInteractive();

    this._logo_.on("pointerup", () => {
      this.start();
    });

    this._player_ = this.physics.add
      .sprite(0, 0, "player")
      .setDepth(6)
      .setPosition(100, 600)
      .setOrigin(0.5)
      .setScale(2)
      .setGravityY(1600);

    this.input.on("pointerdown", () => {
      if (!this._isGameStarted_) return;
      //@ts-ignore
      if (this._player_.body.velocity.y == 0)
        //@ts-ignore
        this._player_.body.velocity.y = -600;
    });

    this.physics.add.collider(this._player_, this._ground_);

    this.physics.add.collider(
      this._player_,
      this._enemyGroup_,
      (_bomb: any, _player: any) => {
        _bomb.destroy();
        _player.destroy();
        this.gameOver();
      },
      undefined,
      this
    );

    this.events.on("shutdown", () => {});
  }

  update() {
    if (this._isGameStarted_) {
      this.spawn();
      this._enemyGroup_.getChildren().forEach((bomb: any) => {
        if (bomb.x < 0) {
          bomb.destroy();
          this._scoreText_.setText("" + this._score_++);
        }
      });
    }
  }

  start(): void {
    this._score_ = 0;
    this._scoreText_.setText("" + this._score_++);
    this._logo_.setAlpha(0);
    this._scoreText_.setAlpha(1);
    this._levelTimer_ = this.time.addEvent({
      delay: 5000,
      callback: () => {
        this._level_++;
      },
      callbackScope: this,
      loop: true
    });
    this._level_ = 0;
    this._isGameStarted_ = true;
  }

  spawn(): void {
    if (this._enemySpawn_ < this.time.now) {
      this._enemySpawn_ = this.time.now + (2000 - 100 * this._level_);
      this._enemyGroup_.add(this.addEnemy());
    }
  }

  addEnemy(): Phaser.GameObjects.Sprite {
    let _bomb_: Phaser.GameObjects.Sprite = this.physics.add
      .sprite(1300, 680, "bomb")
      .setDepth(10)
      .setScale(2)
      .setImmovable(true)
      .setCircle(15);
    //@ts-ignore
    _bomb_.body.allowGravity = false;
    //@ts-ignore
    _bomb_.body.velocity.x = Phaser.Math.RND.integerInRange(-620, -580);
    return _bomb_;
  }

  gameOver(): void {
    this._level_ = 0;
    this._isGameStarted_ = false;
    this._levelTimer_.remove(false);
    this.scene.start("Slide51");
  }
}
