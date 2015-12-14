$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
		menu: '#myMenu',
		showActiveTooltip: true,
	});

	$('#FWName').mouseover(function(){
		$('#FWDesc').css('display', 'inline');
	});

	$('#FWName').mouseout(function(){
		$('#FWDesc').css('display', 'none');
	});

	$('#MMName').mouseover(function(){
		$('#MMDesc').css('display', 'inline');
	});

	$('#MMName').mouseout(function(){
		$('#MMDesc').css('display', 'none');
	});

	$('#ZName').mouseover(function(){
		$('#ZDesc').css('display', 'inline');
	});

	$('#ZName').mouseout(function(){
		$('#ZDesc').css('display', 'none');
	});

	$('#FSName').mouseover(function(){
		$('#FSDesc').css('display', 'inline');
	});

	$('#FSName').mouseout(function(){
		$('#FSDesc').css('display', 'none');
	});

	$('#RName').mouseover(function(){
		$('#RDesc').css('display', 'inline');
	});

	$('#RName').mouseout(function(){
		$('#RDesc').css('display', 'none');
	});

});

 //-- End
