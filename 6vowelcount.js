function getVowels(string) {
  let Vowels = "aAeEiIoOuU";
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
      if (Vowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
      }
  }
  return vowelsCount;
}
console.log(
      getVowels("sameeksha")
);
