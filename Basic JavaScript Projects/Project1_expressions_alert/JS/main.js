// window.alert('Hello World');
document.write('Hello World');


var S = "<br>This is the S string";
document.write(S);


// String Assignment

var stringAssignment = "this is 2nd assignment";
window.alert(stringAssignment);

// Escape Character Assignment

var escape ="<br>this sentence has a don\'t" ;
document.write(escape);

//Concatenated Challenge
document.write("<br>this is " + " " + "a solo" + " " + "ca percutia");

//Concatenated String Challenge

var alfa = "<br>this is " + " " + "a solo" + " " + "ca percutia 2";
document.write(alfa);

//Multiple Variables Assignment
 var beta = "java" , teta = "<br>lord e la munca<br>";
document.write(teta);

//Expression Assignment
document.write(12*12);


// Basic JavaScript Projects Assignment

var Sent1 = "This is the begining";
var Sent2 = " of this string";
var c = "<br>" + Sent1 +  Sent2 +"<br>" ;   //Concatenate the Sent1 and Sent2 variables together.
document.write(c);
document.write(Sent1 + Sent2);

// other events, on_click  --  when you click the button, the current time will be displayed inside the <h1> tag

function clickMePlease() {
    document.getElementById('demo').innerHTML=Date();
}

