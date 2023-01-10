// ----------execution Context----------
// 1 global objest
// 2. this
// 3. reference to outer environment

// hoisting
// console.log(someVariable) //undefined
// someFunction(); //undefined

// function someFunction(){
//     console.log("from someFunction", someVariable);
// }

// var someVariable = "Devsnest" //declaration

// console.log(someVariable); //defined
// someFunction();  //defined

// execution Context created
// 2 phase
// created phase
// loads variables and func in memory

// execution phase
// execute the satatement line by line

var myName = "Cocowa";
function printName(){
    console.log(myName);
    printAnotherName();
}
function printAnotherName(){
    var myName = "Momowa"
    console.log(myName);
    printSomeOtherName();
}
function printSomeOtherName(){
    var myName = "Bobowa";
    console.log(myName);
}
console.log(myName);
printName();
// v
// v
// v
// v
// v
//-------how execution works----------
//var myName = "Cocowa"; // declaration

//1. console.log(myName)// print "Cocowa"
//2.printName(); // go to that function | nwe execution context created
//  vv
//    console.log(myName); // print "Cocowa"
//    printAnotherName();  //go to that function | nwe execution context created
//    vv
//      var myName = "Momowa" // declaration
//      console.log(myName); //print "Momowa"
//      printSomeOtherName(); //go to that function | nwe execution context created
//      vv
//      var myName = "Bobowa";//declaration
//      console.log(myName); // print "Bobowa"

