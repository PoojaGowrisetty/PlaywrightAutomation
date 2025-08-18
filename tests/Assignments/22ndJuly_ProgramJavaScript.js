//Write a program to identify the value before decimal and after decimal are even or odd. eg. 3948.432943 --> Two Parts --> 3948 and 432943 --> Then you will apply remainder by
function checkEvenorOdd(num){
    const numstr = num.toString();
    const parts = numstr.split(".");
    const firstpart = parseInt(parts[0]);
    const secondpart = parseInt(parts[1]);
    if(firstpart%2 == 0){
        console.log(firstpart,"is even number");
    }
    else{
       console.log(firstpart,"is odd number"); 
    }
    if(secondpart %2 == 0){
        console.log(secondpart,"is even number");
    }
    else{
       console.log(secondpart,"is odd number"); 
    }
    
}
checkEvenorOdd(3948.432943);
