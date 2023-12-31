

$(".drum").each(function(){
  $(this).on("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
})

$(document).on("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/w.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/a.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/s.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/d.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/j.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/k.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/l.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = $("." + currentKey);

  activeButton.addClass("pressed");

  setTimeout(function() {
    activeButton.removeClass("pressed");
  }, 100);

}
