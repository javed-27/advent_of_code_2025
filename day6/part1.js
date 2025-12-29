const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default: `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `,

  puzzelInput: data,
};

const sumOf = (x, y) => x + y;

const productOf = (x, y) => x * y;

const transpose = (array) => {
  const transposedArray = [];
  for (let i = 0; i < array[0].length; i++) {
    const temp = [];

    for (let j = 0; j < array.length; j++) {
      temp.push(array[j][i]);
    }

    transposedArray.push(temp);
  }

  return transposedArray;
};

const input = inputs.puzzelInput.split("\n")
  .map((str) => str.trim().split(/\s+/));

const evalExp = (exp) => {
  const operator = exp.at(-1);
  const operands = exp.slice(0, exp.length - 1).map(Number);

  const operation = {
    "+": sumOf,
    "-": differenceOf,
    "*": productOf,
    "/": divisonOf,
  };

  const operationToPerform = operation[operator];
  const result = operands.reduce((x, y) => operationToPerform(x, y));
  return result;
};

const cephalopodMath = (array) => {
  let grandTotal = 0;

  array.forEach((element) => {
    grandTotal += evalExp(element);
  });

  return grandTotal;
};

const result = cephalopodMath(transpose(input));
console.log(result);
