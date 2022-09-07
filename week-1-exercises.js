// Start by creating a variable `message`
var message
console.log(message);

/*    ex. 1-2    */
var name="danielle";
var nameLength=name.nameLength;

console.log(`My name is $[name] and my name has $[nameLength] characters long`);


const name = " Daniel  ";
const message = `My name is ${name.trim()} and my name is 6 characters long.`;
console.log(message);


/*    ex. 2 */

function halve(number){
    return number / 2
  }

  var result = halve(12);
  var result2 = halve(24);
  var result3 = halve(36);
  var result4 = halve(100);
  
  console.log(result);
  console.log(result2);
  console.log(result3);
  console.log(result4);



  /*     ex.3 */

function triple(number) {
    return number * 3
  }

  var result = triple(12);
  
  console.log(result);





  /*     ex. 4  */

  function multiply(num1, num2) {
    return num1 * num2;
  }
  var result = multiply(3, 4);
  console.log(result);





/*     ex.5  */

  // Declare your fufunction add(num1, num2) {
function divide(num1, num2) {    // Declare your function first
    return num1 / num2;
}
var result = divide(3, 4);
console.log(result);



/*      ex.6   */

function createGreeting(name) {
    return "Hello my name is " + name
}

var greeting = createGreeting("Danielle");

console.log(greeting);




/*    ex. 7 */

function numbers (num1, num2) {
    return num1 + num2;
}
 var sum = numbers(13, 124);
 
console.log(sum);




/*   ex. 8  */

function createLongGreeting(name, age) {
    return "Hello, name is " + name + " and I am " + age + "years old";
}

const greeting = createLongGreeting("Danielle", 27);

console.log(greeting);





/*    loop - nested */

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createGreeting(greeting){
    return "HELLO";
}

const message = createGreeting();

function mentorsNames(mentor) {
    return mentor;
}

console.log(message + mentor1.toUpperCase());
console.log(message + mentor2.toUpperCase());
console.log(message + mentor3.toUpperCase());
console.log(message + mentor4.toUpperCase());
console.log(message + mentor5.toUpperCase());