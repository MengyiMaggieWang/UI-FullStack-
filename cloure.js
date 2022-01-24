//cloure let the inner function access the variable of the outer function

function outer(a,b){
    var outerA = 22;
    function inner(c){
      console.log(outerA)
      console.log(a)
      console.log(b)

      function innermost(){
          console.log(" from innermost" + outerA)
      }
      innermost()
    }
    return inner
}

inn = outer(1,2)
inn(12)




