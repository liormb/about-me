// Javascript

// ====================================
//               Variables
// ====================================

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
	{name: 'Bootstarp',     value: 85, color: ['#D3B6C6', '#4B253A']},
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
	{name: 'github lab', image: 'githublab.png', alt: 'GithubLab Application',
	 links: {url: 'http://githublab.herokuapp.com/', github: 'https://github.com/liormb/GithubLab'},
	 stack: ['JS','Backbone','Underscore','jQuery','API','Bootstrap']
	},
	{name: 'block overflow', image: 'blockoverflow.png', alt: 'Block Overflow Application',
	 links: {url: 'http://blogjunky.herokuapp.com/', github: 'https://github.com/liormb/BlockOverflow'},
	 stack: ['Sinatra','PostgreSQL','HTML5','CSS3',"API's"]
	},
	{name: 'denatale', image: 'denatale.png', alt: 'DeNatale Jewelers Application',
	 links: {url: 'http://roundidea.com/engagement/engagement_rings', github: 'https://github.com/liormb'},
	  stack: ['PHP','MySQL','HTML5','CSS3','jQuery','AJAX']
	},
	{name: 'echonest artists', image: 'echonest-artists.png', alt: 'Echonest Artists Application',
	 links: {url: 'http://echonest-artists.herokuapp.com/', github: 'https://github.com/liormb/Echonest-Artists'},
	 stack: ['Ruby on Rails','PostgreSQL','AngularJS','jQuery','Bootstrap','API']
	},
	{name: 'checkers', image: 'checkers.png', alt: 'Checkers Application',
	 links: {url: 'http://liormb.com', github: 'https://github.com/liormb/Checkers'},
	 stack: ['HTML5','CSS3','JavaScript','jQuery','jQueryUI','Bootstrap']
	},
	{name: 'words', image: 'words.png', alt: 'Words Application',
	 links: {url: 'http://liormb.com', github: 'http://liormb.com'},
	 stack: ['Ruby on Rails','d3','HTML5','CSS3','jQuery','AJAX']
	}
];

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
//               Scrolling
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
	console.log($(this).context.hash);
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
		var $child  = '<div class="skill shadow"><div class="circle-container"></div><h1>'+data[i-1].name+'</h1>'+$circle+'</div>';
		
		$target.append($child);
		$('.skill h1').circleType({radius: 42});
		
		Circles.create({
			id:         $('#circle-'+(i+j))[0].id,
			percentage: data[i-1].value,
			radius:     25,
			width:      25,
			colors:     data[i-1].color
		});
	}
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
					'<a href="'+projects[index].links.github+'" target="_blank"><span class="project-github"></span></a>'+
				'</div>'+
			'</section>'
		);
	});
}

// ====================================
//            Page Animation
// ====================================

// Description Animation
function descriptionAnimation(){
	$('.description p').animate({opacity: 1, left: 0}, 1000, 'swing');
	$('.description img').animate({opacity: 1, right: 0}, 1000, 'swing');
}

// About-Me Animation
function aboutMeBanner(){
	$('.about-me-banner').delay(1000).animate({bottom: 0, opacity: 1}, 800, 'swing');
}

// Run All Page Animation
function pageAnimation(){
	descriptionAnimation();
	aboutMeBanner();
}

// ====================================
//            Handle Events
// ====================================

function eventHandlers(){
	$('.logo').on('click', scrollToTop);
	$('header nav a').on('click', scrollTo);
	$('.sticky').sticky({ topSpacing: 0 });
}

// ------------------------------------

$(function() {
	eventHandlers();
	pageAnimation();
	competencies();
	skills();
	portfolio();
});
