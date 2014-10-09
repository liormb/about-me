
// ====================================
//               Variables
// ====================================

var sections = ['description','competencies','skills','education','portfolio','contact'];

var $msgElement = 
	'<div class="message shadow">'+
		'<div class="message-container"></div>'+
	'</div>';

var iAm = [
	'Entrepreneur','Genuine','A leader','Professional','Researcher','Explorer','Inventor','Intelligent (academically and socially)',
	'Creative','Family man','Imaginative','Dedicated','A team player','I persevere','Devoted','A man of my word','Eager for knowledge',
	'Hungry to be the best coder that I can be','True to myself','Neat freak','Risk taker'
];

var iAmNot = [
	'Not afraid of hard work','Not afraid to ask questions','Not selfish','Not afraid of challenges','Not afraid to make mistakes',
	'Never get my feathers ruffled','Not Egotistical','Not self centered','Not sloppy','Not pretensive','Not critical of others (just myself)',
	'Not a know it all','Not a follower','Not tolerant of prejudice or racism'
];

var frontEnd = [
	{name: 'HTML5',         value: 95, color: ['#BEE3F7', '#45AEEA']},
	{name: 'CSS3',          value: 95, color: ['#FCE6A4', '#EFB917']},
	{name: 'Bootstrap',     value: 85, color: ['#D3B6C6', '#4B253A']},
	{name: 'JavaScript',    value: 85, color: ['#F8F9B6', '#D2D558']},
	{name: 'jQuery',        value: 90, color: ['#F4BCBF', '#D43A43']},
	{name: 'AJAX',          value: 90, color: ['#D3B6C6', '#4B253A']},
	{name: 'd3.js',         value: 50, color: ['#FCE6A4', '#EFB917']},
	{name: 'AngularJS',     value: 30, color: ['#D3B6C6', '#4B253A']},
	{name: 'Backbone,js',   value: 85, color: ['#BEE3F7', '#45AEEA']},
	{name: 'Underscore.js', value: 85, color: ['#F8F9B6', '#D2D558']},
	{name: 'Handlebars.js', value: 85, color: ['#F4BCBF', '#D43A43']}
];

var backEnd  = [
	{name: 'Ruby',          value: 85, color: ['#F4BCBF', '#D43A43']},
	{name: 'Rails',         value: 80, color: ['#FCE6A4', '#EFB917']},
	{name: 'Sinatra',       value: 95, color: ['#BEE3F7', '#45AEEA']},
	{name: 'PHP',           value: 50, color: ['#F8F9B6', '#D2D558']},
	{name: 'CodeIgniter',   value: 70, color: ['#FCE6A4', '#EFB917']},
	{name: 'MySQL',         value: 65, color: ['#F8F9B6', '#D2D558']},
	{name: 'PostgreSQL',    value: 90, color: ['#D3B6C6', '#4B253A']},
	{name: 'RSpec',         value: 65, color: ['#F4BCBF', '#D43A43']},
	{name: 'Capybara',      value: 60, color: ['#BEE3F7', '#45AEEA']}
];

