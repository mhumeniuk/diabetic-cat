import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, cursors }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursors = cursors;
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update () {
   
    this.body.velocity.setTo(0,0)
    if (this.cursors.left.isDown)
    {
       this.body.velocity.x = -800;
        //tweenRotation(this, this.game);
    }
    else if (this.cursors.right.isDown)
    {
        this.body.velocity.x = 800;
        //tweenRotation(this, this.game, true);
    }  
  }
}
