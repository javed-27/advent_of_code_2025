const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default: `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `,

  puzzelInput: `${data}`,
};
const input = inputs.puzzelInput.split("\n");

const parse = (input) => {
  let str = "";
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      str += input[j][i];
    }
    str += "\n";
  }

  const parsedResult = str.split(/\n\s+\n/).map((x) =>
    x.split("\n").filter((x) => x !== "").map(Number)
  );

  const operators = input[input.length - 1].trim().split(/\s+/);
  parsedResult.forEach((element) => {
    element.push(operators.shift());
  });

  return parsedResult;
};

const sumOf = (x, y) => x + y;

const productOf = (x, y) => x * y;

const evalExp = (exp) => {
  const operator = exp.pop();
  const operands = [...exp];
  const operation = {
    "+": sumOf,
    "*": productOf,
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

const result = cephalopodMath(parse(input));
console.log(result);
