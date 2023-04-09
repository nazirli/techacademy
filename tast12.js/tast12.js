 function findMod(number){

    let num1 = number%10 //4
    let num2 = parseInt((number/10)%10) //3
    let num3 = parseInt((number/100)%10) //2
    let num4 = parseInt((number/1000)%10) //1
    let result = num4**num3 - num2**num1




    return result;
 }
 console.log (findMod(1234));

 