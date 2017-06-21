import Phaser from 'phaser'
import {getRandom} from '../utils.js'


export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.8)
    this.scale.setTo(1.5)
    this.x -= this.width;
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  create() {
    
  }

  update () {
     this.body.velocity.setTo(0, 400)
    //TODO: collision detection here      
  }
}
