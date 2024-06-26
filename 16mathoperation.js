function basicoperation(operation, value1, value2)
{
  const operationstring = value1 + operation + value2;
  const result = eval(operationstring);
  return result;
}
let operation = '*';
let value1 = 2;
let value2 = 6;
console.log(basicoperation(operation, value1, value2));