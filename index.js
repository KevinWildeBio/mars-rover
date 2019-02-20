const input = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`

const smellList = [];
const compassArray = ['N', 'E', 'S', 'W'];
let grid

const rover = (position, path) => ({
  xLoc: parseInt(position[0], 10),
  yLoc: parseInt(position[1], 10),
  orientation: position[2],
  lost: false,
  path: path.split(''),
  sniff: position => smellList.includes(position)
});

function setupMission(input) {
  const data = input.split('\n');
  let robots = [];

  grid = data[0].split(' ');
  data.shift();

  for (var i = 0; i < data.length; i += 2) {
    robots.push(rover(data[i].split(' '), data[i+1]))
  }

  beginMission(robots);
}

function beginMission(robots) {
  robots.forEach(robot => navigatePath(robot));
}

function navigatePath(robot) {
  for (var i = 0; i < robot.path.length; i++) {
    // console.log('SMELL: ', robot.sniff(robot.position));
    // console.log('GRID: ', grid);
    console.log(`${robot.xLoc} ${robot.yLoc} ${robot.orientation}`);
    console.log(robot.path[i]);

    if (robot.path[i] === 'R') robot.orientation = pivotRight(robot);
    if (robot.path[i] === 'L') robot.orientation = pivotLeft(robot);

    if (robot.path[i] === 'F') {
      // console.log('MOVING FORWARDS');
      if (robot.orientation === 'E') robot.xLoc = robot.xLoc + 1;
      if (robot.orientation === 'W') robot.xLoc = robot.xLoc - 1;
      if (robot.orientation === 'N') robot.yLoc = robot.yLoc + 1;
      if (robot.orientation === 'S') robot.yLoc = robot.yLoc - 1;

      if (
        robot.xLoc < 0 ||
        robot.xLoc > grid[0] ||
        robot.yLoc < 0 ||
        robot.yLoc > grid[1]
      ) {
        robot.lost = true;
      }
    }

    if (robot.lost) {
      sendMessage(robot);
      break;
    }
  }

  sendMessage(robot);

  console.log('-------');
}

function pivotRight(robot) {
  let currentIndex = compassArray.indexOf(robot.orientation);
  let newIndex = currentIndex + 1 > (compassArray.length - 1) ? 0 : currentIndex + 1;
  return compassArray[newIndex];
}

function pivotLeft(robot) {
  let currentIndex = compassArray.indexOf(robot.orientation);
  let newIndex = currentIndex - 1 < 0 ? compassArray.length - 1 : currentIndex - 1;
  return compassArray[newIndex];
}

function moveForwards() {
  return value;
}

function sendMessage(robot) {
  console.log(`${robot.xLoc} ${robot.yLoc} ${robot.orientation} ${robot.lost ? 'LOST' : ''}`);
}

setupMission(input);