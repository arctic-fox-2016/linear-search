'use strict'

// Release 0
let linearSearch = (target, values) => {
  //write your code here
  for(let idx = 0; idx < values.length; idx++){
    if(target == values[idx]) return idx;
    else if(idx == values.length-1) return -1;
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
  let array = [];
  for(let idx = 0; idx < values.length; idx++){
    if(target == values[idx]) array[array.length] = idx;
  }
  return array;
}

let bananas_arr = "bananas".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
