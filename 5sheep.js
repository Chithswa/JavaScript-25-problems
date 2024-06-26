array = [true , true, true , false,
          true, true, true, true,
          true, false ,true, false,
          true, false, false, true,
          true, true, true, true,
          false, false, true, true];
function sheep(array)
{
  var count = 0;
  for(var i=0; i<array.length ; i++)
    {
      if (array[i]=== true)
        {
          count +=1;
        }
    }
    return count;
}
console.log(sheep(array));