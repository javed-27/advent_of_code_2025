const data = Deno.readTextFileSync("./input.txt");

const inputs = {
  default:
    `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
  puzzleInput: data,
};

const input = inputs.puzzleInput.split(",").map((x) => x.split("-"));

const isInValidID = (id) => {
  const len = id.length;
  for (let index = 1; index <= len / 2; index++) {
    const pattern = id.slice(0, index);
    if (pattern.repeat(len / index) === id) {
      return true;
    }
  }
  return false;
};

const checkInvalidIds = (arr) => {
  const inValidIds = [];
  arr.forEach((range) => {
    const [start, end] = range;
    for (
      let currentId = parseInt(start); currentId <= parseInt(end); currentId++
    ) {
      if (isInValidID(currentId + "")) {
        inValidIds.push(currentId);
      }
    }
  });
  return inValidIds;
};

const sumOfINvalidIds = checkInvalidIds(input).reduce(
  (sum, ele) => sum + ele,
  0,
);
console.log(sumOfINvalidIds);
