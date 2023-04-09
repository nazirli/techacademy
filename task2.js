/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function removeMiddle(num) {
  let last = num % 10;
  let first = parseInt(num/100)
 let result = first * 10 + last
  return result; //your code here
}
console.log(removeMiddle(198));
module.exports = removeMiddle;
