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
  for (let row = 0; row < rollsGrid.length; row++) {
    for (let column = 0; column < rollsGrid[row].length; column++) {
      if (rollsGrid[row][column] === "@") {
        count += isAccesseble(rollsGrid, row, column) ? 1 : 0;
      }
    }
  }
  return count;
};

const accessebleRolls = countOfAccessedRolls(input);
console.log(accessebleRolls);
