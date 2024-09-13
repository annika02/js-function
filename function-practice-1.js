// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function toFahrenheit(Celsius){
    const Fahrenheit = (Celsius * 9/5) + 32 ;
    return Fahrenheit;
}
console.log(toFahrenheit(1));
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
function find(numbers,x){
    count = 0;
    for(let i =0; i<numbers.length; i++){
        if (numbers[i] === x){
            count ++;
        }
    }
    return count;
}
console.log(find([5, 6, 11, 12, 98, 5], 5));  
console.log(find([5, 6, 11, 12, 98, 5], 25)); 
// Task-3:
// Write a function to count the number of vowels in a string.
function countVowels(string) {
    let count = 0; 
    const vowels = "aeiou"; 

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {  
            count++;
        }
    }

    return count;
}

console.log(countVowels("anika")); 

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
function longest(sentence){
    const words = sentence.split(" ");
    let largest = words[0];
    for(let i = 0; i<words.length; i++){
        if(words[i].length>largest.length){
           largest = words[i];
        }
    }
    return largest;
}
console.log(longest("I am learning Programming to become a programmer."));
// Task-5:
// Generate a random number between 10 to 20.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(10, 20));
