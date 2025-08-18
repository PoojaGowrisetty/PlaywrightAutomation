//In an array of Number, find the largest number
function largestnumberinArray(){
    const arr = [10, 20, 50, 76, 21];
    largestnum = 0;
    for(i =0 ; i < arr.length; i++){
        if (arr[i] > largestnum){
            largestnum = arr[i];
        }
        
    }
    console.log(largestnum);
}

largestnumberinArray();

//In an array of Number, How many are Prime numbers
function countprimenumbers(){
    const arr = [2,6,7,8,10, 11, 19,20];
    count = 0;
    for(i =0 ; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            count++;
        }
    }
    console.log("Numbers of prime numbers in array",count);
}
countprimenumbers();

//For a String - 'London' -> Reverse the letter of the String
function reverseString(str) {
    var revssstr = "";
    len = str.length;
    for(i = str.length -1 ; i>= 0 ; i--){
        revssstr += str[i];
    }
    console.log(revssstr);
   
}
// str.split("").reverse().join("");
reverseString("London");
reverseString("I am Pooja Gowrisetty");

//For a Sentence - "I am new to javascript" -> Reverse the individual word output -> "I ma wen ot tpircsavaj"
function reverseWords(sentence) {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");

}
console.log(reverseWords("I am new to javascript"));

//Check the given word is Palindrome or not -> 'Mom'
function ispalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    if( word.toLowerCase() === reversedWord.toLowerCase()){
        console.log(word, "is a palindrome");
    }
    else{
        console.log(word, "is not a palindrome");
    }
}

ispalindrome("Mom");
ispalindrome("Hello");

//To Display the Fibonacci Series -> 0 1 1 2 3 5 8 13
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci Series:", fib.join(" "));
}

fibonacciSeries(8);