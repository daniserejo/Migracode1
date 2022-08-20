function createGreeting(name,age){
    return "Hi, my name is " + name + " and I am" + age + "years old"
   


}



console.log (createGreeting("Lucia"," not your problem "))

var mentor1 = "Daniel"
var mentor2 = "Alice"
var mentor3 = "Ana"
var mentor4 = "Nuno"
var mentor5 = "Mauro"

function spellUpperCase (name){
    let mentorUpperCase = name.toUpperCase();
    return mentorUpperCase;

}

function greetMentors(name) {
    console.log(`HELLO, ${spellUpperCase(name)}`);
}

greetMentors(mentor1);
greetMentors(mentor2);
greetMentors(mentor3);
greetMentors(mentor4);
greetMentors(mentor5);


function birthYear(age) {
    const currentYear = 2022;
    return currentYear - age;
}

let year = birthYear (27)
console.log(year)

function statement(name,age) {
    return `Hi, I am ${name} and I was born in ${birthYear(age)}`;
}

console.log(statement("Danielle", 27))



function ageOfPerson(name,age) {
const d= new Date ()
let year =d.getFullYear ()
const exactYear=year-age
const message =`Hello my name is ${name}, and I was born in ${exactYear}`

console.log(message)
return message
}

ageOfPerson("Lucia", 30)


function addNumbers(a,b,c) {
    return a + b + c;
}

function introduceMe(name,age){
    return "Hello, my name is " + name + " and I am " + age + " years old";
}


function getTotal(a,b) {
    total = a + b;

    return `The total is %{total}`
}

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getTotal function", getTotal(23, 5), "The total is 28");

