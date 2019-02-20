const input = `
  5 3
  1 1 E
  RFRFRFRF
  3 2 N
  FRRFLLFFRRFLL
  0 3 W
  LLFFFLFLFL
`

const rover = ({ position }) => ({
  position,
  orientation: '',
  lost: false,
  path: '',
  sniff: func
});

function mission(input) {
  console.log(input);
}

mission(input);