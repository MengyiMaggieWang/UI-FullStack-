/****************************************
Creating Objects

1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function closures
5. JavaScript Class

****************************************/

// 1. Object literals
let obj1 = {
    p1: 'value1',
    p2: 'value2',
    p3: function(){
        console.log(this.p1);
    }
}
obj1.p3(); 

// 2. Object.create
let proto = {
    p3: function(){
        console.log(this.p1);
    }
}
let obj2 = Object.create({}, {
    p1: { value: 'value1'
    },
    p2: { value: 'value2'
    }
});
obj2.p3 = function(){
    console.log(this.p1);
}
obj2.p3();

// 3. new + function 
let Obj = function(v1, v2){
    this.p1 = v1;
    this.p2 = v2;
    this.p3 = function(){
        console.log( this.p1 );
    }
}
let obj3 = new Obj('value1', 'value2');
obj3.p3();


// 4. factory function with closures
let ObjFF = function(v1, v2){
    let _p1 = v1;
    let _p2 = v2;
    return {
        p1: _p1,
        p2: _p2,
        p3: function(){
            console.log(_p1);
        }
    }
}
let obj4 = ObjFF('value1', 'value2');
obj4.p3();


// 5. Javascript Class
class ObjC{
    constructor(v1, v2){
        this.p1 = v1;
        this.p2 = v2;
    }
    p3() {
        console.log( this.p1 );
    }
}
let obj5 = new ObjC('value1', 'value2');
obj5.p3();