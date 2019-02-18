var modalOpen = false;
	var justOpened = false;

$( document ).ready(function() {
	
	accomodateWindowForMobile();
	$(window).resize(accomodateWindowForMobile);
	
	createTopFade();
	createModals();

});

var accomodateWindowForMobile = function() {
		var windowWidth = $(document).width();
		
		if (windowWidth <= 700) {
			$(document).find('.section-container').css('flex-direction', 'column');
			
			$('.title-box').each(
				function(){
					$(this).width('100%');
				});
			$('.content-box').each(
				function(){
					$(this).width('100%');
				});
		}
		else{
			$(document).find('.section-container').css('flex-direction', 'row');
			
			$('.title-box').each(
				function(){
					$(this).width('40%');
				});
			$('.content-box').each(
				function(){
					$(this).width('60%');
				});
		}
    };
	
var createTopFade = function(){
	var pageTop = $('.page-top');
	pageTop.hide();
	
	var imageBottom = $('#title-img').outerHeight();
	
	$(document).scroll(function () {
		var yAtTop = $(this).scrollTop();
		
		if (yAtTop > (imageBottom - pageTop.outerHeight())) {
			pageTop.fadeIn();
		} else {
			pageTop.fadeOut();
		}

	});
};

var createModals = function(){
	$('.project-container').each(
		function(){
			var box = this;
			var modal = $(box).find('.project-modal');
			var panel = $(box).find('.project-panel');
			
			if(modal.length > 0){
				
				$(modal).hide();
				
				$(panel).click(function(){
					openModal(modal);
				});
				
				var closeButton = ($(modal).find('.close'))[0];
				
				$(closeButton).click(function(){
					closeModal(modal);
				});
			}	
		}
	);
	
	$(document).click(function(event){
		if ((modalOpen && !justOpened) && ($(event.target).closest('project-modal').length === 0)) {
			findAndClose();
		}
		else if(justOpened){
			justOpened = false;
		}
	});
}

	var openModal = function(modal){
		$(modal).fadeIn();
		modalOpen = true;
		justOpened = true;
	};
	
	var findAndClose = function(){
		var visibleModal = $('.project-modal:visible');
		closeModal(visibleModal);
	}

	var closeModal = function(modal){
		$(modal).fadeOut();
		modalOpen = false;
		justOpened = false;
	};