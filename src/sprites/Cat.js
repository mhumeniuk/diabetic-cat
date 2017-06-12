import Phaser from 'phaser'


const VELOCITY = 600;

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, cursors }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursors = cursors;
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }


  update () {
   
    //this.body.velocity.x = 0;
    if (this.cursors.left.isDown)
    {
       this.body.velocity.x = -VELOCITY;
    }
    else if (this.cursors.right.isDown)
    {
       this.body.velocity.x = VELOCITY;
    }

    if (this.x > game.width -70) {
        this.x = game.width - 70;
        this.body.velocity.x = 0;
    }
    if (this.x < 70) {
       this.x = 70;
       this.body.velocity.x -= 0;
    }
  }
}
