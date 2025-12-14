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
    for (let j = i + 1; j <= currentBank.length - 11; j++) {
      combinations.push(parseInt(currentBank[i] + currentBank.slice(j, j + 11)))
    }
  }
  return combinations;
}

const test = (data) => {
  // console.log(data);  
  let extrasToRemove = data.length - 11;
  console.log("to remove",extrasToRemove,"data len", data.length);
  
  let result = '';
  let i =1;
  while(extrasToRemove) {
      // console.log(extrasToRemove);
      if (data[i - 1] > data[i]) {
        // console.log(data[i - 1], data[i]);
        result += data[i - 1];
      }
      else {
        console.log(data[i-1],data[i]);
      extrasToRemove--
      }
      i++;
  }
  console.log(result);
  console.log(i);
  
  return result+data.slice(i-2);
}

const maximumJoltagesOf = (banks) => {
  const joltages = [];
  for (let index = 0; index < banks.length; index++) {
    joltages.push(parseInt(test(banks[index])))    
  }
  return joltages

}


const maxJoltages = maximumJoltagesOf(input);
const sumOfMaxJolteges = maxJoltages.reduce((sum, joltage) => sum + joltage, 0)
console.log(sumOfMaxJolteges);
