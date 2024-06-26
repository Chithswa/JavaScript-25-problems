function maps(arr)
{
  const result = arr.map(arrItem =>
    {
      return arrItem*2;
    });
    return result;
}
let arr =[20,19,25,16,25,19];
console.log(maps(arr));