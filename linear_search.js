// Release 0
let linearSearch = (target, values) => {
  //write your code here
  for(var i=0; i<values.length; i++){
    if(values[i]===target){
      return values[i];
    }
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
  let result = [];
  for(var i= 0; i<values.length; i++){
    if(values[i]===target){
      result.push (i)
    }
  }
  if(result.length===0){
    return -1
  }
  else {
    return result
  }
}

let bananas_arr = "bananas".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
