// write your code here

function findLongNameThatStartsWithA(arr){
    return arr.find(function(name){
        return name[0] == "A" && name.lenght > 7
    })}

    var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

pairsByIndex.some(e => e == null)
pairsByIndex.some(function(e){
    return e == null
})

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

students.some(function(e){
    return e == "Lesley"
})


/*
students.some(e => e == "Lesley")

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

var pairs = pairsByIndex.map(function(indexes){
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

*/

var students2 = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var OnlyStudents = group.filter(student => students2.includes(students))
    let groupIsOnlyStudents = group.lenght == OnlyStudents.length

groupIsOnlyStudents = group.every( e => students2.includes(e))

if (groupIsOnlyStudents){
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

