function findEvenOdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i] + " is even");
    } else {
      console.log(array[i] + " is odd");
    }
  }
}

const array = [11, 22, 34, 49, 56, 62, 71, 80, 93, 17];

findEvenOdd(array);