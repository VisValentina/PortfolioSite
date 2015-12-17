$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors:['projectIntro', 'firstImage', 'secondImage', 'thirdImage','finalImage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
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
	var labelDeselected = 'rgba(0, 0, 0, 0.298039)',
		labelSelected = '#000000',
		emptyCheckbox = '#f0f0f0',
		fullCheckbox = '#a8a8a8';

	$('#brandingClick').click(function(){
		var label = $('#brandingClick'),
			checkbox = $('#brandingSelected');

		if(label.css('color') === labelDeselected) {
			label.css('color', labelSelected);
			checkbox.css('color', fullCheckbox);
		} else {
			label.css('color', labelDeselected);
			checkbox.css('color', emptyCheckbox);
		}
	});

	$('.menuToggle').click(function(){
		// console.log("I click");
		if($('.projectSidebar').css('left') === '-12em') {
			$('.projectSidebar').animate({'left':'0'}, 300)
		}
		else {
			$('.projectSidebar').animate({'left':'-12em'}, 300)
		}
	});
});

 //-- End
