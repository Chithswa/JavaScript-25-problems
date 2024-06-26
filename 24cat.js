const catDog = (humanYears) => {
  // return humanYears, catYears, dogYears
  let catYears = 6;
  let dogYears = 2;
  
  for(let i = 1; i < humanYears.length; i++){
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
console.log(catDog(4));