var projects = [
	{name: 'twendy', image: 'twendy.png', alt: 'Twendy Application', 
	 links: {url: 'http://twendy-app.herokuapp.com/', github: 'https://github.com/liormb/twendy'},
	 stack: ['Ruby on Rails','PostgreSQL','JS','d3',"API's",'RSpec']
	},
	{name: 'tetris', image: 'tetris.png', alt: 'Tetris Application',
	 links: {url: 'http://effectiveshape.com', github: 'https://github.com/liormb/Tetris'},
	 stack: ['HTML5 Canvas','JavaScript','CSS3']
	},
	{name: 'github lab', image: 'githublab.png', alt: 'GithubLab Application',
	 links: {url: 'http://githublab.herokuapp.com/', github: 'https://github.com/liormb/GithubLab'},
	 stack: ['JS','Backbone','Underscore','jQuery','API','Bootstrap']
	},
	{name: 'denatale', image: 'denatale.png', alt: 'DeNatale Jewelers Application',
	 links: {url: 'http://roundidea.com/engagement/engagement_rings', github: 'https://github.com/liormb'},
	  stack: ['PHP','MySQL','HTML5','CSS3','jQuery','AJAX']
	},
	{name: 'block overflow', image: 'blockoverflow.png', alt: 'Block Overflow Application',
	 links: {url: 'http://blogjunky.herokuapp.com/', github: 'https://github.com/liormb/BlockOverflow'},
	 stack: ['Sinatra','PostgreSQL','HTML5','CSS3',"API's"]
	},
	{name: 'checkers', image: 'checkers.png', alt: 'Checkers Application',
	 links: {url: 'http://checkers-js.herokuapp.com/', github: 'https://github.com/liormb/Checkers'},
	 stack: ['HTML5','CSS3','JavaScript','jQuery','jQueryUI','Bootstrap']
	},
	{name: 'words', image: 'words.png', alt: 'Words Application',
	 links: {url: 'http://liormb.com', github: 'https://github.com/liormb/Words'},
	 stack: ['Ruby on Rails','d3','HTML5','CSS3','jQuery','AJAX']
	},
	{name: 'echonest artists', image: 'echonest-artists.png', alt: 'Echonest Artists Application',
	 links: {url: 'http://echonest-artists.herokuapp.com/', github: 'https://github.com/liormb/Echonest-Artists'},
	 stack: ['Ruby on Rails','PostgreSQL','AngularJS','jQuery','Bootstrap','API']
	}
];

var active;
var preActive;
var scrolls;
var animated = {};

// ====================================
//       Extended Array Prototype
// ====================================

Array.prototype.shuffle = function() {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

// ====================================
//           Scroll to Section
// ====================================

// Scroll to the top of the page
function scrollToTop(){
	$('html, body').animate({scrollTop: 0}, 1400, 'swing');
}

// Scroll to section
function scrollTo(event) {
	event.preventDefault();
	var diff = $(document).height() - $(window).height();
	var dest = ($(this.hash).offset().top > diff) ? diff : $(this.hash).offset().top;
	switch ($(this).context.hash) {
		case '#about-me' : dest -= $('header').height(); break;
		case '#skills'   : dest -= $('.skills h1').height() + 10; break;
		case '#portfolio': dest -= $('.portfolio-header').height() + 5; break;
		case '#contact'  : dest -= $('form').height() -390; break;
	}
  $('html, body').animate({scrollTop: dest}, 1400, 'swing');
}

// ====================================
//    Competencies | I-Am & I-Am-Not
// ====================================

function renderCompetencies(data, type){
	var $target = (type === 'i-am') ? $('.i-am') : $('.i-am-not');
	$.each(data.shuffle(), function(index){
		var fontClass = 'font-' + (Math.floor(Math.random() * 5) + 1);
		$target.append('<p class="' +  fontClass + '">' + data[index] + '</p>');
	});
}

function competencies(){
	renderCompetencies(iAm, 'i-am');
	renderCompetencies(iAmNot, 'i-am-not');
}

// ====================================
//                Skills
// ====================================

function renderSkills(data, type){
	var j = (type === 'front-end') ? 0 : frontEnd.length;
	var $target = (type === 'front-end') ? $('.front-end') : $('.back-end');

	$target.append('<h1>'+type+'</h1>');
	
	for (var i = 1; i <= data.length; i++){
		var $circle = '<div id="circle-'+(i+j)+'" class="circle"></div>';
		var $child  = '<div id="skill-'+(i+j)+'" class="skill shadow"><div class="circle-container"></div><h1>'+data[i-1].name+'</h1>'+$circle+'</div>';
		
		$target.append($child);
		
		Circles.create({
			id:         $('#circle-'+(i+j))[0].id,
			percentage: data[i-1].value,
			radius:     25,
			width:      25,
			colors:     data[i-1].color
		});
	}
	$target.find('.skill h1').circleType({radius: 40});
}

function skills(){
	renderSkills(frontEnd, 'front-end');
	renderSkills(backEnd, 'back-end');
}

// ====================================
//              Portfolio
// ====================================

function portfolio(){
	$target = $('.portfolio-container');
	$.each(projects, function(index){

		for (var i=0, $stack='', $tag='&#124'; i < projects[index].stack.length; i++){
			$stack += projects[index].stack[i]+' '+$tag+' ';
		}
		$stack = $stack.substring(0, $stack.length - $tag.length - 2);

		$target.append( 
			'<section class="project shadow">'+
				'<img src="assets/images/'+projects[index].image+'" alt="'+projects[index].alt+'">'+
				'<div class="project-caption ease-transition">'+
					'<h1><a class="slow-transition" href="'+projects[index].links.url+'" target="_blank">'+projects[index].name+'</a></h1>'+
					'<h2>'+$stack+'</h2>'+
					'<a href="'+projects[index].links.github+'" target="_blank" title="Github Repository"><span class="project-github"></span></a>'+
				'</div>'+
			'</section>'
		);
	});
}

// ====================================
//            Form Submission
// ====================================

// Test if an Email is Valid
function isValidEmail(email) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(email);
};

