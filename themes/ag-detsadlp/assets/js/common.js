
jQuery(document).ready(function($) {
	$(".popupcallorder").magnificPopup();
	$(".logoimg").animated("fadeInRightBig","fadeOutRightBig");
	$(".green1").animated("fadeInUp","fadeOutUp");
	$(".cambridge").animated("flipInY","flipOutY");	
	$(".ds3").animated("slideInLeft","slideOutLeft");	
	$(".ds4").animated("zoomIn","zoomOut");	
	$(".ds5").animated("rollIn","rollOut");	
	$(".ds6").animated("slideInDown","slideOutDown");	
	$(".imgch1").animated("fadeInLeft","fadeOutLeft");	
	$(".imgch2").animated("fadeInRight","fadeOutRight");	


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback

	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

	// $("#signup").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
				
	// 			$("#signup").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll

	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});