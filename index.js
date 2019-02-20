const input = `
  5 3
  1 1 E
  RFRFRFRF
  3 2 N
  FRRFLLFFRRFLL
  0 3 W
  LLFFFLFLFL
`

//create a moveset which can easily expanded
const moveSet = {
  R: console.log('TURN RIGHT'),
  L: console.log('TURN LEFT'),
  F: console.log('MOVE FORWARDS')
}

const stringToArray = (string, seperator) => string.split(seperator);

const rover = (position, path) => ({
  position: [position[0], position[1]],
  orientation: position[2],
  lost: false,
  path: stringToArray(path, ''),
  sniff: () => console.log('SNIFF!')
});

function mission(input) {
  const grid = stringToArray('5 3 E', ' ');
  const position = stringToArray('1 1 E', ' ');
  const spirit = rover(position, 'RFRFRFRF');
  navigatePath(spirit);
}

function navigatePath(robot) {
  for (var i = 0; i < robot.path.length; i++) {
    console.log(robot.path[i]);
  }
}

mission(input);