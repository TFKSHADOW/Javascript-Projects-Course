function updateContent() {
    // Assign values to two variables
    let name = "John";
    let number1 = 5, number2 = 10;

    // Update HTML content using document.getElementById
    document.getElementById("message").innerHTML = "Hello, " + name + "!";
    document.getElementById("sumResult").innerHTML = "Sum result: " + (number1 + number2);
};


function addText() {
    document.getElementById("concatenate").innerHTML += " and this is the continuation.";
}