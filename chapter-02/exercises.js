
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

/*
I: takes in a parameter of a number
O: different levels of a triangle
C: use for loop
E:
*/

function triangles(size) {
  // use for loop to iterate through as many times as the size of the triangle
  for(let i = 1; i <= size; i++){
    // declare row in outer loop as a place holder
    let row = ""
  // j <= i so that the number of # corresponds to the number in the size of the outer loop
  for(let j = 1; j <= i; j++){
    // row doesnt need to be declared to a variable in inner loop already being held by let row = "" in outer loop
     row += "#"
  }
  console.log(row)
  }
}
  


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

/*
I: takes in two parameters that represent numbers
O: log different statements depending on the divisibiilty of the numbers
   if the number is divisible by both 3 & 5, log "fizzbuzz"
   if the number is divisible by 5, log "buzz"
   if the number is divisible by 3, log "fizz"
   if the number is not divisible by 3 or 5, log the number
C:
E:
*/

function fizzBuzz(start, end){
  // use a foor loop to iterate through the inout numbers
  for(var i = start; i <= end; i++){
    // check if the current number is divisible by 3 & 5
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz")
      // check if current number is divisible by 5
    } else if (i % 5 === 0){
      console.log("buzz")
      // check if the current number is divisible by 3
    } else if (i % 3 === 0){
      console.log("fizz")
      // if not divisible by 3 or 5 log the nuber
    } else {
      console.log(i)
    }
  }
}
 

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

/*
I: Takes in a string that represents the size of a chessboard
O: strings that represent the pattern of a chesboard
C: needs to use line break characters
E:
*/

function drawChessboard(x) {
// set an empty string to hold the chessboard
  var checker = "";
// loop through each row 
  for(var i = 0; i < x; i++){
    // empty string for new row
    var string = "";
 // iterate though to creat a column fro the chessboard 
  for(var j = 0; j < x; j++){
    // 
    if((i + j) % 2 === 0){
      // adds an empty space if it is an even number
      string += " ";
    } else {
      // adds a hashtag if it is an odd number
      string += "#";
    }
  }
  // contnue adding row as long as the chessboard is newline charcter to move to next line
   checker += string + "\n"
  }

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}