
$(document).ready(function(){
	$(".modal-inline").fancybox({
		type: 'inline',
		fixed:false,
		maxWidth: "100%",
		title: '',
		padding: 0,
		autoResize: false,
		autoCenter: false,
		fitToView: false,
		helpers: {
			overlay: {
				fixed: false
			}
		}
	});	
});
$(function(){
	$(".js-scroll-link").click(function(){
    if(!$(this).hasClass("active")) {
      var scrollTo = $(this).data("scrollto"),
      scrollTarget = $('*[data-scrollto="'+scrollTo+'"].js-scroll-target');
      $.scrollTo(scrollTarget, 350);
    }
  });
  $(".header__ham").click(function(){
  	$(this).toggleClass("header__ham_active");
  });
});


