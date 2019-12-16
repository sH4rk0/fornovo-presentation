export default class Slide2 extends Phaser.Scene {
  private spriteGroup: Phaser.GameObjects.Group;
  constructor() {
    super({
      key: "Slide2"
    });
  }
  preload() {
    console.log(this.scene.key + ":preload");
  }

  create(): void {
    console.log(this.scene.key + ":create");

    this.add.image(0, 0, "bg2").setOrigin(0);

    this.spriteGroup = this.add.group({ runChildUpdate: true });
    this.spriteGroup.add(
      new PlayerFake(this, 3, 400, Phaser.Math.RND.integerInRange(5, 10))
    );
    this.spriteGroup.add(
      new PlayerFake(this, 0, 430, Phaser.Math.RND.integerInRange(5, 10))
    );
    this.spriteGroup.add(
      new PlayerFake(this, 1, 480, Phaser.Math.RND.integerInRange(5, 10))
    );
    this.spriteGroup.add(
      new PlayerFake(this, 2, 510, Phaser.Math.RND.integerInRange(5, 10))
    );

    this.events.on("shutdown", () => {
      this.spriteGroup.destroy();
    });
  }

  update(): void {
    //console.log(this.scene.key + ":update");
  }
}

export class PlayerFake extends Phaser.GameObjects.Sprite {
  private vel: number;
  private currentScene: Slide2;
  private avatar: number;
  private frames: any = [
    [
      [0, 1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13]
    ],
    [
      [14, 15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27]
    ],
    [
      [28, 29, 30, 31, 32, 33, 34, 35],
      [36, 37, 38, 39]
    ],
    [
      [42, 43, 44, 45, 46, 47, 48, 49],
      [50, 51, 52, 53]
    ]
  ];

  constructor(scene: Slide2, avatar: number, _y: number, vel: number) {
    super(scene, 200, _y, "players");
    this.currentScene = scene;
    this.avatar = avatar;

    this.setScale(2)
      .setOrigin(0.5, 1)
      .setDepth(this.y);

    this.x = Phaser.Math.RND.integerInRange(-200, -300);

    let _animationConfig = {
      key: "run-" + this.avatar,
      frames: this.scene.anims.generateFrameNumbers("players", {
        frames: this.frames[this.avatar][0]
      }),
      frameRate: 20,
      yoyo: false,
      repeat: -1
    };

    this.currentScene.anims.create(_animationConfig);
    this.anims.play("run-" + this.avatar);
    this.vel = vel;
    this.currentScene.add.existing(this);
  }

  update(time: number, delta: number) {
    // console.log("player update 2");
    this.x += this.vel;

    if (this.x > this.currentScene.game.canvas.width + 100) {
      //console.log("destroy");
      //this.destroy();
      this.x = -100;
      this.vel = Phaser.Math.RND.integerInRange(5, 10);
    }
  }
}
