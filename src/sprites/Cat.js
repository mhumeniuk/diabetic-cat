import Phaser from 'phaser'

const RIGHT = 0;
const LEFT = 1;

let that;

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, cursors, stepWidth }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursors = cursors;
    this.stepWidth = stepWidth;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    that = this;
    this.scale.setTo(0.9, 0.9);
  }

  moveBody(pointer) {
    if (Math.floor(pointer.x/(that.game.game.width/2)) === LEFT) {
        that.position.x += that.stepWidth; 
    }    
    else if (Math.floor(pointer.x/(that.game.game.width/2)) === RIGHT) { 
        that.position.x += -that.stepWidth; 
    }
  }

  update () {
    if (this.x > game.width - this.width ) {
        this.position.x = (game.width - this.width);
        this.body.acceleration.x = 0;
        this.body.velocity.x = 0;
    }
    if (this.x < this.width) {
       this.position.x = this.width;
       this.body.acceleration.x = 0;
       this.body.velocity.x = 0;
    }
  }
}
