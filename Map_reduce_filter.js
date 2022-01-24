
//for loop
//while loop 
// foreach loop

//map, reduce, filter --array functions
// map : let you map a function to each element of the Array
//reduce: help you reduce one or more than one value to a single value ---sum 
//filter: filter out unwanted value 


// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need
  [20, 24, 56, 88]

var officerId = [ ];

officers.forEach(function(officer){
     officerId.push(officers.id)    
})

console.log(officerId);

var Ids = officers.map(function(officer){
    return officer.id 
})

 console.log("print ids" + Ids) ;


//Reduce: you reduce many value to a single value
 var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  //  accumulator  = starting value =like sum = 100
  // adding the object year
  var totalYears = pilots.reduce( function(accumulator, pilot) 
  {
    return accumulator + pilot.years;
  }, 100 );

  console.log(totalYears);
 
//condition
var mostExp = pilots.reduce(function(oldest, pilot){
    return (oldest.years || 0 ) > pilot.years ? oldest : pilot;
},{}) 
// {} 代表初始化的accumulator 也就是 oldest.years 是 0
// 满足条件返回  ： 前的值 ， 不满足条件返回: 后的值

console.log("the most experience is "+ mostExp)

var mostExp = pilots.reduce(function(oldest,pilot){
    return (oldest.years || 0 ) > pilot.years ? oldest : pilot
},{})



//filter 

var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];


  var rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
  });
  var empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
  });
 
  console.log(rebels)
  console.log(empire)

//   Our objective: get the total score of force users only. 

var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    }, 
  ];

var totalscore = personnel.filter(function(person) {
    return person.isForceUser === true; 
})
.map(function(x){
     return x.pilotingScore + x.shootingScore;
})
.reduce(function(acc,x){
    return acc + x;},0);

console.log(totalscore);

// .reduce(function(acc, score){
//      return acc + score;
// }, 0);

//下面是老师的代码：
  var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser; 
    // 这段等于 return person.isForceUser === true
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  console.log(totalJediScore);
//prototype/ proto

  







