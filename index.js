var buttonColours = ["blue", "purple", "greenyellow", "red", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$("#startgame").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btnhw").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } 
    else {

        $("#level-title").text("You Failed");
      
        var a1 = new Audio("sound/lose.m4a");
  a1.play();
bodycolor();
restart();

    }

}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 5);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sound/" + name + ".m4a");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
},1000);
}



function bodycolor() {
  $("#bodyclr").addClass("bdyclr");
  setTimeout(function () {
    $("#bodyclr").removeClass("bdyclr");
},2200);
}



function restart(){
  level=0;
  gamePattern=[];
  started=false;
  setTimeout(function () {
    $("#level-title").text("Click Play To Restart The Game.");
},1500);

}














// //Array for Putting Value for Colours
// var mycolor = ["blue", "purple", "greenyellow", "red", "yellow"];


// //Empty array for button to check if the button is clicked or  not
// let btnary=[];

// //First Arraw for Random Generation of Colour
// var nwary=[];


// var start=false;
// var level=0;


// $("#startgame").click(function(){
// if(!start){
// $("#level-title").text("Your Level is "+level);
// nextseq();
// start=true;
// }
// });


// function anschk(clvl){
// if(nwary[clvl]===btnary[clvl]){
// alert("You Did It.");
// }
// if(nwary.length===btnary.length){
//     setTimeout(function(){
//         nextseq();
//     },1000);
// }
// else{
//     alert("You Lost.");
// }
// }


// function nextseq() {

//      Math.floor(Math.random() * 5);

//      var randomnumber = nextseq();

// var randomcolor = mycolor[randomnumber];

// nwary.push(randomcolor);

// $("#" + randomcolor).fadeIn(1000).fadeOut(1000).fadeIn(1000);

// playsound(randomcolor);
    
// }



// function playsound (name) {
//     var audio = new Audio("sound/" + name + ".m4a");
//     audio.play();
// }
 
 
// $(".btnhw").click( function () {

// var usclr = $("this").attr("id");
// btnary.push(usclr);
// playsound(usclr);
// anipress(usclr);
// anschk((btnary.length)-1);

// });




// //fuction which used to call click on main fucntion

// function anipress(currentclr){
// $("#"+currentclr).addClass("pressed")
// setTimeout(function(){
//     $("#"+currentclr).removeClass('pressed');},500);
// }






