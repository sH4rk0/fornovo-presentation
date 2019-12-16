export default class Slide52 extends Phaser.Scene {
  private __logo: Phaser.GameObjects.Image;
  private __ground: Phaser.GameObjects.Image;
  private __bg1: Phaser.GameObjects.Image;
  private __bg2: Phaser.GameObjects.TileSprite;
  private __bg3: Phaser.GameObjects.TileSprite;
  private __bg4: Phaser.GameObjects.TileSprite;
  private __bg5: Phaser.GameObjects.TileSprite;
  private __bg6: Phaser.GameObjects.TileSprite;
  private __bg7: Phaser.GameObjects.TileSprite;
  private __start: Phaser.GameObjects.Image;
  private __enemyGroup: Phaser.GameObjects.Group;
  private __score: number;
  private __scoreText: Phaser.GameObjects.Text;
  private __music: Phaser.Sound.BaseSound;

  private __player: Phaser.GameObjects.Sprite;
  private __playerFrames: Array<Array<Array<number>>> = [
    [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13], [3]],
    [[14, 15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27], [17]],
    [[28, 29, 30, 31, 32, 33, 34, 35], [36, 37, 38, 39], [31]],
    [[42, 43, 44, 45, 46, 47, 48, 49], [50, 51, 52, 53], [45]]
  ];
  private __currentPlayer: number = 0;
  private __isGameStarted: boolean = false;
  private __enemySpawn: number;
  private __level: number;
  private __levelTimer: Phaser.Time.TimerEvent;

  constructor() {
    super({
      key: "Slide52"
    });
  }

  preload() {
    this.load.image("logo__", "assets/images/logo.png");
    let _bg: string = "1";

    this.load.image("bg1__", "assets/images/backgrounds/" + _bg + "/1.png");
    this.load.image("bg2__", "assets/images/backgrounds/" + _bg + "/2.png");
    this.load.image("bg3__", "assets/images/backgrounds/" + _bg + "/3.png");
    this.load.image("bg4__", "assets/images/backgrounds/" + _bg + "/4.png");
    this.load.image("bg5__", "assets/images/backgrounds/" + _bg + "/5.png");
    this.load.image("bg6__", "assets/images/backgrounds/" + _bg + "/6.png");
    this.load.image("bg7__", "assets/images/backgrounds/" + _bg + "/7.png");

    this.load.spritesheet("player__", "assets/images/players/players.png", {
      frameWidth: 52,
      frameHeight: 70,
      endFrame: 84
    });
    this.load.spritesheet("explosion__", "assets/images/explosion.png", {
      frameWidth: 80,
      frameHeight: 80,
      endFrame: 28
    });

    this.load.spritesheet("bomb__", "assets/images/bomb.png", {
      frameWidth: 33,
      frameHeight: 31,
      endFrame: 6
    });

    this.load.audio("explosion__", [
      "assets/sounds/explosion.ogg",
      "assets/sounds/explosion.m4a"
    ]);
    this.load.audio("intro__", [
      "assets/sounds/intro.ogg",
      "assets/sounds/intro.m4a"
    ]);

    this.load.audio("score__", ["assets/sounds/score.ogg"]);
  }

  create() {
    this.__music = this.sound.add("intro__");
    this.__music.play(undefined, {
      loop: true,
      volume: 0.1
    });
    this.__scoreText = this.add
      .text(this.game.canvas.width / 2, 300, "0", {
        fontFamily: "Arial",
        fontSize: 200,
        color: "#ffffff",
        stroke: "#333333",
        strokeThickness: 5
      })
      .setDepth(102)
      .setOrigin(0.5)
      .setAlpha(0);
    this.__enemyGroup = this.add.group();
    this.__enemySpawn = this.time.now;

    let graphics = this.make

      .graphics({})
      .fillStyle(0x00ff00)
      .fillRect(0, 0, 1280, 100);

    graphics.generateTexture("ground__", 1280, 100);

    graphics.destroy();

    this.__ground = this.physics.add
      .image(0, 715, "ground__")
      .setDepth(10000)
      .setOrigin(0)
      .setAlpha(0);

    //@ts-ignore
    this.__ground.setImmovable(true);
    //@ts-ignore
    this.__ground.body.allowGravity = false;

    this.__logo = this.add
      .image(this.game.canvas.width / 2, 0, "logo__")
      .setScale(0.5)
      .setOrigin(0.5, 0)
      .setDepth(100)
      .setInteractive();
    this.__logo.on("pointerup", () => {
      this.start();
    });

    this.__bg1 = this.add
      .image(0, 0, "bg1__")
      .setOrigin(0)
      .setDepth(1);

    this.__bg2 = this.add
      .tileSprite(0, 0, 1280, 800, "bg2__")
      .setOrigin(0)
      .setAlpha(0.5)
      .setDepth(3);

    this.__bg3 = this.add
      .tileSprite(0, 0, 1280, 800, "bg3__")
      .setOrigin(0)
      .setDepth(2);

    this.__bg4 = this.add
      .tileSprite(0, 0, 1280, 800, "bg4__")
      .setOrigin(0)
      .setDepth(2);

    this.__bg5 = this.add
      .tileSprite(0, 0, 1280, 800, "bg5__")
      .setOrigin(0)
      .setDepth(2);

    this.__bg6 = this.add
      .tileSprite(0, -100, 1280, 800, "bg6__")
      .setOrigin(0)
      .setDepth(4);

    this.__bg7 = this.add
      .tileSprite(0, -250, 1280, 1080, "bg7__")
      .setOrigin(0)
      .setDepth(5);

    this.__player = this.physics.add
      .sprite(0, 0, "player__")
      .setDepth(6)
      .setPosition(100, 600)
      .setOrigin(0.5)
      .setScale(2)
      .setGravityY(1600);

    let _animation = {
      key: "run__",
      frames: this.anims.generateFrameNumbers("player__", {
        frames: this.__playerFrames[this.__currentPlayer][0]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    _animation = {
      key: "idle__",
      frames: this.anims.generateFrameNumbers("player__", {
        frames: this.__playerFrames[this.__currentPlayer][1]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    _animation = {
      key: "bomb-rotation__",
      frames: this.anims.generateFrameNumbers("bomb__", {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 10,
      yoyo: false,
      repeat: -1
    };

    this.anims.create(_animation);

    _animation = {
      key: "explosion__",
      frames: this.anims.generateFrameNumbers("explosion__", {
        frames: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27
        ]
      }),
      frameRate: 20,
      yoyo: false,
      repeat: 0
    };

    this.anims.create(_animation);

    _animation = {
      key: "jump__",
      frames: this.anims.generateFrameNumbers("player__", {
        frames: this.__playerFrames[this.__currentPlayer][2]
      }),
      frameRate: 0,
      yoyo: false,
      repeat: 0
    };

    this.anims.create(_animation);

    this.__player.anims.play("idle__");

    this.input.on("pointerdown", () => {
      if (!this.__isGameStarted) return;
      this.__player.play("jump__");
      //@ts-ignore
      if (this.__player.body.velocity.y == 0)
        //@ts-ignore
        this.__player.body.velocity.y = -600;
    });

    this.physics.add.collider(this.__player, this.__ground);
    this.physics.add.collider(
      this.__player,
      this.__enemyGroup,
      (_bomb: any, _player: any) => {
        _bomb.destroy();
        _player.destroy();
        this.gameOver();
      },
      undefined,
      this
    );
    this.events.on("shutdown", () => {
      if (this.__music != undefined && this.__music != null) {
        this.__music.stop();
        this.__music.destroy();
      }
    });
  }

  update() {
    if (this.__isGameStarted) {
      this.__bg2.tilePositionX += 0.2;
      this.__bg3.tilePositionX += 0.05;
      this.__bg4.tilePositionX += 0.1;
      this.__bg5.tilePositionX += 0.3;
      this.__bg6.tilePositionX += 0.5;
      this.__bg7.tilePositionX += 5;

      this.spawn();

      this.__enemyGroup.getChildren().forEach((bomb: any) => {
        if (bomb.x < 0) {
          bomb.destroy();
          this.__scoreText.setText("" + this.__score++);
          let _score: Phaser.Sound.BaseSound = this.sound.add("score__");
          _score.play(undefined, { volume: 0.05 });
        }
      });

      //@ts-ignore
      if (this.__player.body.velocity.y == 0) this.__player.play("run__", true);
    } else {
      this.__bg2.tilePositionX += 0.2;
    }
  }

  start(): void {
    this.__score = 0;
    this.__scoreText.setText("" + this.__score++);
    this.__logo.setAlpha(0);
    this.__scoreText.setAlpha(1);
    this.__levelTimer = this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.__level++;
      },
      callbackScope: this,
      loop: true
    });
    this.__level = 0;
    this.__player.play("run__");
    this.__isGameStarted = true;
  }

  spawn(): void {
    if (this.__enemySpawn < this.time.now) {
      this.__enemySpawn = this.time.now + (2000 - 100 * this.__level);
      this.__enemyGroup.add(this.addEnemy());
    }
  }

  addEnemy(): Phaser.GameObjects.Sprite {
    let __bomb: Phaser.GameObjects.Sprite = this.physics.add
      .sprite(1300, 680, "bomb__")
      .setDepth(10)
      .setScale(2)
      .setImmovable(true)
      .setCircle(15);
    //@ts-ignore
    __bomb.body.allowGravity = false;
    __bomb.play("bomb-rotation__");
    //@ts-ignore
    __bomb.body.velocity.x = Phaser.Math.RND.integerInRange(-620, -580);
    return __bomb;
  }

  gameOver(): void {
    //this.__music.destroy();
    this.__level = 0;
    this.__isGameStarted = false;
    this.__levelTimer.remove(false);
    let explosionSound: Phaser.Sound.BaseSound = this.sound.add("explosion__");
    explosionSound.play();

    let explosion: Phaser.GameObjects.Sprite = this.add
      .sprite(100, 680, "explosion__")
      .setDepth(101)
      .setScale(2);

    explosion.on(
      "animationcomplete",
      () => {
        this.scene.start("Slide52");
      },
      this
    );
    explosion.play("explosion__");
  }
}
