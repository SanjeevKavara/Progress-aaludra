let box11 = document.getElementById("b1") // for classname use box11[0] like syntax since classname returns an collection of names

box11.innerHTML = 'hello everyone'
console.log("box11", box11);

box11.addEventListener('click', myFunction, false)

function myFunction(){
    alert('hello')
}