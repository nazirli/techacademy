function findMod(number) {
  let num = parseInt(number % 10);

  let num1 = parseInt((number / 10) % 10);
  let num2 = parseInt((number / 100) % 10);
  let num3 = parseInt((number / 1000) % 10);
  let num4 = parseInt((number / 10000) % 10);
  let result = (num + num2 + num4) % (num1 + num3);

  return result;
}
console.log(findMod(23456));
