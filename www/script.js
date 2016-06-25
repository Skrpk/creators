$(function() {
	var $list = $('.switch');

	$list.find('li').first().addClass('selected');

	$list.on('click', 'li', function () {
		$('.slider img').attr('src', 'img/slider' + $(this).attr('data-num') 
			+ '.jpg');
		$list.find('li').removeClass('selected');
		$(this).addClass('selected');
	});
});