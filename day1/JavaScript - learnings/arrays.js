
//Arrays
const fruits = [1, 2, 4]

console.log(fruits.length)

// console.log(fruits.lastIndexOf(2))

//map will not mutate the original array, it will create copy of the new array
fruits.map((x) => console.log(x))

// foreach will mutate the original array 

fruits.forEach((product, index) => {
    fruits[index] += 2
    console.log(product)
})

console.log(fruits)

fruits.push('football')

console.log(fruits)


//Objects


const person = {
    fname: 'sanjeev',
    lname: 'kavara',
    favgame: 'Football'
};


console.log(person.favgame)


const ronaldo = new Object(); // object can be declared this way also
ronaldo.fname = 'Cristiano';
ronaldo.lname = 'Ronaldo'
ronaldo.age = 38;
ronaldo.team = 'all-nassr';


console.log(ronaldo.lname + " " + 7)

const cr7 = ronaldo //cr7 will not be the new copy of ronaldo object instead it will reference it(shallow copy)
