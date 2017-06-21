/* globals __DEV__ */
import Phaser from 'phaser'
import Cat from '../sprites/Cat'
import Candy from '../sprites/Candy'
import { getRandom } from '../utils';
import config from '../config'

let sky, cursors;

export default class extends Phaser.State {
  init () {}
  preload () {
    this.game.load.image('sky', '/assets/images/background.png');
    this.game.load.image('cat', '/assets/images/the-hero.png');
    this.game.load.image('candy', '/assets/images/candy.png');
  }

  create () {
    const stepWidth = Math.round(game.width/3);
 
    this.cat = new Cat({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY + 150,
      asset: 'cat',
      stepWidth
    })

    let spawnPoints = [
      stepWidth,
      stepWidth * 2,
      stepWidth * 3 
    ]

    let createCandy = () => {
      let candy = new Candy({
         game: this,
         x: spawnPoints[getRandom(0, 3)],
         y: this.world.centerY - 500,
         asset: 'candy',
         stepWidth
      })
      this.game.add.existing(candy)
      setTimeout(() => {candy.destroy()} ,7000)  
    }

    this.game.add.existing(this.cat)
    this.game.time.advancedTiming = true;

    game.input.onTap.add(this.cat.moveBody, this);
    setInterval(createCandy, 500) 

    sky = this.game.add.tileSprite(0, 0, 768, 1024, 'sky');
  }

  update() {
    sky.tilePosition.y +=30
  }

  render () {
    if (__DEV__) {
      this.game.debug.text(game.time.fps, 2, 14, "#00ff00");
      this.game.debug.spriteInfo(this.cat, 120, 147)
    }
  }
}
