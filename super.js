//super point to the parent class
//in es6 class 

class God{
    hi(){
        console.log("he is the god")
    }
}

class Animal extends God{
    constructor(name,height){
        super()//call god hi function
        this.name = name;
        this.height = height;

    }
    hello(){
        console.log(`hi i am ${this.name} from the animal kingdom`)
}
}

//create an object
let king = new Animal("Lion King",4.5); //create object
console.log(king)
king.hello(); //call function

//inheritances 
// only some variable belongs to some classes, then only those classes are able to initialize
//these variables eg: lion could not initialize name and height,
class lion extends Animal{
   constructor(name, height,color){
       super(name,height);//inherit from animal which is the parent
        this.color = color;//color is lion's property
   }
   callParentHello(){
     super.hello()
   }

   hello(){
    console.log(`hi i am ${this.name} from the animal kingdom`)
    // super.super.hi();//undefined 
   }
}

let l = new lion('tiger',4.5,'stripes')
l.hello();
l.callParentHello()
l.hi()

class A{
    constructor(x)
    {
        this.a = x
    }
}

class B extends A {
       constructor(x,y)
       {   super(x)
           this.b = y;
       }
}

class C extends B {
    constructor (x,y,z)
    {   super(x,y)
        this.c = z;
    }
}

//how to create a object of c?
c = new C(11,12,33)
console.log(c.a,c.b,c.c)

//how class being used in UI?? class is a concept for backend
//in UI why we need class? like to have a uniform API ---classes
// React fetch data with schema from mangoDB

var a1 = null; // null is a data type it is not a value 
//undefined means it is not initialized 
//null is a value that can be assinged to anybody
//undeclared means create variable without var  
b2 = 23; // b is a undeclared variable

function a(){
    function b(){
         function c(){
              //var val=45
               val = 45 // 有var global scope  只能在这个functionc() scope里可以access； 
                         // 没有var can be acessed outside function c
             console.log(val)
            }
         c()
         console.log(val)
    }
    b()
    console.log(val)
}
a()

console.log(val)
