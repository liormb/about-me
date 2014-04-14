// Javascript

function aboutMeBanner(){
	$('.about-me-banner').delay(800).animate({bottom: 0}, 800, 'swing');
}

function resizeNotText(){
	$('#competencies h3 span').delay(800)
		.animate({fontSize: 58, top: 68, right: 128}, 600, 'swing', function(){
			$(this).animate({fontSize: 50, top: 76, right: 136}, 600, 'swing');
		});
}

function scrollTo(event) {
	event.preventDefault();
	var diff = $(document).height() - $(window).height();
	var dest = ($(this.hash).offset().top > diff) ? diff : $(this.hash).offset().top;
	switch ($(this).context.hash) {
		case '#about-me': dest += $('#portfolio-header').height() + 65; break;
		case '#skills': dest -= $('#skills h1').height() + 10; break;
		case '#portfolio-header': dest -= $('#portfolio-header').height() + 5; break;
	}
	//if (dest <= 480) dest = 0;
  $('html, body').animate({scrollTop: dest}, 1000, 'swing');
}

function distributeFields() {
  var radius = 200;
  var fields = $('.skill'), container = $('.front-end'),
    width = container.width(), height = container.height(),
    angle = 0, step = (4*Math.PI) / fields.length;

  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  });
}

function skillsCircles(){
	var colors = [
		['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43'],
		['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43'],
		['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558']
	];

	for (var i = 1; i <= 14; i++) {
		var child = document.getElementById('circles-' + i),
			percentage = Math.floor((Math.random()*50)+50);

		Circles.create({
			id:         child.id,
			percentage: percentage,
			radius:     35,
			width:      35,
			number:   	percentage,
			text:       '%',
			colors:     colors[i - 1]
		});
	}
}

function textToCircle(){
	$('.skill h3').circleType({ radius:60 });
}

function pageEffects(){
	aboutMeBanner();
	resizeNotText();
	skillsCircles();
	textToCircle();
	distributeFields();
}

function eventHandlers(){
	$('.sticky').sticky({ topSpacing: 0 });
	$('nav a').on('click', scrollTo);
	$('.logo').on('click', function(event){ $('html, body').animate({scrollTop: 0}, 1000, 'swing'); });
}

$(function() {
	eventHandlers();
	pageEffects();
});