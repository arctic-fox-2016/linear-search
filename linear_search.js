// Release 0
let linearSearch = (target, values) => {
  //write your code here
  let z = 0
  for (i=0; i<=values.length; i++){
    if (target==values[i]){
      z++
      return i
      break
    }
    else{

    }

  }
  if(z==0){
    return -1

  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
  //write your code here
}

let bananas_arr = "bananas".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
