function persistence(num, product = 1, count = 0) {
  if (num.toString().length == 1) {
    return count;
  } else {
    let arr = num.toString().split('');
    arr.forEach((char) => {
      product *= char;
    }) 
    count++;
    return persistence(product, 1, count);
  }
}

let answer = persistence(25);

console.log(answer);