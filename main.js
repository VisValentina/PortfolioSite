$(document).ready(function() {
	var currentIndex = "";
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
		menu: '#myMenu',
		showActiveTooltip: true,
		// slidesNavigation: true,
		fixedElements: '#camel_fixed, .colorHider, .sliderToggle',


		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			// console.log("index", index);
			// console.log("nextIndex", nextIndex);
			switch(nextIndex) {
			case 1:
				console.log("back to first page");
				$("#camel_fixed").fadeIn(4000);
				$(".colorHider").hide();
				$(".sliderToggle").hide();
				break;
			case 2:
				$("#hoverNavLine").animate({"width":"7em"}, 140);
				currentIndex = nextIndex;
				$('#camel_fixed').fadeOut(6000);
				$(".colorHider").hide();
				$(".sliderToggle").hide();
				break;
			case 3:
				$("#hoverNavLine").animate({"width":"17em"}, 140);
				currentIndex = nextIndex;
				$('#camel_fixed').hide();
				$(".colorHider").hide();
				$(".sliderToggle").show('slow');
				break;
			case 4:
				$("#hoverNavLine").animate({"width":"22em"}, 140);
				currentIndex = nextIndex;
				$(".colorHider").hide();
				$(".sliderToggle").hide();
				break;
			default:
				currentIndex = nextIndex;
				$("#hoverNavLine").animate({"width":"0em"}, 140);
				$(".colorHider").hide();
				$(".sliderToggle").hide();
			}
		},

		//SLIDER
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			// console.log("anchorLink", anchorLink);
			// console.log("index", index);
			// console.log("slideIndex", slideIndex);
			// console.log("direction", direction);
			// console.log("nextSlideIndex", nextSlideIndex);
			// console.log(nextSlideIndex * 72.5);
			$('.range-handle').css('left', (nextSlideIndex * 72.5) + "px");
			$('.range-quantity').css('width', (nextSlideIndex * 72.5) + "px");

		}
		//SLIDER
	});
	
	function getLength(pageIndex) {
		switch(pageIndex) {
		case 2:
			return "7em";
		case 3:
			return "17em";	
		case 4:
			return "22em";	
		default:
			return "0em";
		}
	};

	$('#WorksNav').mouseover(function(e) {
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":"7em"}, 140);
	});
	$('#WorksNav').mouseout(function(e) {
		var currentIndexLength = getLength(currentIndex);
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":currentIndexLength}, 140);
	});	

	$('#PlaygroundNav').mouseover(function(e) {
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":"17em"}, 140);
	});

	$('#PlaygroundNav').mouseout(function(e) {
		var currentIndexLength = getLength(currentIndex);
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":currentIndexLength}, 140);
	});
	$('#QuiNav').mouseover(function(e) {
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":"22em"}, 140);
	});

	$('#QuiNav').mouseout(function(e) {
		var currentIndexLength = getLength(currentIndex);
		e.stopPropagation();
		$("#hoverNavLine").animate({"width":currentIndexLength}, 140);
	});

	$('#FWName').mouseover(function(){
		$('#FWDesc').css('display', 'inline');
		$('#javascriptSelected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
		$('#css3Selected').css('color', '#a8a8a8');
	});

	$('#FWName').mouseout(function(){
		$('#FWDesc').css('display', 'none');
		$('#javascriptSelected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
		$('#css3Selected').css('color', '#f0f0f0');
	});

	$('#MMName').mouseover(function(){
		$('#MMDesc').css('display', 'inline');
		$('#uiuxSelected').css('color', '#a8a8a8');
		$('#reactNativeSelected').css('color', '#a8a8a8');
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#javscriptSelected').css('color', '#a8a8a8');
	});

	$('#MMName').mouseout(function(){
		$('#MMDesc').css('display', 'none');
		$('#uiuxSelected').css('color', '#f0f0f0');
		$('#reactNativeSelected').css('color', '#f0f0f0');
		$('#brandingSelected').css('color', '#f0f0f0');
		$('#javscriptSelected').css('color', '#f0f0f0');
	});

	$('#ZName').mouseover(function(){
		$('#ZDesc').css('display', 'inline');
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
	});

	$('#ZName').mouseout(function(){
		$('#ZDesc').css('display', 'none');
		$('#brandingSelected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
	});

	$('#FSName').mouseover(function(){
		$('#FSDesc').css('display', 'inline');
		$('#javascriptSelected').css('color', '#a8a8a8');
		$('#css3Selected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
	});

	$('#FSName').mouseout(function(){
		$('#FSDesc').css('display', 'none');
		$('#javascriptSelected').css('color', '#f0f0f0');
		$('#css3Selected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
	});

	$('#RName').mouseover(function(){
		$('#RDesc').css('display', 'inline');
		$('#d3Selected').css('color', '#a8a8a8');
		$('#reactSelected').css('color', '#a8a8a8');
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#javsacriptSelected').css('color', '#a8a8a8');
	});

	$('#RName').mouseout(function(){
		$('#RDesc').css('display', 'none');
		$('#d3Selected').css('color', '#f0f0f0');
		$('#reactSelected').css('color', '#f0f0f0');
		$('#brandingSelected').css('color', '#f0f0f0');
		$('#javscriptSelected').css('color', '#f0f0f0');
	});

	// Click on tag will filter the project titles pertaining to it
	// GLOBALS
	var emptyCheckbox = 'rgb(240, 240, 240)',
		fullCheckbox = '#a8a8a8';

	$('#brandingClick').click(function(){
		var label = $('#brandingClick'),
			checkbox = $('#brandingSelected');

		if(checkbox.css('color') === emptyCheckbox) {
			checkbox.css('color', fullCheckbox);
			$('.FogWindow').remove();
		} else {
			checkbox.css('color', emptyCheckbox);
			$('#preFogWindow').append( "<div class='FogWindow'><span id='FWName' class='subHeader projectTitle'><a href='#''>FogWindow</a></span><span id='FWDesc' class='subHeader projectTitle workDescription'>Fog up your screen</span><br></div>");
		}
	});


// SLIDER
var elem = document.querySelector('.js-range');
var init = new Powerange(elem, {min: 1, max: 5, start: 1, step: 1});
elem.onchange = onSliderChange;

function onSliderChange() {
	switch(elem.value) {
		case "1":
			window.location.hash = '#thirdPage'
		break;
		case "2":
			window.location.hash = '#thirdPage/slide2'
		break;
		case "3":
			window.location.hash = '#thirdPage/slide3'
		break;
		case "4":
			window.location.hash = '#thirdPage/slide4'
		break;
		case "5":
			window.location.hash = '#thirdPage/slide5'
		break;
		default:
			window.location.hash = '#thirdPage'
	}
};
// SVG
setInterval(function() { 
	$("#camel_drawing").fadeIn(15000);
}, 2000);
// SVG
});

 //-- End

