const initialDailPosition = 50;
const puzzelInput = Deno.readTextFileSync("./puzzelnput.txt");

const inputs = {
  default: `L68 L30 R48 L5 R60 L55 L1 L99 R14 L82`.split(" "),
  puzzel: `${puzzelInput}`.split("\n"),
};

const input = inputs.puzzel;
console.log(input);

const rotateRight = (rotations, currentPosition) => currentPosition + rotations;
const rotateLeft = (rotations, currentPosition) => currentPosition - rotations;
const dailRotations = (data) => {
  let counter = 0;
  let currentPosition = initialDailPosition;
  data.forEach((instrcution) => {
    console.log(instrcution);
    const [direction, rotations] = [
      instrcution.slice(0, 1),
      +instrcution.slice(1),
    ];
    const rotate = { "R": rotateRight, "L": rotateLeft };
    currentPosition = rotate[direction](rotations, currentPosition);
    if (currentPosition < 0) currentPosition = 100 + currentPosition;
    else if (currentPosition > 99) currentPosition = currentPosition - 100;
    if (currentPosition === 0) counter++;
  });
  return counter;
};

console.log(dailRotations(input));
