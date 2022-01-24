//rest of parameters

//variable argument length is not fixed you can pass any number ofs variables as many as you want
function add(...args){
    let sum = 0;
    for (let a of args) {
     sum+= a
} 
   console.log(sum)
   console.log(args instanceof Array) //args is an array
}
// console.log(args instanceof Array)


add(1,1)
add(1,1,1)
add(1,1,1,1,1,1)
 

console.log(Math.max(12,19,11))
let arr = [12,19,11]
let arr1 = [312,129,721]
//caompare 
console.log(Math.max(arr)) // it will return NaN, we need to open this array and spread the element out
console.log(Math.max(...arr,...arr1,12,-21)) 

x = 101; //semicolon is very important
y = 909;
//swaping
[x,y] = [y,x];
console.log(x,y)

