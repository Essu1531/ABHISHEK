let navbar = document.querySelector('nav');
let menuLinks = document.getElementById("menuitems");

        function toogleMenu(){
            let nav = 
            document.querySelector('.menuitems');
            nav.classList.toggle('show-menu');
  
        }
window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = 'transparent';
    }
    else{
        navbar.style.background = 'transparent';
    }

}

var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +50 +"px"
    crsr.style.top = dets.y + 50 + "px"
    blur.style.left = dets.x - 40 +"px"
    blur.style.top = dets.y - 20 +"px"
    
})

