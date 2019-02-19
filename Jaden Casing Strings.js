String.prototype.toJadenCase = function () {
  let wordArr = this.toString().split(' ');
  let jadenArr = wordArr.map((word) => {
    let chars = word.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  });
  return jadenArr.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());