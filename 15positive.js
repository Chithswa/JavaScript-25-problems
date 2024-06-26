function sum(arr)
{
  let sum = 0;
  for (let i=0 ;i<arr.length; i++)
    {
      if(arr[i]>0)
        {
          sum = sum+arr[i];
        }
    }
    return sum;
}
let arr= [-2,-3,-2,7,12];
console.log(sum(arr));