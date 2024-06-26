function divisible(n,x,y)
{
  const result1 = n/x;
  const result2 = n/y;
  if(result1 % 1 === 0 && result2 % 1 === 0)
    {
      return true;
    }
    else{
      return false;
    }
}
let n=20;
let x=1;
let y=2;
console.log(divisible(n,x,y))