// Release 0
let linearSearch = (target, values) => {
  //write your code here
  var i=0;

  for (i=0; i < values.length && values[i] != target ;i++) {
  }

  if (i == values.length) {
    return -1;
  } else {
    return i;
  }

}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));
console.log(linearSearch(29, random_numbers));
console.log(linearSearch(72, random_numbers));
console.log(linearSearch(6, random_numbers));
console.log(linearSearch(37, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
  var i=0;
  var posisi = new Array();
  for (i=0; i<values.length ; i++) {
    if (values[i] == target) {
      posisi.push(i);
    }
  }

  return posisi;
}

let bananas_arr = "banana".split("");
let pro_arr = "procrastinator".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
console.log(globalLinearSearch("o", pro_arr));