// Conformation Message
function showMessage(message){
	$('body').prepend($msgElement);

	$('.message-container').append('<h1>'+message+'</h1>');
	$('.message').animate({opacity: 1}, 400, function(){
			$(this).delay(2500).animate({opacity: 0}, 400, function(){
				$(this).remove();
			});
		});
}

// Send Email
function formSubmission(event){
	var $form = $(this);
	var $inputs = $form.find('input, textarea');
	var serializeData = $form.serialize();

	$inputs.prop("disabled", true);

	var name  = $('#name').val(),
		  email = $('#email').val();

	if ( name && email && isValidEmail(email) ){
		$.ajax({
			url: 'script/mail.php',
			type: 'POST',
			data: serializeData
		}).done(function(){
			showMessage("Thank you for contacting me<br>Your message has been received");
		}).fail(function(){
			showMessage("Your message can not be send at this moment<br>Please try again later");
		});
		$form.trigger("reset");

	} else showMessage("Your message can not be submitted<br>Please enter a name and a vaild email");

	$inputs.prop("disabled", false);
	event.preventDefault();
}

// ====================================
//          Scrolling Animation
// ====================================

// Description Animation
function animateDescription(){
	$('.description p').animate({opacity: 1, left: 0}, 1000, 'swing');
	$('.description img').animate({opacity: 1, right: 0}, 1000, 'swing');
	animateBanner();
}

// About-Me Animation
function animateBanner(){
	$('.about-me-banner').delay(1000).animate({bottom: 0, opacity: 1}, 800, 'swing');
}

// Highlight the current active menu
function animateMenu(){
	var nth;
	switch(active){
		case 'description' : 
		case 'competencies': nth = 1; break;
		case 'skills'      :
		case 'education'   : nth = 2; break;
		case 'portfolio'   : nth = 3; break;
		case 'contact'     : nth = 4; break;
		default            : nth = 1;
	}
	$('header li.active').removeClass('active');
	$('header li:nth-child('+nth+')').addClass('active');
}

// Competencies animation (I-am/I-am-not)
function animateCompetencies(){
	$('.i-am-not span').animate({fontSize: 65}, 650, function(){
		$(this).animate({fontSize: 50}, 650);
	});
}

// Skills animation
function animateSkillsSet(type){
	var skills = $('.'+type+' .skill');
	var counter = 0;
	var time = 100;
	var interval = setInterval(function(){
		(counter < skills.length) ? 
			$(skills[counter]).animate({opacity: 1, top: 0, left: 0}, time + 150) : 
			clearInterval(interval);
		counter++;
	}, time);
}
function animateSkills(){
	animateSkillsSet('front-end');
	animateSkillsSet('back-end');
}

// Education animation
function animateEducation(){
	$('.hu, .ga').animate({opacity: 1, top: 0, left: 0}, 800);
}

