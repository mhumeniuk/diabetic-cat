/* globals __DEV__ */
import Phaser from 'phaser'
import Cat from '../sprites/Cat'
let sky, cursors;
export default class extends Phaser.State {
  init () {}
  preload () {
    this.game.load.image('sky', '/assets/images/background.png');
    this.game.load.image('cat', '/assets/images/the-hero.png');
     cursors = game.input.keyboard.createCursorKeys();
  }

  create () {
    this.game.time.advancedTiming = true;
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    sky = this.game.add.tileSprite(0, 0, 768, 1024, 'sky');
    this.cat = new Cat({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY + 50,
      asset: 'cat',
      cursors
    })

    this.game.add.existing(this.cat)
    this.cat.scale.setTo(0.8,0.8);
  }

  update() {
    sky.tilePosition.y += 8
  }

  render () {
    if (__DEV__) {
      this.game.debug.text(game.time.fps, 2, 14, "#00ff00");
      this.game.debug.spriteInfo(this.cat, 120, 147)
    }
  }
}
