// Release 0
let linearSearch = (target, values) => {

    //write your code here
    return values.indexOf(target);
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// => 2
console.log(linearSearch(9, random_numbers));

// Release 1
let globalLinearSearch = (target, values) => {
    //a dicari di semua huruf array
    var array =[];
    for(var i=0; i<values.length; i++){
        if (target == values[i]){
            array.push(i);
        }
    }
    return array;
}

let bananas_arr = "bananas".split("");
// => ["b", "a", "n", "a", "n", "a", "s"]
console.log(globalLinearSearch("a", bananas_arr));
// => [ 1, 3, 5 ]
