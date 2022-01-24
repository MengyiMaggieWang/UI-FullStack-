function doSomething() {
  console.log(this);
}

doSomething();


var obj = {
    name: "maggie",
    getName: function(){
        console.log(this.name);
    }
}

obj.getName();