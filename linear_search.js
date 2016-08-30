// Release 0
let linearSearch = (target, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (target == values[i]) {
      return i;
    }
  }
  return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));
// => -1




// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (target == values[i]) {
      temp.push(i)
    }
  }
  return temp
}



var temp = new Array()

let bananas_arr = "bananas".split("");
console.log(bananas_arr);
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
