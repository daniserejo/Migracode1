// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const multipliedNumbers = numbers.map (function (el){
    return el * 100
})

console.log(multipliedNumbers);


/*                         Exercise F */ 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach(val => {
    if(val % 5 === 0 && val % 3 === 0)
    console.log("FizzBuzz")
    else if(val % 3 === 0){
    console.log("Fizz");
    }else if(val % 5 === 0){
    console.log("Buzz");
    }else{
    console.log(val);
    }
})


/*                 Exercise G */

var numbers = [3, 2, 1];
var sortedNumbers = numbers.sort()


console.log(sortedNumbers);


/*                 Exercise G 2  */


var mentors = ["Daniel", "Irina", "Rares"];
var students = ["Rukmini", "Abdul", "Austine", "Swathi"];

var everyone = mentors.concat(students)

console.log(everyone);


/*            Exercise H 1,2,3      */

var everyone = [
    "Daniel",
    "Irina",
    "Rares",
    "Rukmini",
    "Abdul",
    "Austine",
    "Swathi"
  ];
  
  var firstFive = everyone.slice(0,5)
  var lastFive = everyone.slice(-5)

  
  console.log(firstFive);
  console.log(lastFive);

  /*     2  */

  function capitalise(str) {
  const string = str.split("")
  string[0]= string[0].toUpperCase ()
  return string.join("")
  }

var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));


/*     3   */


var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  return ukNations.includes(e => e == country)
}


console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/*       extra 1 */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];
const oxygenLevels3 = ["200%", "21.1%"];

function safeLevels(safeOx) {
    return safeOx.find(e => {
        return e > "19.5%" && e < "23.5%"})
}


console.log(safeLevels(oxygenLevels1))
console.log(safeLevels(oxygenLevels2))
console.log(safeLevels(oxygenLevels3))



/*       extra 2 */


let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function canIeat(array) {
    return array.every( e => e == "pink") ? "You can eat" : "Dont"
}

function canIeat2(array) {
    if(array.every(e=> e == "pink")){
        return "you can eat"
    }else{
        return "dont eat"
    }
}

console.log(canIeat(bushBerryColours1))
console.log(canIeat2(bushBerryColours2))



/*          extra 3  */



/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family"
];

function colonisers(array){
    return array.filter(e => {
        return e[0] == "A" && e.includes("family")
    })
}

console.log(colonisers(voyagers))

