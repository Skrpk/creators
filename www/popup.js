$(function() {

	var isOpened = false;

	$('#we').click(function () {
		if (!isOpened) {
			$('.pop-up').slideDown(500);
		} else {
			$('.pop-up').slideUp(500);
		}

		isOpened = !isOpened;
	});

	var firstClick = true;
    $(document).click(function(e) {
    	var a = ($(e.target).attr('id') == 'we') || 
    				($(e.target).parent().parent().attr('id') == 'we') ||
    				($(e.target).parent().attr('id') == 'we');
        if (!firstClick && !a) {
            $('.pop-up').slideUp(500);
            isOpened = false;
        }
        firstClick = false;
    });
});