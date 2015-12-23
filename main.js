$(document).ready(function() {
	var currentIndex = "";
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
		menu: '#myMenu',
		showActiveTooltip: true,
		slidesNavigation: true,

		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);

			switch(nextIndex) {
			case 2:
				$("#hoverNavLine").animate({"width":"7em"}, 140);
				currentIndex = nextIndex;
				break;
			case 3:
				$("#hoverNavLine").animate({"width":"17em"}, 140);
				currentIndex = nextIndex;
				break;
			case 4:
				$("#hoverNavLine").animate({"width":"22em"}, 140);
				currentIndex = nextIndex;
				break;
			default:
				currentIndex = nextIndex;
				$("#hoverNavLine").animate({"width":"0em"}, 140);
			}
		}
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

});

 //-- End

