$(function() {
	var $list = $('.switch');
	var intervalID;

	$list.find('li').first().addClass('selected');

	$list.on('click', 'li', function () {
		$('.slider img').attr('src', 'img/slider' + $(this).attr('data-num') 
			+ '.jpg');
		$list.find('li').removeClass('selected');
		$(this).addClass('selected');
	});

	intervalID = setInterval(function () {
		var openedImgId = $('.selected').attr('data-num');
		$list.find('li').removeClass('selected');

		if (openedImgId == 5) {
			$('.slider img').attr('src', 'img/slider' + 1 
			+ '.jpg');
		} else {
			$('.slider img').attr('src', 'img/slider' + (openedImgId + 1) 
			+ '.jpg');
		}

		$('[data-num = ' + (openedImgId + 1) + ']').addClass('selected');
	}, 3000);
});