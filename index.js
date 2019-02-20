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
// const grid;

//create a moveset which can easily expanded
// const moveSet = {
//   R: console.log('TURN RIGHT'),
//   L: console.log('TURN LEFT'),
//   F: console.log('MOVE FORWARDS')
// }

const stringToArray = (string, seperator) => string.split(seperator);

const rover = (position, path) => ({
  position: [position[0], position[1]],
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
    // console.log(robot.sniff('SMELL: ', robot.position));
    console.log('ORI: ', robot.orientation);
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

    }
    if (robot.lost) break;
    // else robot.setPosition();
  }
}

const navigatePath = () => {
  console.log(moveSet.R);
}

setupMission(input);