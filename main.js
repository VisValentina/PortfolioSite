$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
		menu: '#myMenu',
		showActiveTooltip: true,
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
			$('#FWName').hide();
		} else {
			checkbox.css('color', emptyCheckbox);
			$('#FWName').show();
		}
	});


	// Navbar gold line
	// $('.worksPage').hasClass('active') {
	// 	$('#hoverNavLine').css('width', '7em');
	// };
});

 //-- End
