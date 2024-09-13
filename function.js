// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(w,x,y,z){
    const result = w*x*y*z;
    return result;
}
console.log(multiply(1, 2, 3, 4)); 

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEvenDecition(x){
    
    if(x % 2 !== 0){
        let y = x*2;
        return y;
    }
    else{
        let y = x/2;
        return y;
    }
}
console.log(oddEvenDecition(3));
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(){
    let a = [1,2,3,34,4,5,5,6,6,6,76];
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        count = count + a[i];
    }
    let avg = count/a.length;
    return avg;
}
console.log(make_avg());
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(){
    let binary = "0101010111001010101"
    let count1 = 0;
    for(let i =0 ; i< binary.length; i++){
        if (binary[i] === "0"){
            count1 = count1 + 1;
        }
    }
    return count1;
}
console.log(count_zero());
// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
    if (num % 2 === 0) {
        return "Even";  
    } else {
        return "Odd";  
    }
}

console.log(odd_even(4));  
console.log(odd_even(7)); 