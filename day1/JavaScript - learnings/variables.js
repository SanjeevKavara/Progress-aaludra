console.log('hello world')

// array = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)

// }


let x = 23e10
console.log(x)


//in js the compiler executes an instruction from left ot right.
let y = 234e-4
console.log(y)

//in js all the numbers are stored in double(64-bit floating point).

let z = BigInt("3292003892811290930945621231478963215661155")

console.log(z)

let n1 = '24'
let n2 = 24

// '==' compares only the output, if same output it will return true else false.
if (n1 == n2)
    console.log(true)
else
    console.log(false)

//'===' not only compares the final output but also compares its data type, it should be same output of same data type the only it will be true else it will be false.

if (n1 === n2)
    console.log(true)
else
    console.log(false)



console.log('a'>'B') // true will be printed

let text1 = 'hello everyone '
text1+='How are you' // string concatination

console.log(text1)

let l1 = 12+'th year'
console.log(l1)



// function f1 (data){
// console.log(data)
// }

// f1('hello')
