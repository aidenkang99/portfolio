var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;
var arr = [];

// content for things that go into <p> later
var t0 = 'Visual Communication Project: "Strong" vs. "Weak"';
var exp0 = 'Two words are visually colliding. "Strong" occupies the majority of space in this work, whereas "Weak" only takes up one tiny edge. Every "Strong" is attached with a hashtag that conveys an institutional, collective attack on one single individual. "Strong" is filled with bold black color boasting in front of the viewers, but the hollow structure of "weak" shows a stark contrast to "strong" by implying the physical weakness and emptiness.';

var t1 = 'Visual Communication Project: "Raise" vs. "Lower"';
var exp1 = 'This work draws an anology of a symbol that we most commonly see in front of an elevator. The end of most "Raise" pieces are facing upwards, but the end of most "Lower" pieces are facing downwards. With the dynamic motion of each piece, the artist is giving viewers an intuitive sense of what each word means without having to offer any definition.';

var t2 = 'Visual Communication Project: "Constant" vs. "Changeable"';
var exp2 = 'One big word in the center instantly draws the attention of the viewers. There is an imaginary rectangular space that houses the word "Constant", and the all capital letters of "Contant" convey a sense of unchangeability and stability. In the very four corners of this piece lie numerous pieces of "Changeable" that takes in different forms. The variability of "Changeable" creates a tension between the stability of "Constant".';

var t3 = "Logo Design for Project log'em";
var exp3 = "On top of the dark black background, the artist placed five white letters, log'em. The apostrophe that separates 'log' and 'em' not only works as a semantic separation between 'log' and 'em' but also convey a very retro feeling. If the apostrophe was taken out, this logo could have been dry, but the artist's decision to place an apostrophe between 'log' and 'em' makes this logo more humanistic.";

var t4 = 'Magazine Design: "Dancheong"';
var exp4 = '"Dancheong" literally means "red and green" in Korean. This refers to the beautiful five-colored designs often found on Korean traditional wooden buildings. In order to embody the aesthetic philosophy of Dancheong, this magazine piece was designed only with the five colors of Dancheong: blue, red, white, black, and yellow. While the dynamic harmony among five colors in the magazine design may look chaotic at first, by pairing that chaos with minimalistic title design on the left, the artist maintains a visual balance between silence and noise.';


var art0 = new Art(t0, exp0, "strong.png");
var art1 = new Art(t1, exp1, "lower.png");
var art2 = new Art(t2, exp2, "constant.png");
var art3 = new Art(t3, exp3, "logem.png");
var art4 = new Art(t4, exp4, "magazine.png");

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
    $("#info").hide();
    for (var i in arr){
        $("#image" + i).attr("src", arr[i].image);
    }
}

// displays information when  needed
function info(num){
    $("#name").hide().html(arr[num].name).fadeIn(1000);
    $("#info").hide().html(arr[num].explanation).fadeIn(1000);
}

$(document).ready (
	function() 
	{   		
        init();
        info(0);        // default
    }
);

