const input = `
  5 3
  1 1 E
  RFRFRFRF
  3 2 N
  FRRFLLFFRRFLL
  0 3 W
  LLFFFLFLFL
`

const stringToArray = ( string, seperator ) => string.split(seperator);

const rover = ( position, path ) => ({
  position: [position[0], position[1]],
  orientation: position[2],
  lost: false,
  path: stringToArray(path, ''),
  sniff: () => console.log('SNIFF!')
});

function mission(input) {
  console.log(input);
  const grid = stringToArray('5 3 E', ' ');
  const position = stringToArray('1 1 E', ' ');
  const sprit = rover(position, 'RFRFRFRF');
  console.log(sprit);
}

mission(input);