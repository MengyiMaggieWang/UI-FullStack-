/////what is promise?
/* promise is a value that has to be delivered after some time instead of immediately delivered 
,because maybe the runtime is fetching something from server or endpoint  / downloading /doing something right now,
but once the runtime is completed, then it will delivered that solves promises


//that is a value that will be delivered in the future/ give you result in the future
//once the download is finished I will give it to you
//--resolve promise
// but if something happen server shut down/ interrupt the downloading/fectching then shown a error reject a promise 
//--reject promise
*/

/////states:  promise has different state like pending,resolve, reject 

/////How do we create promise?
let promise = new Promise(function(resolve, reject){
     //resolve
     //reject 
     setTimeout(function(){
        // resolve("the secret")
         reject("some error happen")
     },2000)
     })

     
promise.then(
       //then receive the data which is "the secret" pass into arrow funcytion 
       data=>console.log(data),
     // if it is rejected, then data object would be null, we will get the error object
      error=>console.log(error)
    )

    //或者更清晰的写成 then catch finnaly 格式
    promise.then(
        //then receive the data which is "the secret" pass into arrow funcytion 
        data=>console.log(data),
    )
       // use catch for reject
    .catch(
      // if it is rejected, then data object would be null, we will get the error object
       error=>console.log(error)
     )
     //no what it is resolved or rejected it it will always run finnally
     .finally(
         ()=>console.log("Always run")
     )


//why we need promise?? 
//we use promise to solve callback Hell 
//what makes promise eaiser?
// more easily work on promise, we use async await
// logic: call back hell --> promise --> async await


