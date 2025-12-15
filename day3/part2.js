const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default: `987654321111111
811111111111119
234234234234278
818181911112111`.split("\n"),
  puzzelInput: data.split("\n"),
};

const input = inputs.default;

const largestJoltageIn = (currentBank) => {
  let extrasToRemove = currentBank.length - 12;
  let result = "";
  let i = 0;
  while (extrasToRemove && 12 - result.length) {
    const currentBattery = currentBank[i];
    const forwardBattery = currentBank[i + 1];

    if (currentBattery > forwardBattery) {
      result += currentBattery;
    } else {
      extrasToRemove--;
    }
    i++;
    console.log(12 - result.length, "::: extra", extrasToRemove);
  }
  const needed = 12 - result.length;
  result += currentBank.slice(i, i + needed);
  console.log(result);

  return result;
};

const maximumJoltagesOf = (banks) => {
  const maxJoltages = [];
  for (let index = 0; index < banks.length; index++) {
    const joltage = largestJoltageIn(banks[index]);
    maxJoltages.push(parseInt(joltage));
  }
  return maxJoltages;
};

const maxJoltages = maximumJoltagesOf(input);
const sumOfMaxJolteges = maxJoltages.reduce((sum, joltage) => sum + joltage, 0);
console.log(sumOfMaxJolteges);
