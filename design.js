var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;
var arr = [];

// content for things that go into <p> later
var exp0 = 'Visual Communication Project: "Strong" vs. "Weak"';
var exp1 = 'Visual Communication Project: "Raise" vs. "Lower"';
var exp2 = 'Visual Communication Project: "Constant" vs. "Changeable"';
var exp3 = "Logo Design for Project log'em";
var exp4 = 'Magazine Design: "Dancheong"';
var art0 = new Art("Composition VII by Wassily Kandinsky", exp0, "strong.png");
var art1 = new Art("Mountains and Sea by Helen Frankenthaler", exp1, "lower.png");
var art2 = new Art("Christina’s World by Andrew Wyeth", exp2, "constant.png");
var art3 = new Art("Christ’s Entry into Brussels by James Ensor", exp3, "logem.png");
var art4 = new Art("Golconda by René Magritte", exp4, "magazine.png");

arr.push(art0);
arr.push(art1);
arr.push(art2);
arr.push(art3);
arr.push(art4);

// counter for the index of the displayed carousel
var curr = 0;

// set img src to #
// $(#image) + i.attr("src", gallery[i].image)

function Art(name, explanation, image) {
    this.name = name;
    this.explanation = explanation;
    this.image = image;
}

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-275px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('#previous');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  curr--;
  rotateCarousel();
  if (curr < 0){            // edge case
      curr = 4;
  }
  info(curr);
});

var nextButton = document.querySelector('#next');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  curr++;
  rotateCarousel();
  if (curr > 4){            // edge case
      curr = 0;
  }
  info(curr);
});

// initializes the image source attributes
function init(){
    $("p").hide();
    for (var i in arr){
        $("#image" + i).attr("src", arr[i].image);
    }
}

// displays information when  needed
function info(num){
    $("#info").hide().html(arr[num].explanation).fadeIn(1000);
}

$(document).ready (
	function() 
	{   		
        init();
        info(0);        // default
    }
);

