/*=================index========================*/
//variables
var subheading = document.getElementById('subheading');
var slider = document.getElementById('slider');

//functions
text_change = function (){
    slider.style.fontSize = 32 + 'px';
    subheading.innerHTML = 'Capturing Nature';
    subheading.style.padding = 20 + 'px';
    
    slider.style.transition = 'all 500ms linear';
}

//events
window.onload = function(){
    
    setTimeout(text_change, 2000);
    
    setTimeout(function() {
        slider.style.background = '#6A9C23';}, 2500);
        
};



