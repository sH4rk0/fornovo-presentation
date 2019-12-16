import "phaser";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import Slide12 from "./slides/slide12";
import Slide13 from "./slides/slide13";
import Slide14 from "./slides/slide14";
import Slide15 from "./slides/slide15";
import Slide16 from "./slides/slide16";
import Slide17 from "./slides/slide17";
import Slide18 from "./slides/slide18";
import Slide19 from "./slides/slide19";
import Slide20 from "./slides/slide20";
import Slide21 from "./slides/slide21";
import Slide22 from "./slides/slide22";
import Slide23 from "./slides/slide23";
import Slide24 from "./slides/slide24";
import Slide25 from "./slides/slide25";
import Slide26 from "./slides/slide26";
import Slide27 from "./slides/slide27";
import Slide28 from "./slides/slide28";
import Slide29 from "./slides/slide29";
import Slide30 from "./slides/slide30";
import Slide31 from "./slides/slide31";
import Slide32 from "./slides/slide32";
import Slide33 from "./slides/slide33";
import Slide34 from "./slides/slide34";
import Slide35 from "./slides/slide35";
import Slide36 from "./slides/slide36";
import Slide37 from "./slides/slide37";
import Slide38 from "./slides/slide38";
import Slide39 from "./slides/slide39";
import Slide40 from "./slides/slide40";
import Slide41 from "./slides/slide41";
import Slide42 from "./slides/slide42";
import Slide43 from "./slides/slide43";
import Slide44 from "./slides/slide44";
import Slide45 from "./slides/slide45";
import Slide46 from "./slides/slide46";
import Slide47 from "./slides/slide47";
import Slide48 from "./slides/slide48";
import Slide49 from "./slides/slide49";
import Slide50 from "./slides/slide50";
import Slide51 from "./slides/slide51";
import Slide52 from "./slides/slide52";
import Slide53 from "./slides/slide53";
import Slide54 from "./slides/slide54";
import Slide55 from "./slides/slide55";
import { GameData } from "./GameData";

export let swEnabled: boolean = false;
export let deferredPrompt: any;
export let modalPrompt: HTMLElement | null;
export function offlinePrompt() {
  deferredPrompt.prompt();
}

export let _textClass: Array<string> = ["normal", "medium", "big"];
export let _slidesContainer: HTMLElement | null;
export let _slides: HTMLElement | null;
export let _codeContainer: HTMLElement | null;
export let _code: HTMLElement | null;
export let _html: HTMLElement | null;
export let _presentationMenu: HTMLElement | null;
export let _game: Phaser.Game;
export let _timer: HTMLElement | null;
export let _currentIndex: number;
export let _slidesBtn: HTMLElement | null;
export let _nextBtn: HTMLElement | null;
export let _prevBtn: HTMLElement | null;
export let _codeBtn: HTMLElement | null;
export let _textBtn: HTMLElement | null;
export let _fontSize: number = 0;

export let _fullscreenBtn: HTMLElement;

export function isMobile(game: Phaser.Game): boolean {
  if (
    game.device.input.touch &&
    (game.device.os.iOS ||
      game.device.os.android ||
      game.device.os.windowsPhone)
  ) {
    return true;
  } else {
    return false;
  }
}

export function loadCode(_file: string) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = e => {
    if (xhr.readyState == 4) {
      if (_code != null) _code.innerHTML = xhr.responseText;
      //@ts-ignore
      hljs.highlightBlock(_code);
    }
  };
  let _path: string = _file;
  xhr.open("GET", _path, true);
  xhr.setRequestHeader("Content-type", "text/html");
  xhr.send();
}

export function loadHtml(_file: string) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = e => {
    if (xhr.readyState == 4) {
      if (_html != null) _html.innerHTML = xhr.responseText;
    }
  };
  let _path: string = _file;
  xhr.open("GET", _path, true);
  xhr.setRequestHeader("Content-type", "text/html");
  xhr.send();
}

export function setCurrentIndex(_scene: string): void {
  let _index = 0;

  GameData.slides.forEach((element: any) => {
    if (element.state === _scene) {
      _currentIndex = _index;
    }
    _index++;
  });
}

export function setResize(): void {
  if (_slidesContainer != null && _codeContainer != null) {
    // _slidesContainer.style.height = window.innerHeight + "px";
    // _slidesContainer.style.width = window.innerWidth + "px";
    // _codeContainer.style.height = window.innerHeight + "px";
  }

  //_codeContainer.style.width = window.innerWidth + "px";
}

export function goState(_state: string, _game: Phaser.Game): void {
  setUpSlide(_state);

  //console.log(_state);
  _game.scene.scenes.forEach((element: Phaser.Scene) => {
    //console.log(element.scene.key, _game.scene.isActive(element.scene.key));
    if (_game.scene.isActive(element.scene.key))
      _game.scene.stop(element.scene.key);
    //_game.scene.sleep()
  });

  _game.scene.start(_state).bringToTop(_state);
}

