function findElement(arr, func) {
  for (let num in arr) {
    if (func(num)){
      result = func(num);
      return num;
    } else {
      continue;
    };
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });