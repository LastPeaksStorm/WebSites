for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.onkeydown = (e) => { 
    makeSound(e.key);
    buttonAnimation(e.key);
 };

function makeSound(key){
    var audio;
    switch(key){
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
    }
    audio.play();
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 60);
}

// function anotherEventListener(typeOfEvent, callback){
//     var eventThatHappened = {
//         eventType: "keypress",
//         key: "s"
//     }
//     if(eventThatHappened.eventType = typeOfEvent){
//         callback(eventThatHappened);
//     }
// }

// anotherEventlistener("keypress", function(e){ alert(e); });
