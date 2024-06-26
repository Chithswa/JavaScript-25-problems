function getaverage(scorearray)
{
  const count = scorearray.length;
  let sum = 0;
  for(let i=0; i<count; i++)
    {
      sum = sum + scorearray[i];
    }
    const avg = sum/count;
    const roundedDown = Math.floor(avg);
    return roundedDown;
}
scorearray = [2,2,2,4,4,4,4];
console.log(scorearray.length);
console.log( getaverage(scorearray));