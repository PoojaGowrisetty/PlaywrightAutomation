//You will create a String Array and Number Array -> Use Minimum -> 12 Array Methods and show the value in the console area
function stringarraymethods() {
    const stringArray = ["apple", "banana", "cherry", "date"];
    console.log("Original String Array:", stringArray);
    
    // 1. push
    stringArray.push("elderberry");
    console.log("After push:", stringArray);
    
    // 2. pop
    const popped = stringArray.pop();
    console.log("After pop:", stringArray, "Popped element:", popped);
    
    // 3. shift
    const shifted = stringArray.shift();
    console.log("After shift:", stringArray, "Shifted element:", shifted);
    
    // 4. unshift
    stringArray.unshift("fig");
    console.log("After unshift:", stringArray);
    
    // 5. slice
    const sliced = stringArray.slice(1, 3);
    console.log("Sliced elements (1 to 3):", sliced);
    
    // 6. splice
    const spliced = stringArray.splice(2, 1, "grape");
    console.log("After splice (replacing index 2 with 'grape'):", stringArray, "Spliced elements:", spliced);
    
    // 7. indexOf
    const index = stringArray.indexOf("banana");
    console.log("Index of 'banana':", index);
    
    // 8. join
    const joined = stringArray.join(", ");
    console.log("Joined String Array:", joined);
    
    // 9. reverse
    const reversed = [...stringArray].reverse();
    console.log("Reversed String Array:", reversed);
    
    // 10. sort
    const sorted = [...stringArray].sort();
    console.log("Sorted String Array:", sorted);
    
    // 11. includes
    const includesBanana = stringArray.includes("banana");
    console.log("'banana' is in the array:", includesBanana);
    
    // 12. forEach
    console.log("Using forEach:");
    stringArray.forEach((item) => {
        console.log(item);
    });
}

stringarraymethods();

//You will create a String -> Use Minimum -> 15 Strings Methods on them and show them in the console area


function stringmethods(str) {
    console.log("Original String:", str);    
    // 1. charAt
    console.log("Character at index 5:", str.charAt(5));    
    // 2. concat
    const newStr = str.concat(" and enjoying it!");
    console.log("After concat:", newStr);  
    // 3. includes
    console.log(str.includes("Pooja")); 
    // 4. indexOf
    console.log(str.indexOf("am")); 
    // 5. lastIndexOf
    console.log(str.lastIndexOf("am"));  
    // 6. replace
    const replacedStr = str.replace("JavaScript", "JS");
    console.log("After replace:", replacedStr);  
    // 7. slice
    const slicedStr = str.slice(3, 10);
    console.log("Sliced string (3 to 10):", slicedStr); 
    // 8. split
    const splitStr = str.split(" ");
    console.log("Split string by space:", splitStr);
    // 9. toLowerCase
    console.log("Lowercase:", str.toLowerCase());  
    // 10. toUpperCase
    console.log("Uppercase:", str.toUpperCase());
    //11.length
    console.log("Length of the string:", str.length);
    // 12. substring
    const substringedStr = str.substring(3, 10);
    console.log("Substring (3 to 10):", substringedStr);
    // 13. startsWith
    console.log("Does the string start with 'Hi'? :", str.startsWith("Hi"));    
    // 14. endsWith
    console.log("Does the string end with 'JavaScript'? :", str.endsWith("JavaScript"));  
    // 15. repeat
    const repeatedStr = "Hello ".repeat(3);
    console.log("Repeated string:", repeatedStr);
}

str1 = "Hi I am Pooja, I am learning JavaScript";
stringmethods(str1);

//You will create a Math Number - 4 to 5 numbers -> Use Minimum -> 20 Math Methods and show them in the console area
function mathmethods() {
    const numbers = [12, 5, 8, 130, 44];
    console.log("Original Numbers:", numbers);
    
    // 1. Math.max
    console.log("Max number:", Math.max(...numbers));
    
    // 2. Math.min
    console.log("Min number:", Math.min(...numbers));
    
    // 3. Math.round
    console.log("Rounded value of 4.7:", Math.round(4.7));
    
    // 4. Math.ceil
    console.log("Ceiling value of 4.1:", Math.ceil(4.1));
    
    // 5. Math.floor
    console.log("Floor value of 4.9:", Math.floor(4.9));
    
    // 6. Math.random
    console.log("Random number between 0 and 1:", Math.random());
    
    // 7. Math.pow
    console.log("2 raised to the power of 3:", Math.pow(2, 3));
    
    // 8. Math.sqrt
    console.log("Square root of 16:", Math.sqrt(16));
    
    // 9. Math.abs
    console.log("Absolute value of -10:", Math.abs(-10));
    
    // 10. Math.sin
    console.log("Sine of π/2:", Math.sin(Math.PI / 2));
    
    // 11. Math.cos
    console.log("Cosine of π/2:", Math.cos(Math.PI / 2));
    
    // 12. Math.tan
    console.log("Tangent of π/4:", Math.tan(Math.PI / 4));
    
    // 13. Math.log
    console.log("Natural logarithm of e:", Math.log(Math.E));
    
    // 14. Math.exp
    console.log("Exponential of 1 (e^1):", Math.exp(1));
    
    // 15. Math.sign
    console.log("Sign of -5:", Math.sign(-5));
    
    // 16. Array.prototype.sort with a custom comparator
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    console.log("Sorted numbers in ascending order:", sortedNumbers);
    
}

mathmethods();
