import Phaser from 'phaser'
import {getRandom} from '../utils.js'


export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  create() {
    
  }

  update () {
     this.body.velocity.setTo(0, 700)
    //TODO: collision detection here      
  }
}
