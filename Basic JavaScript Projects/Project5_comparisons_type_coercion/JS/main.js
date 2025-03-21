//type of function

function showDataType() {
    let myVariable = true; // Example variable
    document.getElementById("alpha").innerHTML = 
        "The data type of myVariable is: " + typeof myVariable;
}




// type coercion

function showTypeCoercion() {
    let number = 10; 
    let text = "5";

    let result = number + text; // Type coercion happens here (number becomes a string)
    
    document.getElementById("beta").innerHTML = 
        `"10" (number) + "5" (string) results in: ` + result + `<br> Data type after coercion: ` + typeof result;
}


// Not a Number NAN

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("0007");
}



//infinity +
function positi() {
    document.getElementById("pos").innerHTML = 2E310;
}
//infinity -
function negati() {
    document.getElementById("neg").innerHTML = -3E310;
}

//BOOLEAN true
function checkTrue() {
    let result = 10 > 5; // True condition
    document.getElementById("trueResult").innerHTML = 
        "10 is greater than 5: " + result;
}

//BOOLEAN false
function checkFalse() {
    let result = 3 > 8; // False condition
    document.getElementById("falseResult").innerHTML = 
        "3 is greater than 8: " + result;
}

//console.log()  assignment
function add2Numbers() {
    let results = 2+5;
    console.log(results);
}

// boolean console log

function compareNumbers(a, b) {
    let result = a < b; // Boolean comparison
    console.log(a + " > " + b + " evaluates to:", result);
}
console.log(compareNumbers(7,2));


//Double Equal Signs Assignment

function returnTrue2() {
    let result = (5 + 5) == 10; // True condition
    document.getElementById("trueResult2").innerHTML = 
        "(5 + 5) == 10 evaluates to: " + result;
}

function returnFalse2() {
    let result = (3 + 2) == 8; // False condition
    document.getElementById("falseResult2").innerHTML = 
        "(3 + 2) == 8 evaluates to: " + result;
}



//Triple Equal Signs Assignment

// ✅ Return true (same value & same type)
function returnTrue3() {
    let result = (20 === 20); // Same number and type
    document.getElementById("trueMatch").innerHTML = 
        "20 === 20 evaluates to: " + result;
}

// ❌ Return false (different type & different value)
function returnFalseDifferentTypeValue() {
    let result = (10 === "50"); // Number vs String, Different value
    document.getElementById("falseDifferentTypeValue").innerHTML = 
        "10 === '50' evaluates to: " + result;
}

// ❌ Return false (same value, different type)
function returnFalseSameValueDifferentType() {
    let result = (100 === "100"); // Same number, different type (string)
    document.getElementById("falseSameValueDifferentType").innerHTML = 
        "100 === '100' evaluates to: " + result;
}

// ❌ Return false (same type, different value)
function returnFalseSameTypeDifferentValue() {
    let result = (7 === 9); // Same type (number), different values
    document.getElementById("falseSameTypeDifferentValue").innerHTML = 
        "7 === 9 evaluates to: " + result;
}
