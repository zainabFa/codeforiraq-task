//best viewed in google-chrome
requestAnimatonFrame = requestAnimationFrame || webkitRequestAnimaitonFrame || mozRequestAnimationFrame || msRequestAnimationFrame;

// carousel 

var button = null;
var count = 0;
var counter;

carousel ();

function carousel (){
  
  var indexSlide = document.getElementsByClassName("slide");
    for (var i = 0; i < indexSlide.length; i++ ){
       indexSlide[i].classList.remove("active"); 
    };
  
  count++;
  
  if (count > indexSlide.length) {
    count = 1;
    
    indexSlide[count - 1].classList.add("active");
    } else {
    indexSlide[count - 1].classList.add("active");
  };
};

function newCarousel(button){
  
  var indexSlide = document.getElementsByClassName("slide");
    for (var i = 0; i < indexSlide.length; i++ ){
       indexSlide[i].classList.remove("active"); 
  };

  if( button !== null ) {
      indexSlide[button].classList.add("active");
  }
};


// bar - duration

var slideTime = 5; //seconds
var length = slideTime * 1000;
var progressTime = length / 100 ;



//progress bar 

  
window.onload = progressBar;

function progressBar(slideTime){ 

  var start = Date.now();

  var id =  window.setInterval(draw, progressTime);

  var target = document.getElementsByClassName("feedback-slider-nav-dot-anim")[count - 1];


  function draw() {
    var delta = 100 * (Date.now() - start) / length;

    if ( delta > 100 ){
        delta = 100;   
        target.style.width = 0 + "px";     
        clearInterval(id); 
    } else {        
      target.style.width = (Math.round(delta) + "%");    
    }
  };    
};


var reId;

function newProgressBar( slideTime, button){ 

  start = Date.now();
  
  reId =  window.setTimeout(reDraw, progressTime);
  

  var newTarget = document.getElementsByClassName("feedback-slider-nav-dot-anim")[button];
  var resetTarget = document.getElementsByClassName("feedback-slider-nav-dot-anim");

  function reDraw() {
    
    delta = 100 * (Date.now() - start) / length;
  
    if ( delta > 100 ){
      delta = 100;   
        newTarget.style.width = 0 + "px";  
        clearTimeout(reId); 
      } else {           
        for(var j = 0; j < resetTarget.length ; j++ ){          
        resetTarget[j].style.width =  0 + "%";
      }        
      newTarget.style.width = (Math.round(delta) + "%");
      requestAnimationFrame(reDraw);
      }
    };
};

// nav-dot click

function click(e) {

  if ( e.target && e.target.nodeName == 'LI' ) {
      var click = document.getElementById('slider-dots');
      for (var h = 0, len = click.children.length; h < len; h++){
        (function(button){
          click.children[h].onclick = function(){
                count = button + 1;   
                stopLoop();                          
                newCarousel(button);                 
                clearTimeout(reId);
                newProgressBar(slideTime, button);          
                loop();                     
          };   
        })(h);
      }
  };
 
};
window.document.querySelector('.feedback-slider-nav-wrapper').addEventListener( 'click', click, true);
// window.document.querySelector('.feedback-slider-nav-wrapper').removeEventListener( 'click', click, true);

var set;
function loop(){
  set = window.setTimeout( function ouy (){
      carousel();
      progressBar(slideTime);
      set = setTimeout(ouy, length);       
    },length);
  };
loop();

function stopLoop() {
    clearTimeout(set);
};
//  // get browser width
 window.addEventListener("resize", resized);
  function resized(){
    var index = document.getElementsByClassName("feedback-image-wrapper");
     if ( window.innerWidth > 1230 ){
       
         var wpicf = this.innerWidth / 2 + 102.5;
        
         for (var i = 0; i < index.length; i++ ){
            index[i].style.width = wpicf + "px";
         }
       } else {
        
         wpicf = ((this.innerWidth * 7) / 12) - 5;
       
         for ( i = 0; i < index.length; i++ ){
            index[i].style.width = wpicf + "px";
         }
       }
  }
//# sourceURL=pen.js
