var modalOpen = false;
	var justOpened = false;

$( document ).ready(function() {
	
	accomodateWindowForMobile();
	
	//Accomodate for mobile every time the window size changes
	$(window).resize(accomodateWindowForMobile);
	
	createMovingTitleImg();
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
				
			$("#title-img.title").css({"padding-top": "5rem"});
			$(".desc-p").css({padding: "1rem"}); 	
			$(".modal-text").css({padding: "1rem"}); 
			$(".project-modal").css({ "padding-left": "5%", "padding-right": "5%"});
			
				
			$(".title").text("Allison Marbry");
			$(".subtitle").text("");
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
				
			$("#title-img.title").css({"padding-top": "10rem"});
			$(".desc-p").css({padding: "4rem"}); 	
			$(".modal-text").css({ "padding-left": "5rem", "padding-right": "5rem", "padding-top": "1rem", "padding-bottom": "3rem"}); 
			$(".project-modal").css({ "padding-left": "20%", "padding-right": "20%"});
				
			$(".title").text("Who is Allison Marbry?");
			$(".subtitle").text("Find Out Below");
		}
    };
	
var createMovingTitleImg = function(){
	const titleImg = $('#title-img');
	const reducedBy = 1500;
	
	titleImg.mousemove(function(event){
		titleImg.css('backgroundPositionX', (-event.offsetX)/(reducedBy) + "em");
		titleImg.css('backgroundPositionY', (-event.offsetY)/(reducedBy*2) + "em");
	});
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