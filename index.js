const input = `
  5 3
  1 1 E
  RFRFRFRF
  3 2 N
  FRRFLLFFRRFLL
  0 3 W
  LLFFFLFLFL
`

const stringToArray = string => string.split('');

const rover = ( position, path ) => ({
  position,
  orientation: '',
  lost: false,
  path: stringToArray(path),
  sniff: () => console.log('SNIFF!')
});

function mission(input) {
  console.log(input);
  const sprit = rover([5,3], 'RFRFRFRF');
  console.log(sprit);
}

mission(input);