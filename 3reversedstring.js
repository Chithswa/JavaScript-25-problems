
function solution(str)
{
  const arr = str.split("");
  const reversed = arr.reverse();
  const finalanswer = reversed.join("");
  return finalanswer;
}
console.log(solution("sameeksha"));