$(function() {
	var $list = $('.switch');

	$list.find('li').first().addClass('selected');

	$list.on('click', 'li', function () {
		$('.slider img').attr('src', 'img/slider' + $(this).attr('data-num') 
			+ '.jpg');
		$list.find('li').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#we').hover(function () {
		if ($('.pop-up').css('display') === 'none') {
			$('.pop-up').slideDown(500);
		} else {
			$(this).css('display', 'block');
		}
	}, function () {
		if ($(".pop-up").is(":hover")) {
			$(this).css('display', 'block');
		} else {
			$('.pop-up').slideUp(500);
		}
	});

	$('.pop-up').hover(function () {
		$(this).css('display', 'block');
	},
	function () {
		if (!$("#we").is(":hover"))
		$('.pop-up').slideUp(500);
	});
});