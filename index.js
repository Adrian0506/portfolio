var prevScrollPos = window.pageYOffset;
var counter = 0;
/* window.onscroll = function () {
      var currentScrollpos = window.pageYOffset;
     if (prevScrollPos > currentScrollpos) {
         document.getElementById('navbar').style.top = '-20px';
     } else {
         document.getElementById('navbar').style.top = '-100px'
     }
     prevScrollPos = currentScrollpos
  } */

  $(document).ready(function(){
    $('html').scroll(function(){
        $("#navi").fadeOut("slow");
    });
  });