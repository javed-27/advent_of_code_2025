const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default: `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`.split("\n"),
  puzzelInput: data.split("\n"),
};

const input = inputs.puzzelInput.map((x) => x.split(""));

const isAccesseble = (grid, row, col) => {
  const coordinatesToCheck = [
    [row, col + 1],
    [row, col - 1],
    [row + 1, col],
    [row - 1, col],
    [row + 1, col + 1],
    [row + 1, col - 1],
    [row - 1, col + 1],
    [row - 1, col - 1],
  ];
  const validCoordinates = coordinatesToCheck
    .filter(([x, y]) =>
      x >= 0 && x < grid.length && y >= 0 && y < grid[row].length
    );

  const countOfAdjacentRolls = validCoordinates
    .reduce((sum, [x, y]) => sum += grid[x][y] === "@" ? 1 : 0, 0);

  return countOfAdjacentRolls < 4;
};

const countOfAccessedRolls = (rollsGrid) => {
  let count = 0;
  const accessed = [];
  for (let row = 0; row < rollsGrid.length; row++) {
    for (let column = 0; column < rollsGrid[row].length; column++) {
      if (rollsGrid[row][column] === "@") {
        if (isAccesseble(rollsGrid, row, column)) {
          count++;
          accessed.push([row, column]);
        }
      }
    }
  }
  return [count, accessed];
};

let currentStatus = countOfAccessedRolls(input);
let noOfAccessebleRolls = currentStatus[0];

while (currentStatus[0]) {
  currentStatus[1].forEach(([x, y]) => {
    input[x][y] = ".";
  });

  noOfAccessebleRolls += countOfAccessedRolls(input)[0];
  currentStatus = countOfAccessedRolls(input);
}

console.log(noOfAccessebleRolls);
