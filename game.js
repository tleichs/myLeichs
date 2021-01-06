console.log($("#count a").length);
$("#count a").each(function(index, value) {

    console.log(index + " " + value)

})




$(".dois").on("click", function() {
    $(".set2").slideToggle()
})

var buttonWords = ["Das Auto", "Der Zug", "Der Bus", "Die Bahn", "Das Fahrrad", "Das Flugzeug"]
var buttonColours = ["red", "blue", "green", "yellow", "black", "white"];
var gamePattern = []
var userClickedPattern = []

var level = 0
var started = false;


$(".btn2").on("click", function() {

    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
})

$(document).on('keydown', function(e) {
    if (e.which == 13) {

        var userChosenColour = $(this).attr("id");
        var inputWord = $('.um').val();


        userClickedPattern.push(inputWord);

        playSound(inputWord);

        animatePress(userChosenColour);

        //nextSequence()


        checkAnswer(userClickedPattern.length - 1)
        console.log(userClickedPattern.length - 1)

    }
});
// $(document).keypress(function() {
// if (level === 0) {}
// });






function checkAnswer(currentLevel) {

    console.log(gamePattern + " gp")
    console.log(currentLevel + " CL")
    console.log(userClickedPattern + " us")
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {


        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function() {
                nextSequence();
            }, 1000);

        }

    } else {

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver()


    }
}

function nextSequence() {

    userClickedPattern = [];
    level++;


    $("#level-title").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 6);
    var colour = randomNumber
    var word = randomNumber
    console.log(word)

    var randomChosenWord = buttonWords[word];
    var randomChosenColour = buttonColours[colour];



    gamePattern.push(randomChosenWord);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenWord);

}

function startOver() {
    level = 0
    gamePattern = []
}


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}