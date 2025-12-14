const data = Deno.readTextFileSync('./input.txt')

const inputs = {
  default: `987654321111111
811111111111119
234234234234278
818181911112111`.split('\n'),
puzzelInput: data.split('\n'),
}

const input = inputs.puzzelInput

const bateeryCombinations = (currentBank) => {
  const combinations = []
  for (let i = 0; i < currentBank.length; i++) {
    for (let j = i + 1; j < currentBank.length; j++) {
      combinations.push(parseInt(currentBank[i] + currentBank[j]))
    }
  }
  return combinations;
}

const maximumJoltages = (banks) => {
  const joltages = [];
  for (let index = 0; index < banks.length; index++) {
    joltages.push(bateeryCombinations(banks[index]))
  }
  return joltages.map(x => Math.max(...x))

}


const sumOfMaxJolteges = maximumJoltages(input).reduce((sum, joltage) => sum + joltage)
console.log(sumOfMaxJolteges);
