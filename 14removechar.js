str = 'hello everyone';
function removechar(str)
{
  const lengthofstring = str.length;
  return str.substr(1, lengthofstring-2);
}
console.log(removechar(str));