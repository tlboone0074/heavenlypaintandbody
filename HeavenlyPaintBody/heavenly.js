/* when the user presses the submit Button, change the greeting to include their name*/


//get access to the button and set up a click event handler.
var button = document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h2")[0];  //an array to obtain the first h1 element on the page.
                                                            //getting access to the greeting heading.
    var input = document.getElementById("name").value;  //get access to the textbox and pulling the value the user inputted.
    greeting.innerHTML = "Hello, " + input;             //change the value of the textbox to the username.
}