var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

var ghostName = 'clyde';
console.log(ghosts[ghostName]); // => 'Orange'
