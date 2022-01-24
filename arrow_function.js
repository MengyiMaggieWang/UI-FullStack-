var sum = x => {
    console.log("before")
    return x+x // if there is multiple statement, you have to return , other it will show undefined 
}

var sum = (x,y) => x + y

var sum = x => x + x

var sum = (x, y) => x + y

console.log(sum(1,2))

//1.arrow fctns dont have this, but borrows from the outer scope
let gr = {
    title:"Main Group",
    employees:['John','Will','Alice'],
    showList(){
         this.employees.forEach(
             emp => console.log(this.title + ':' + emp)
         )
    }
}

gr.showList()


//2. Arrow functions can not be used with new -- because 1. 

//3.Arrow functions have no "arguments"
function add()
{
    return x + y
}
console.log(add('a','b',1,2,3,4,5,6))


//argument is an array like predefined object
function add() 
{
  sum = 0
  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
  }
  console.log(arguments instanceof Array)
  // false means argument is not on the prototype of array so argument is not a array 
  //so if you inside array function you will not get argument
  return sum 
}
//array funcyion can not be called with super

//how we use super? what is super?





