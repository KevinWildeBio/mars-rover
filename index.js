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
  sniff: string => smellList.includes(string)
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
    
    if (robot.path[i] === 'R') robot.orientation = pivotRight(robot);
    if (robot.path[i] === 'L') robot.orientation = pivotLeft(robot);

    if (robot.sniff(`${robot.xLoc}${robot.yLoc}${robot.orientation}`)) continue;

    //wanted to move this out into its own function but ran out of time
    if (robot.path[i] === 'F') {
      let newXLoc = robot.xLoc,
        newYLoc = robot.yLoc;

      if (robot.orientation === 'E') newXLoc = parseInt(robot.xLoc + 1, 10);
      if (robot.orientation === 'W') newXLoc = parseInt(robot.xLoc - 1, 10);
      if (robot.orientation === 'N') newYLoc = parseInt(robot.yLoc + 1, 10);
      if (robot.orientation === 'S') newYLoc = parseInt(robot.yLoc - 1, 10);

      if (
        newXLoc < 0 ||
        newXLoc > grid[0] ||
        newYLoc < 0 ||
        newYLoc > grid[1]
      ) {
        smellList.push(`${robot.xLoc}${robot.yLoc}${robot.orientation}`);
        robot.lost = true;
      } else {
        robot.xLoc = newXLoc;
        robot.yLoc = newYLoc;
      }
    }

    if (robot.lost) break;
  }

  sendMessage(robot);
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