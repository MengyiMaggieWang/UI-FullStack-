//execute a function after sometime
//it is a global function
setTimeout(
   ()=>console.log("hello"),2000 // this is a call back function which was executed after 2000s 
)
//setInterval keeps execueting every seconds over and over again
setInterval(
    ()=>console.log("hello"),2000 // this is a call back function which was executed after 2000s 
 )   // control + c to exit 

 //gloabl object is window