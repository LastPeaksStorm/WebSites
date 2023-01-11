$(document).on("keydown", function(event) {
    if(event.key === "A" || event.key === "a"){
        $(document).off("keydown");
        StartGame();
    }
})

function StartGame(){
    Game();
}
async function Game(){
    var level = 1;
    var colorsOrder = [];
    while(true){
        $("#level-title").text("Level " + level);
        var randColor = GenerateRandomSquareColor();
        colorsOrder.push(randColor);

        ButtonFade(randColor);
        ButtonSound(randColor);
        for(var i = 0; i < colorsOrder.length; i++){
            var color;
            const eventId = await waitForClick($(".btn"));
            ButtonPress(eventId);
            ButtonSound(eventId);

            if(colorsOrder[i] !== eventId){
                await GameOver();
            }
        }
        level++;
        await sleep(1000);
    }
}


function GenerateRandomSquareColor(){
    var colors = [ "green", "red", "yellow", "blue" ];
    var rand = Math.floor(Math.random() * 4);
    return colors[rand];
}

function ButtonPress(color){
    $("#" + color).addClass("pressed"); //ex: #red
    setTimeout(function() {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function ButtonSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function ButtonFade(color){
    $("#" + color).fadeOut(100).fadeIn(100);
}

async function GameOver(){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    await waitForKeyPress(document);
    $("body").removeClass("game-over");
    StartGame();
}

async function waitForClick(element) {
    // create new promise
    return new Promise(function(resolve) {

      const handler = function (event) {
        // when button is clicked remove listener
        element.off("click", handler);

        // and resolve the promise
        resolve(event.target.id);
      };
      // listen for click
      element.on("click", handler);

    });
  }

  async function waitForKeyPress(element) {
    // create new promise
    return new Promise(function(resolve) {

      var handler = function (event) {
        // when button is clicked remove listener
        element.off("keydown", handler);

        // and resolve the promise
        resolve(event);
      };
      // listen for click
      element.on("keydown", handler);

    });
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
  }
