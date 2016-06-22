$(function() {
	var $list = $('.switch');

	$list.on('click', 'li', function () {
		$('.slider img').attr('src', 'img/slider' + $(this).attr('data-num') 
			+ '.jpg');
		$list.find('li').css( {'backgroundColor': '#fff'});
		$(this).css( {'backgroundColor': '#7B50A8'});
	});
});