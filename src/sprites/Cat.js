import Phaser from 'phaser'

const getRandom = (a, b) => {
 return Math.floor((Math.random() * b) + a);
}

function tweenRotation(object, game, plus) {    
  var randomDelay = getRandom(1, 5000);    var amountRotation = plus ? 10 : -10;    
  object.angle = amountRotation;      
  var move = game.add.tween(object).to({angle: amountRotation}, 2000, Phaser.Easing.Quadratic.InOut, true,0, -1, true);   }



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
       this.body.velocity.x = -500;
        tweenRotation(this, this.game);
    }
    else if (this.cursors.right.isDown)
    {
        this.body.velocity.x = 500;
        tweenRotation(this, this.game, true);
    }  
  }
}
