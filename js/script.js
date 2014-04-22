// Javascript

// Scroll all the way to the top
function scrollToTop(){
	$('html, body').animate({scrollTop: 0}, 1000, 'swing');
}

// Scroll to section
function scrollTo(event) {
	event.preventDefault();
	var diff = $(document).height() - $(window).height();
	var dest = ($(this.hash).offset().top > diff) ? diff : $(this.hash).offset().top;
	switch ($(this).context.hash) {
		case '#about-me': dest += $('#portfolio-header').height() + 65; break;
		case '#skills': dest -= $('#skills h1').height() + 10; break;
		case '#portfolio-header': dest -= $('#portfolio-header').height() + 5; break;
	}
  $('html, body').animate({scrollTop: dest}, 1000, 'swing');
}

// About-Me Animation
function aboutMeBanner(){
	$('.about-me-banner').delay(800).animate({bottom: 0}, 800, 'swing');
}

// Description Animation
function descriptionAnimation(){
	$('#description p').animate({opacity: 1, left: '10%'}, 1000, 'swing');
	$('#description img').animate({opacity: 1, right: '10%'}, 1000, 'swing');
}

// I-AM Not Animation
function resizeNotText(){
	$('#competencies h3 span')
		.animate({fontSize: 58, top: 68, right: 128}, 800, 'swing', function(){
			$(this).animate({fontSize: 50, top: 76, right: 136}, 800, 'swing');
		});
}

// Arranging the skills in a circle
function distributeSkills() {
  var radius = 160;
  var fields = $('.skill'), container = $('.front-end'),
    width = container.width(), height = container.height(),
    angle = 0, step = (4*Math.PI) / fields.length;

  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    $(this).css({left: x + 'px', top: y + 40 + 'px'});
    angle += step;
  });
}

// Text in skills is rounded
function textToCircle(){
	$('.skill h3').circleType({ radius:42 });
}

// Make the inner skill level
function skillsInnerCircles(){
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
			radius:     25,
			width:      25,
			number:   	percentage,
			text:       '%',
			colors:     colors[i - 1]
		});
	}
}

// Build the skill section
function skills(){
	textToCircle();
	//distributeSkills();
	skillsInnerCircles();
}

// Timing the effects based on position on screen
function manageEffects(){
	var pos = $(window).scrollTop();
	switch (true){
		case (pos >= 0 && pos < 370): descriptionAnimation(); aboutMeBanner(); break;
		case (pos == 370): resizeNotText(); break;
		case (pos >= 1000): skillsInnerCircles(); break;
	}
}
function manageEffectsPlain(){
	descriptionAnimation();
	aboutMeBanner();
	resizeNotText();
}

// Handle all events handlers
function eventHandlers(){
	manageEffectsPlain();
	//$(window).on('scroll', manageEffects);
	$('nav a').on('click', scrollTo);
	$('.logo').on('click', scrollToTop);
	$('.sticky').sticky({ topSpacing: 0 });
}

$(function() {
	eventHandlers();
	skills();
});