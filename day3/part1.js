const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default: `987654321111111
811111111111119
234234234234278
818181911112111`.split("\n"),
  puzzelInput: data.split("\n"),
};

const input = inputs.default.map(x => x.split(''));

const batteryCombinations = (currentBank) => {
  const combinations = currentBank
    .map((x, i, arr) => arr.slice(i + 1)
      .map(y => eval(x + '' + y))).flat();

  return combinations;
};

const maximumJoltages = (banks) => {
  const joltages = [];

  for (let index = 0; index < banks.length; index++) {
    joltages.push(batteryCombinations(banks[index]));
  }

  return joltages.map((x) => Math.max(...x));
};

const sumOfMaxJolteges = maximumJoltages(input)
  .reduce((sum, joltage) => sum + joltage);

console.log(sumOfMaxJolteges);