function animateContact(){
	$('.bird').remove();
	$('.contact').append('<img class="bird" src="assets/images/bird.gif" height="80">');
	$('.bird').animate({bottom: 200, left: $(window).width()}, 10000, function(){
		$(this).remove();
	});
}

// Animate the up-arrow helper button
function animateUpArrow(scroll){
	if (!scroll && animated.arrow){
		delete animated.arrow;
		$('.up-arrow').animate({opacity: 0}, 300);
	} else if (scroll && !animated.arrow){
		animated.arrow = true;
		$('.up-arrow').animate({opacity: 1}, 300);
	}
}

// Set all page section's top and bottom values
function setSectionsPosition(){
	var obj = {};
	for (var i=0; i < sections.length; i++){
		var top    = (i !== 0) ? $('.'+sections[i]).offset().top : 0;
		var bottom = (i !== sections.length - 1) ? $('.'+sections[i+1]).offset().top - 1 : $(document).height();
		obj[sections[i]] = { top: top, bottom: bottom };
	}
	return obj;
}

// Returns the current section presented on the page
function getActiveSection(scroll, sections){
	var offset = Math.floor($(window).height()/2);
	for (var key in sections){
		var section = sections[key];
		if (section.top - offset <= scroll && section.bottom - offset >= scroll)
			return key;
	}
	return false;
}

// Page animation controller
function manageAnimation(event, sPosition){
	var event = event || window.event //for IE
	event.preventDefault();
	event.stopPropagation();

	var scroll = $(window).scrollTop();
	var height = $(window).height();
	var offset = 100;

	active = getActiveSection(scroll, sPosition);
	animateUpArrow(scroll);

	for (var key in sPosition){
		var section = sPosition[key];
		if (!animated[key] && section.top < scroll + height - offset && section.bottom > scroll + offset){
			switch(key){
				case 'description' : animateDescription();  break;
				case 'competencies': animateCompetencies(); break;
				case 'skills'      : animateSkills();       break;
				case 'education'   : animateEducation();    break;
				case 'contact'     : animateContact();      break;
			}
			animated[key] = true;
		}
	}
}

// Handle page animation upon scrolling and resizing
function pageAnimationEvents(sPosition){
	$(window).scroll(function(event){
		if ($(this).scrollTop() !== scrolls){
			scrolls = $(this).scrollTop();
			preActive = active || null;
			manageAnimation(event, sPosition);
			if (active !== preActive) animateMenu();
		}
	}).resize(function(event){
		delete animated.contact;
		sPosition = setSectionsPosition();
		manageAnimation(event, sPosition);
		animateMenu(active);
	});
}

// Fire when a page is loaded or refreshed
function initPageAnimation(event){
	var sPosition = setSectionsPosition();
	manageAnimation(event, sPosition);
	pageAnimationEvents(sPosition);
	animateMenu(active);
}

// ====================================
//            Handle Events
// ====================================

function eventHandlers(){
	$('.logo, .up-arrow').on('click', scrollToTop);
	$('header nav a').on('click', scrollTo);
	$('.sticky').sticky({ topSpacing: 0 });
	$('#contact-form').submit(formSubmission);
}

// ====================================
//            iPhone View
// ====================================

function iPhoneView(){
	$('.description').before('<section class="drop-menu gradient"></section>');
	$drop = $('.drop-menu');
	$menu = $('header nav').clone().removeClass('hidden-xs');

	$('header').append('<button class="drop-menu-button">MENU</button>');
	$drop.append($menu);

	$('.drop-menu-button').on('click', function(event){
		var height = ($drop.height()) ? 0 : 180;
		$drop.animate({height: height}, 500, 'swing');
	});
}

// ------------------------------------

$(function() {
	eventHandlers();
	competencies();
	skills();
	portfolio();
});

$(window).load(function(event){
	scrolls = $(this).scrollTop();
	initPageAnimation(event);
	//iPhoneView();
});
