$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors:['projectIntro', 'firstImage', 'secondImage', 'thirdImage','finalImage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
		menu: '#myMenu',
		showActiveTooltip: true,
	});


	$('#FWName').mouseover(function(){
		
		$('#javascriptSelected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
		$('#css3Selected').css('color', '#a8a8a8');
	});

	$('#FWName').mouseout(function(){
		
		$('#javascriptSelected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
		$('#css3Selected').css('color', '#f0f0f0');
	});

	$('#MMName').mouseover(function(){
		
		$('#uiuxSelected').css('color', '#a8a8a8');
		$('#reactNativeSelected').css('color', '#a8a8a8');
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#javscriptSelected').css('color', '#a8a8a8');
	});

	$('#MMName').mouseout(function(){
		
		$('#uiuxSelected').css('color', '#f0f0f0');
		$('#reactNativeSelected').css('color', '#f0f0f0');
		$('#brandingSelected').css('color', '#f0f0f0');
		$('#javscriptSelected').css('color', '#f0f0f0');
	});

	$('#ZName').mouseover(function(){
		
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
	});

	$('#ZName').mouseout(function(){
		
		$('#brandingSelected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
	});

	$('#FSName').mouseover(function(){
		
		$('#javascriptSelected').css('color', '#a8a8a8');
		$('#css3Selected').css('color', '#a8a8a8');
		$('#artdirectionSelected').css('color', '#a8a8a8');
	});

	$('#FSName').mouseout(function(){
		
		$('#javascriptSelected').css('color', '#f0f0f0');
		$('#css3Selected').css('color', '#f0f0f0');
		$('#artdirectionSelected').css('color', '#f0f0f0');
	});

	$('#RName').mouseover(function(){
		
		$('#d3Selected').css('color', '#a8a8a8');
		$('#reactSelected').css('color', '#a8a8a8');
		$('#brandingSelected').css('color', '#a8a8a8');
		$('#javsacriptSelected').css('color', '#a8a8a8');
	});

	$('#RName').mouseout(function(){
		
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

	$('.menuToggle').click(function() {
		var projectSidebar = $('.projectSidebar');
		
		if(projectSidebar.css('left').indexOf('-') === 0) {
			projectSidebar.animate({'left':'0'}, 300)
		} else {
			projectSidebar.animate({'left':'-12em'}, 300)
		}
	});

	//Hover Nav Line
	$('#playgroundNavWorks').mouseover(function(e) {
		e.stopPropagation();
		$("#hoverNavLineWorks").animate({"width":"17em"}, 140);
	});

	$('#playgroundNavWorks').mouseout(function(e) {
		e.stopPropagation();
		$("#hoverNavLineWorks").animate({"width":"7em"}, 140);
	});


	//HAMBURGER
	(function() {
	  "use strict";
	  var toggles = document.querySelectorAll(".c-hamburger");

	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  };

	  function toggleHandler(toggle) {
	    toggle.addEventListener( "click", function(e) {
	      e.preventDefault();
	      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	    });
	  }

	})();
	//HAMBURGER
});

 //-- End


