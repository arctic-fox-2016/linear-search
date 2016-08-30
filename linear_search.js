// Release 0
let linearSearch = (target, values) => {
  //write your code here
  var idx = -1;
  for(let i=0;i<values.length;i++){
    if(target == values[i]){
      idx = i;
      break;
     }
  }
  return idx;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
  let hasil_array = [];

  for(let i=0;i<bananas_arr.length;i++){
    if(target == values[i]){
      hasil_array.push(i);
    }
  }
  return hasil_array.toString();
}

let bananas_arr = "bananas".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
