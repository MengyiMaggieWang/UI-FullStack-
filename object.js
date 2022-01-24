var ob = {};// create a object


//1.
var a = "foo" //create a string 
ob[a] = "foo value" //use a as the key

console.log('before:',Object.keys(ob)) //show the key of ob
//2.
ob.hello = 33 // hello is a key
//3.
ob[4] = 55; // 4 is a key, [ ] convert any kind of  key to string

console.log('after:',Object.keys(ob))

delete ob.hello // delete hello object

console.log('after2:',Object.keys(ob))

//Map
// let map = new Map();
// Map.set(key, value) // store the value by key
// Map.get(key) //return value by key , undefined if key does not exist in map
// Map.has(key) // true if key exist false otherwise
// Map.delete(key) //remove the value by the key
// map.clear()/size


let map = new Map();
map.set(1,'str1');
map.set(1,'num1');
map.set(true,'bool1');

//查询 map.keys 的 key 的类型
for (const n of map.keys()){
    console.log(typeof n )
}

console.log(map.get(1))
console.log(map.get('1'))

//size() vs length
//map use key , set does not use key