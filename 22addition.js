function arrayplus(arr1 , arr2)
{
  let sum= 0;
  for(let i=0 ; i<arr1.length; i++)
    {
  const arrValue = arr1[i];
  const arr2Value = arr2[i];
  const addedvalue = arrValue + arr2Value;
  sum = sum + addedvalue;
}
return sum;
}
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arrayplus(arr1,arr2));