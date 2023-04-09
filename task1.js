/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function simpleTask(a) { let result = parseInt(a/100) + " " + parseInt(a/10)%10 + " " + a%10

   // return 2 cavab goture bilmez, ona gorede cavablari string seklinde birlesdirib qaytarin (ex: cavab + " " + cavab2)
  return result; //your code here
}

module.exports = simpleTask;
console.log(simpleTask(457));