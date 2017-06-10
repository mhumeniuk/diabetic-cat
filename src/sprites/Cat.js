import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, cursor }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursor = cursor;
  }

  update () {
    this.angle += 50

  }
}
