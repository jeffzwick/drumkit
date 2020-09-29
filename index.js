//Detecting Button press

//count number of buttons with drum class
var numberOfButtons = document.querySelectorAll(".drum").length;  

//loop through each button and add event listener to each
for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;  //"this" is the identity of the button object that triggered the event listener
       
        makeSound(buttonInnerHTML);   
        
        buttonAnimation(buttonInnerHTML);

    });
}                  

//detecting keyboard press

document.addEventListener("keydown", function(event) {  //function triggered on any keydown

    //console.log(event);  this would show the keyboard event in detail.  for ex: "a" pressed the keyboard event will have key: "a" 
    makeSound(event.key);   //send the key property of the event to makeSound

    buttonAnimation(event.key); //send the key property of the event to buttonAnimation

});

function makeSound(key) {

    switch (key) {        //look for event key, find x and assign event listener y
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
            
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

            break;

        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;

        default: console.log(this.innerHTML);   //this is like else statement
            break;
    }
}


function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);  //period used for class with key letter
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
        }, 100);
}

