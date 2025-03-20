// JavaScript Function for Addition
function addNumbers() {
    let result = 5 + 7; // Example addition operation
    document.getElementById("Math").innerHTML = "5 + 7 = " + result;
}


// JavaScript Function for Subtraction
function subtractNumbers() {
    let result = 15 - 7; // Example subtraction operation
    document.getElementById("Math2").innerHTML = "15 - 7 = " + result;
}


//JavaScript Function for Multiplication
function multiplyNumbers() {
    let result = 8 * 6; // Example multiplication operation
    document.getElementById("Math3").innerHTML = "8 × 6 = " + result;
}


//JavaScript Function for Division

function divideNumbers() {
    let result = 85 / 6; // Example division operation
    document.getElementById("Math4").innerHTML = "85 / 6 = " + result;
}


// Calculation Assignment
function calculateOperations() {
    let result = ((5 + 3) * 4 / 2) - 6; // Example operations
    document.getElementById("Math5").innerHTML = 
        "5 plus 3, multiplied by 4, divided by 2, then subtracted by 6 equals " + result;
}

// Modulus Assignment

function modulusExample() {
    let remainder = 30 % 7; // Example modulus operation
    document.getElementById("Math6").innerHTML = 
        "When you divide 30 by 7, you have a remainder of: " + remainder;
}

//Negation challenge

function negationExample() {
    let number = 120;
    let negatedNumber = -number; // Negation operator
    document.getElementById("Math7").innerHTML = 
        "The negation of 120 is: " + negatedNumber;
}


//Increment

function incrementOp() {
    let X = 30; 
    X++;
    document.getElementById("Math8").innerHTML = 
        "X=30 after using X++ is " + X;
}

//Decrement

function decrementOp() {
    let y = 30; 
    y--;
    document.getElementById("Math9").innerHTML = 
        "y=30 after using y++ is " + y;
}

//Generate a Random Integer (1-100)

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number 1-100
    document.getElementById("Math10").innerHTML = 
        "Here is a random number between 1 and 100: " + randomNumber;
}

//Math Object Challenge

function useMathObject() {
    let result = Math.sqrt(64); // Calculate square root of 64
    document.getElementById("Math11").innerHTML = 
        "The square root of 64 is: " + result;
}
