
var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount

var total = studentCount + mentorCount
var roomMaxCapacity = 25
var enoughSpaceInRoom = roomMaxCapacity >= total; 

var personA = "Daniel";
var personB = "Irina";
var sameName = personA == personB;

/*  exercise 2 */

var name = "Daniel";
var danielsRole = "mentor"
if (danielsRole == "mentor"){
    console.log(`Hi, Im ${name} and I work as ${danielsRole}`);
}

else if (danielsRole == "student") {
    console.log(`Hi, Im ${name} and I work as ${danielsRole}`)
} else {
    console.log(`What are you doing here?`);
}

/* exercise 3 */

function isNegative(number){
    return number<0 ? true : false
}
function isBetween5and10(num){
    return num>=5 && num <=10 ? true : false 
}

function isShortName(name){
    return name.length<=6;
}


function startsWithD(name) {
    return name[0] ==="D"
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));



/*
  Conditionals exercise 03 
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
    if (mark>=80){
        return "A"
    }
    else if (mark<=80 && mark>=60) {
        return "B"
    } 
    else if (mark>=60 && mark<=50)
        return "C"
    else {
        return "F"
    }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));
console.log("'" + grade4 + "': " + calculateGrade(grade4));



/*
  Conditionals
  ---------------------------------
  Write a function that checks if a sentence contains the word "code"
  - if the sentence contains the word "code" then return true
  - otherwise return false
  Hint: Google how to check if a string contains a word
*/

function containsCode(sentence) {
    return sentence.includes("code") ? true : false
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var sentence1 = "code your future";
var sentence2 = "draw your future";
var sentence3 = "design your future";

console.log("'" + sentence1 + "': " + containsCode(sentence1))
console.log("'" + sentence2 + "': " + containsCode(sentence2))
console.log("'" + sentence3 + "': " + containsCode(sentence3))



/* Write a function that:
- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop
*/

let n = 10;
let sum= 0
let i=1


function sumTillNum(num){
    while(i<=num){
        sum+=i 
        i++
    }
    return sum;
}
console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


/* Exercise M 

/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function showDaysOfWeek(days,letter){
    for(let d= 0; d<days.length; d++){
        if(days[d][0]=== letter){
        console.log(days[d])
        }
    }
  }

  showDaysOfWeek(daysOfWeek, "T")

  // 1. Create a function that will find the largest number in an array. Return the largest one - use loop and if statement comparing numbers 
const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

function largestNumer (array) {
    let largest = array[0]
for(let index = 0; index<array.length; index++){
    if(array[index]>largest){
        largest=array[index]
    } 
    }
  console.log(largest);
}

largestNumer(arr)


// Create an array of your favorite foods (store it in a variable); check whether "falafel" is in the array (whether the array includes that), if not add it to the end of the array if yes console.log "mnam mnam". 
// Go through the array if that array contains a food starting with letter "I" ask (prompt question "Is it icecream?") if the answer is yes - console.log ("I knew it") if not then ask what it is (prompt) 
// Find the possition of the element and then replace it with "icecream" 

const price = 5
function buyFalafel(budget){
    let moneyLeft = budget
    while(moneyLeft > price){
        console.log("You bought falafel")
        moneyLeft -= price
        console.log(`You have ${moneyLeft} left`);
    }
    console.log("You dont have any money left")
}
buyFalafel(20)
