export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const getRandom = (a, b) => {
 return Math.floor((Math.random() * b) + a);
}
