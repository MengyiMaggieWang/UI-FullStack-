/*
i = 22
var j = 22

//scoping 
function fun(){
   var a = "LOL"
   let b = "HI" 
   console.log(a, ' ', b)
   //scope defined by curly brackets

    {
        var c  = "horse"
        let d = "apple"
        console.log(c ,' ', d)
    }
    console.log(c)
    console.log(d)// d is not defined
}

fun() //calling function
*/

/*
var funcs = [];
// create 3 functions
for (var i = 0; i < 3; i++) {  
     // and store them in funcs
     funcs[i] = function() {
         //each should log its value
         console.log("My value:" + i);
     };
}

for (var j = 0; j < 3; j++){
    // and now let's run each one to see
    funcs[j]();
}

//Hoisting var is hoisted , let is not hoisted
function fun(){
    console.log(a);
    // let a = 101; let is not hoisted it can not access before initializtion(assign value)
     var a = 101; // var is hoisted , it can be accessed even before initializtion(assign value)
    console.log(a)
}
fun();

*/

//var can be redeclaration, let can not do redeclaration ,const can not be redeclarated
var a = 123;
var a = 111;

let a = 123;
let a = 111;

const a = 123;
const a = 111;

console.log(a);

// can not create const variable without initialization/assign value in declaration
const P2;
P2 = 12345;

//

var name = 'John' //primary variable
var name1 = new String("John") // create string instance from string object