export function setUpSlide(_state: string) {
  let _obj: {
    title: string;
    state: string;
    preview: string;
    code: string;
    html: string;
  } = GameData.slides[_currentIndex];

  if (_html != null) _html.innerHTML = "";
  if (_code != null) _code.innerHTML = "";

  if (_obj.html != null) loadHtml(_obj.html);
  if (_obj.code != null && _codeBtn != null) {
    loadCode(_obj.code);
    _codeBtn.className = "menuBtn";
  } else {
    if (_codeBtn != null) _codeBtn.className = "menuBtn disabled";
  }

  if (_currentIndex + 1 >= GameData.slides.length) {
    if (_nextBtn != null) _nextBtn.className = "menuBtn disabled";
  } else {
    if (_nextBtn != null) _nextBtn.className = "menuBtn";
  }

  if (_currentIndex - 1 == -1) {
    if (_prevBtn != null) _prevBtn.className = "menuBtn disabled";
  } else {
    if (_prevBtn != null) _prevBtn.className = "menuBtn";
  }
}

const WebFontConfig = {
  active: () => {},
  google: {
    families: ["Press Start 2P"]
  }
};
const DEFAULT_WIDTH: number = 1280;
const DEFAULT_HEIGHT: number = 720;

export class initPresentation {
  constructor(width?: number, height?: number) {
    _currentIndex = 0;
    const config: any = {
      type: Phaser.WEBGL,
      parent: "my-game",
      transparent: true,
      input: {
        activePointers: 1,
        keyboard: true
      },
      scale: {
        mode: Phaser.Scale.FIT,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      },
      scene: [
        Boot,
        Preloader,
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
        Slide10,
        Slide11,
        Slide12,
        Slide13,
        Slide14,
        Slide15,
        Slide16,
        Slide17,
        Slide18,
        Slide19,
        Slide20,
        Slide21,
        Slide22,
        Slide23,
        Slide24,
        Slide25,
        Slide26,
        Slide27,
        Slide28,
        Slide29,
        Slide30,
        Slide31,
        Slide32,
        Slide33,
        Slide34,
        Slide35,
        Slide36,
        Slide37,
        Slide38,
        Slide39,
        Slide40,
        Slide41,
        Slide42,
        Slide43,
        Slide44,
        Slide45,
        Slide46,
        Slide47,
        Slide48,
        Slide49,
        Slide50,
        Slide51,
        Slide52,
        Slide53,
        Slide54,
        Slide55
      ],
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
          gravity: { y: 1 }
        }
      }
      // render: { pixelArt: true, antialias: false }
    };

    _game = new Phaser.Game(config);

    _presentationMenu = document.getElementById("presentationMenu");
    _slidesContainer = document.getElementById("slidesContainer");
    _codeContainer = document.getElementById("codeContainer");
    _slides = document.getElementById("slides");
    _code = document.getElementById("code");
    _html = document.getElementById("my-html");

    let mString: string;
    let mElement: HTMLElement;
    GameData.slides.forEach((element: any) => {
      mElement = document.createElement("div");
      mElement.id = element.state;
      mElement.className = "mSlide";
      mElement.innerHTML =
        "<div style='background-image:url();' class='mImage'></div><div class='mTitle'>" +
        element.title +
        "</div></div>";

      mElement.addEventListener("click", () => {
        if (_slidesContainer != null) _slidesContainer.className = "hide";
        setCurrentIndex(element.state);
        goState(element.state, _game);
      });

      if (_slides != null) _slides.appendChild(mElement);
    });

    _slidesBtn = document.createElement("div");
    _slidesBtn.id = "slidesBtn";
    _slidesBtn.className = "menuBtn";
    _slidesBtn.addEventListener("click", () => this.toggleSlides());
    if (_presentationMenu != null) _presentationMenu.appendChild(_slidesBtn);

    _prevBtn = document.createElement("div");
    _prevBtn.id = "prevBtn";
    _prevBtn.className = "menuBtn disabled";
    _prevBtn.addEventListener("click", () => this.prevState());
    if (_presentationMenu != null) _presentationMenu.appendChild(_prevBtn);

    _nextBtn = document.createElement("div");
    _nextBtn.id = "nextBtn";
    _nextBtn.className = "menuBtn disabled";
    _nextBtn.addEventListener("click", () => this.nextState());
    if (_presentationMenu != null) _presentationMenu.appendChild(_nextBtn);

    _codeBtn = document.createElement("div");
    _codeBtn.id = "codeBtn";
    _codeBtn.className = "menuBtn disabled";
    _codeBtn.addEventListener("click", () => this.toggleCode());
    if (_presentationMenu != null) _presentationMenu.appendChild(_codeBtn);

    _textBtn = document.createElement("div");
    _textBtn.id = "textBtn";
    _textBtn.className = "menuBtn hide";
    _textBtn.addEventListener("click", () => this.toggleFontSize());
    if (_presentationMenu != null) _presentationMenu.appendChild(_textBtn);

    _fullscreenBtn = document.createElement("div");
    _fullscreenBtn.id = "fullscreenBtn";
    _fullscreenBtn.className = "menuBtn";
    _fullscreenBtn.addEventListener("click", () => this.toggleFullScreen());
    if (_presentationMenu != null)
      _presentationMenu.appendChild(_fullscreenBtn);

    _timer = document.createElement("div");
    _timer.id = "myTimer";
    if (_presentationMenu != null)
      _presentationMenu.appendChild(_fullscreenBtn);

    window.onkeyup = (e: any) => {
      let key = e.keyCode ? e.keyCode : e.which;

      if (key == 39) {
        this.nextState();
      } else if (key == 37) {
        this.prevState();
      }
    };

    setResize();
  }

  toggleSlides(): void {
    this.hideCode();
    if (_slidesContainer != null) {
      if (_slidesContainer.className === "") {
        this.hideThumbs();
      } else {
        _slidesContainer.className = "";
      }
    }
  }

  hideThumbs(): void {
    if (_slidesContainer != null) _slidesContainer.className = "hide";
  }

  toggleCode(): void {
    if (_codeContainer != null && _codeContainer.className === "") {
      this.hideCode();
    } else {
      if (_codeContainer != null) _codeContainer.className = "";
      if (_textBtn != null) _textBtn.className = "menuBtn";
    }
  }

  hideCode(): void {
    if (_codeContainer != null) _codeContainer.className = "hide";
    if (_textBtn != null) _textBtn.className = "menuBtn hide";
  }

  toggleFontSize(): void {
    _fontSize++;
    if (_fontSize == 3) _fontSize = 0;

    if (_code != null && _textClass != null)
      _code.className = "typescript " + _textClass[_fontSize] + " hljs";
  }

  toggleFullScreen(): void {
    //console.log("toggleFullScreen");
    if (
      //@ts-ignore
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      //@ts-ignore
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      this.setFullscreen();
    } else {
      this.removeFullscreen();
    }
  }

  /*toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  */

  setFullscreen(): void {
    console.log("setFullscreen");
    _fullscreenBtn.className = "menuBtn active";
    //@ts-ignore
    if (document.documentElement.requestFullScreen) {
      //@ts-ignore
      document.documentElement.requestFullScreen();
      //@ts-ignore
    } else if (document.documentElement.mozRequestFullScreen) {
      //@ts-ignore
      document.documentElement.mozRequestFullScreen();
      //@ts-ignore
    } else if (document.documentElement.webkitRequestFullScreen) {
      //@ts-ignore
      document.documentElement.webkitRequestFullScreen(
        //@ts-ignore
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  }

  removeFullscreen(): void {
    console.log("removeFullscreen");
    _fullscreenBtn.className = "menuBtn";
    //@ts-ignore
    if (document.cancelFullScreen) {
      //@ts-ignore
      document.cancelFullScreen();
      //@ts-ignore
    } else if (document.mozCancelFullScreen) {
      //@ts-ignore
      document.mozCancelFullScreen();
      //@ts-ignore
    } else if (document.webkitCancelFullScreen) {
      //@ts-ignore
      document.webkitCancelFullScreen();
    }
  }

  prevState(): void {
    if (_currentIndex == 0) return;
    this.hideCode();
    this.hideThumbs();
    let lastState = _currentIndex;
    _currentIndex--;
    if (_currentIndex < 0) _currentIndex = 0;
    goState(GameData.slides[_currentIndex].state, _game);
  }

  nextState(): void {
    if (_currentIndex == GameData.slides.length - 1) return;
    this.hideCode();
    this.hideThumbs();
    let lastState = _currentIndex;
    _currentIndex++;
    if (_currentIndex >= GameData.slides.length)
      _currentIndex = GameData.slides.length - 1;
    goState(GameData.slides[_currentIndex].state, _game);
  }

  /*resize() {
    var canvas = document.querySelector("canvas");
    if (canvas != null) {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var windowRatio = windowWidth / windowHeight;
      var gameRatio = core._config.width / core._config.height;
      if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = windowWidth / gameRatio + "px";
      } else {
        canvas.style.width = windowHeight * gameRatio + "px";
        canvas.style.height = windowHeight + "px";
      }
    }
  }*/
}

window.addEventListener("load", () => {
  console.log("load");
  new initPresentation(1280, 720);
  /*
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/"
      })
      .then(
        function(registration) {
         
        },
        function(err) {
         
        }
      );

    window.addEventListener("beforeinstallprompt", (e: Event) => {
     
      e.preventDefault();
      deferredPrompt = e;
      swEnabled = true;
    });

    modalPrompt = document.getElementById("pwaModal");
    let span = document.getElementsByClassName("close")[0];
    window.onclick = (event: Event) => {
      if (event.target == modalPrompt && modalPrompt != null) {
        modalPrompt.style.display = "none";
      }
    };
    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", () => {
      if (modalPrompt != null) modalPrompt.style.display = "none";
    });
  }
  */
});
