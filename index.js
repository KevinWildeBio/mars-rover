const input = `
  5 3
  1 1 E
  RFRFRFRF
  3 2 N
  FRRFLLFFRRFLL
  0 3 W
  LLFFFLFLFL
`

const smellList = [];
const compassArray = ['N', 'E', 'S', 'W'];
let grid;


const stringToArray = (string, seperator) => string.split(seperator);

const rover = (position, path) => ({
  xLoc: parseInt(position[0], 10),
  yLoc: parseInt(position[1], 10),
  orientation: position[2],
  lost: false,
  path: stringToArray(path, ''),
  sniff: position => smellList.includes(position)
});

function setupMission(input) {
  grid = stringToArray('5 3 E', ' ');
  const position = stringToArray('1 1 E', ' ');
  const spirit = rover(position, 'RFRFRFRF');
  beginMission(spirit);
}

function beginMission(robot) {
  for (var i = 0; i < robot.path.length; i++) {
    if (robot.lost) break;
    console.log(robot.sniff('SMELL: ', robot.position));
    if (robot.path[i] === 'R') {
      let currentIndex = compassArray.indexOf(robot.orientation);
      let newIndex = currentIndex - 1 < 0 ? compassArray.length - 1 : currentIndex - 1;
      robot.orientation = compassArray[newIndex];
    }

    if (robot.path[i] === 'L') {
      let currentIndex = compassArray.indexOf(robot.orientation);
      let newIndex = currentIndex + 1 > (compassArray.length - 1) ? 0 : currentIndex + 1;
      robot.orientation = compassArray[newIndex];
    }

    if (robot.path[i] === 'F') {
      if (robot.orientation === 'N') robot.xLoc = robot.xLoc + 1;
      if (robot.orientation === 'S') robot.xLoc = robot.xLoc - 1;
      if (robot.orientation === 'E') robot.yLoc = robot.yLoc + 1;
      if (robot.orientation === 'W') robot.yLoc = robot.yLoc - 1;
    }

    console.log('ORI: ', robot.orientation);
    console.log('POSITION: ', robot.xLoc, robot.yLoc);
  }
}

const navigatePath = () => {
  console.log(moveSet.R);
}

setupMission(input);