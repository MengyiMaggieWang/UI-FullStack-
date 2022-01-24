//1. bind create a new function, that when called,
// has its "this" keyword set to the provided context.

var pokemon = {
    firstName : "Pika", //key value pair in dictionary{ }
    lastName : "Chu",
    getPokeName:function(){
        var fullname = this.firstName+' '+this.lastName
        return fullname;
      }
};

var pokemonName = function(snack,hobby){
    console.log(this.getPokeName()+'I choose you') 
//pokemonName does not have getPokeName() function, so we need to redirect "this" key word using bind
    console.log(this.getPokeName()+'loves'+snack+'and'+hobby)
}

//the new function we created using bind 
var bindPokemon = pokemonName.bind(pokemon) // bind 将 this redirect 转指向 pokemon 这个object 

//pass value 
bindPokemon('sushi','javascript')

//2.call:call a function
bindPokemon()

/////////////////////////////////////////////////////////////////////////////////
//call and apply do not create a new function, they execuete immediately
//if it is call, then we need to provide the remaning 2 value
var callPokemon = pokemonName.call(pokemon,'sushi','javascript') 
//if it is apply, then we need to provide the remaining 2 value as array
var applyPokemon=pokemonName.apply(pokemon,['sushi','javascript']) 



