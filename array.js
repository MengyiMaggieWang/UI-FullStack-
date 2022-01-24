var names = ["John","Will"]
var n = [ ]
var arr = new Array(" "," ")
//push
//pop
//shift --removes the first item of an array
//unshift
//splice()
//concat()
//Array.from()
//iterable "hello" [1,2,3]

// array is a data structure that store a list of ordered  elements
//in js we can define array as a function right?
a = [1,2,3]
b = [a,11,22]

console.log(b[a[0]])
console.log(b[0][0])
var fruits = ["b","a","g"]
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(fruits)

var nums = [1,2,11,23,5]
console.log(nums.sort()) //does not work since it works for string

// sort in increasing order

nums.sort((a,b) => a - b)
console.log(nums)

// sort in decreasing order , the first one should be greater than the second one
nums.sort((a,b) => b - a)
console.log(nums)

