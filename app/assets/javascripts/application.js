// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//ISS animation
    $( document ).ready(function() {
        $('#iss').animate({"top": "30%",  "right": "110%"}, 30000, "linear");
        $('.slider').glide({
            autoplay: 3000000,
            nav: false,
            arrowLeftText : "<",
            arrowRightText: ">",
            // beforeTransition:$('.description>p').fadeOut( 200, function() {}),
            afterTransition: $('.description>p').fadeIn( 2000, function() {})
        });
    });

//Demo card AJAX
$('a#demo').click(function(e){
    alert("clucked");
    e.preventDefault;
    $.get('/demo_card').success(function(){
      alert('demo card sent');
    });
});